package me.shashwathkamath
import kotlinx.coroutines.await
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlin.js.Promise
import kotlin.js.json

external class GoogleGenerativeAI(apiKey: String) {
    fun getGenerativeModel(options: dynamic): GenerativeModel
}

external class GenerativeModel {
    fun generateContent(prompt: String): Promise<dynamic>
}

@Serializable
data class AnalysisResult(
    @SerialName("match_score")
    val matchScore: Int,
    val summary: String,
    val strengths: List<String>,
    val gaps: List<String>
)

object GeminiAi {
    private const val API_KEY = ApiKey.GEMINI_API_KEY

    private val genAI by lazy {
        val gga = js("window.GoogleGenerativeAI")
        if (js("typeof gga === 'undefined'")) {
            console.error("GoogleGenerativeAI SDK not loaded. Please check index.html.")
            null
        } else {
            GoogleGenerativeAI(API_KEY)
        }
    }

    suspend fun analyze(profile: String, jobDescription: String): AnalysisResult? {
        val model = genAI?.getGenerativeModel(json("model" to "gemini-2.0-flash")) ?: return null
        val prompt = """
            You are an expert tech recruiter and career coach.
            Analyze the following professional profile against the provided job description.

            My Profile:
            "$profile"

            Job Description:
            "$jobDescription"

            Provide your analysis as a JSON object with the following exact structure, with no additional text or markdown formatting:
            {
              "match_score": <a number between 0 and 100 representing the percentage match>,
              "summary": "<a one-paragraph summary of how well the profile fits the role>",
              "strengths": ["<a list of key skills and experiences from the profile that are a strong match>"],
              "gaps": ["<a list of key skills from the job description that are missing from the profile, or suggest areas for growth>"]
            }
        """.trimIndent()
        return try {
            val result = model.generateContent(prompt).await()
            val response = result.response
            val text = response.text() as String

            // The model might wrap the JSON in markdown. We need to extract the raw JSON string.
            val startIndex = text.indexOf('{')
            val endIndex = text.lastIndexOf('}')
            if (startIndex == -1 || endIndex == -1) {
                console.error("AI response did not contain a valid JSON object.", text)
                return null
            }
            val jsonString = text.substring(startIndex, endIndex + 1)

            // Use kotlinx.serialization to parse the JSON string into our data class.
            // Note: This requires the kotlinx.serialization library to be included in your project's dependencies.
            Json.decodeFromString<AnalysisResult>(jsonString)
        } catch (e: Exception) {
            console.error("Failed to analyze or parse AI response:", e.message)
            null
        }
    }
}