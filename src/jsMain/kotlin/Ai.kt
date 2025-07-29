package me.shashwathkamath
import kotlinx.coroutines.await
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import me.shashwathkamath.config.BuildConfig
import kotlin.js.Promise
import kotlin.js.json

@JsModule("@google/generative-ai")
@JsNonModule
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
    private val API_KEY = BuildConfig.GEMINI_API_KEY
    private val genAI: GoogleGenerativeAI? = if (API_KEY.isNotBlank()) {
        try {
            GoogleGenerativeAI(API_KEY)
        } catch (e: Exception) {
            console.error("Failed to initialize GoogleGenerativeAI.", e)
            null
        }
    } else {
        console.error("Gemini API Key is missing. Please check your configuration.")
        null
    }

    suspend fun analyze(profile: String, jobDescription: String): AnalysisResult? {
        if (genAI == null) {
            console.error("Gemini AI client is not available.")
            return null
        }
        val model = genAI?.getGenerativeModel(json("model" to "gemini-2.0-flash")) ?: run {
            console.error("Gemini AI model could not be loaded.")
            return null
        }
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

            // This logic to extract JSON from markdown is good.
            val startIndex = text.indexOf('{')
            val endIndex = text.lastIndexOf('}')
            if (startIndex == -1 || endIndex == -1) {
                console.error("AI response did not contain a valid JSON object.", text)
                return null
            }
            val jsonString = text.substring(startIndex, endIndex + 1)

            Json { ignoreUnknownKeys = true }.decodeFromString<AnalysisResult>(jsonString)        } catch (e: Exception) {
            console.error("Failed to analyze or parse AI response:", e.message)
            null
        }
    }
}