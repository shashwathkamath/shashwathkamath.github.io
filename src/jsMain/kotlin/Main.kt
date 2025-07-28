import androidx.compose.runtime.*
import kotlinx.browser.document
import kotlinx.coroutines.launch
import me.shashwathkamath.AnalysisResult
import me.shashwathkamath.GeminiAi
import org.jetbrains.compose.web.attributes.placeholder
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.width
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import kotlin.js.Date


fun main() {
    renderComposable(rootElementId = "root") {
        var darkMode by remember { mutableStateOf(false) }

        LaunchedEffect(darkMode) {
            if (darkMode) {
                document.body?.classList?.add("dark")
            } else {
                document.body?.classList?.remove("dark")
            }
        }

        ResumeLayout(darkMode) { darkMode = !darkMode }
    }
}

@Composable
fun ResumeLayout(darkMode: Boolean, toggleDarkMode: () -> Unit) {
    Div({ classes("container-fluid", "p-0") }) {
        HeroSection(darkMode, toggleDarkMode)
        Div({ classes("row", "m-0") }) {
            Sidebar()
            MainContent()
        }
        FooterSection()
    }
}

@Composable
fun HeroSection(darkMode: Boolean, toggleDarkMode: () -> Unit) {
    Section({ classes("hero", "text-center", "text-md-start") }) {
        Div({ classes("container") }) {
            Div({ classes("row", "align-items-center") }) {
                // Column for the text content
                Div({ classes("col-md-8") }) {
                    H1({ classes("display-4") }) { Text("Shashwath Kamath") }
                    P({ classes("lead") }) { Text("Senior Android & Full Stack Engineer | Innovator | Mentor") }
                    A(href = "#contact", attrs = { classes("btn", "btn-light", "btn-lg", "m-1") }) { Text("Get in Touch") }
                    A(href = "Shashwath-Kamath-Senior-Engineer.pdf", attrs = {
                        classes("btn", "btn-light", "btn-lg", "m-1")
                        attr("download", "")
                    }) { Text("Download Resume") }
                    Button(attrs = {
                        classes("btn", "btn-light", "btn-lg", "m-1")
                        onClick { toggleDarkMode() }
                    }) { Text(if (darkMode) "Light Mode" else "Dark Mode") }
                }
            }
        }
    }
}

@Composable
fun Sidebar() {
    Div({ classes("col-md-3", "sidebar") }) {
        H3 { Text("Navigation") }
        Ul({ classes("nav", "flex-column") }) {
            // Data is now read from the PortfolioData object
            PortfolioData.navigationLinks.forEach { (label, href) ->
                Li({ classes("nav-item") }) {
                    A(href = href, attrs = { classes("nav-link") }) { Text(label) }
                }
            }
        }
    }
}

@Composable
fun MainContent() {
    Div({ classes("col-md-9", "main-content") }) {
        SummarySection()
        ExperienceSection()
        ProjectsSection()
        PatentsAwardsSection()
        SkillsSection()
        ProfileMatchSection()
        ContactSection()
    }
}

@Composable
fun SummarySection() {
    Section({ id("summary"); classes("section") }) {
        H2 { Text("Professional Summary") }
        P {
            Text("Seasoned Senior Android and Full Stack Engineer with over 12 years of experience in designing and delivering efficient, scalable mobile and web applications. Proficient in Android Native development with Java and Kotlin, and adept in cross-platform solutions using React Native for 3 years. Skilled in full-stack technologies including TypeScript, Next.js, and Express.js, with a strong focus on performance optimization, user satisfaction, and mentoring teams to drive innovation and maintain industry standards.")
        }
    }
}

@Composable
fun ExperienceSection() {
    Section({ id("experience"); classes("section") }) {
        H2 { Text("Experience") }
        // Data is now read from the PortfolioData object
        val jobs = PortfolioData.jobs
        jobs.forEach { job ->
            Div({ classes("experience-card", "mb-4") }) {
                H4 { Text(job.title) }
                Ul {
                    job.details.forEach { detail ->
                        Li { Text(detail) }
                    }
                }
                P {
                    B { Text("Tech Stack: ") }
                    Text(job.techStack)
                }
            }
        }
    }
}

@Composable
fun SkillsSection() {
    Section({ id("skills"); classes("section") }) {
        H2 { Text("Skills") }
        Div({ classes("skills-grid") }) {
            // Data is now read from the PortfolioData object
            val skills = PortfolioData.skills
            skills.forEach { skill ->
                Div({ classes("skill-card") }) { Text(skill) }
            }
        }
    }
}


/**
 * A new section allowing recruiters to analyze a job description against the profile.
 * This implementation uses a client-side keyword matching for demonstration purposes.
 * A production version should replace the scoring logic with a call to a backend API for NLP.
 */
@Composable
fun ProfileMatchSection() {
    // State for the text area input
    var jobDescriptionText by remember { mutableStateOf("") }

    // A single state to hold the entire analysis result from the AI
    var analysisResult by remember { mutableStateOf<AnalysisResult?>(null) }

    // State for loading and error messages
    var isLoading by remember { mutableStateOf(false) }
    var errorMessage by remember { mutableStateOf<String?>(null) }

    // Coroutine scope to launch the suspend function for the API call
    val coroutineScope = rememberCoroutineScope()
    val profileText = remember {
        val skills = PortfolioData.skills.joinToString(", ")
        val experience = PortfolioData.jobs.joinToString("\n\n") { job ->
            "${job.title}\n${job.details.joinToString("\n- ")}\nTech Stack: ${job.techStack}"
        }
        """
        Professional Summary:
        Seasoned Senior Android and Full Stack Engineer with over 12 years of experience in designing and delivering efficient, scalable mobile and web applications. Proficient in Android Native development with Java and Kotlin, and adept in cross-platform solutions using React Native for 3 years. Skilled in full-stack technologies including TypeScript, Next.js, and Express.js, with a strong focus on performance optimization, user satisfaction, and mentoring teams to drive innovation and maintain industry standards.

        Skills: $skills

        Experience:
        $experience
        """.trimIndent()
    }

    // This function is now more robust with try-catch-finally
    fun performAnalysis() {
        // Reset state before starting
        isLoading = true
        analysisResult = null
        errorMessage = null

        coroutineScope.launch {
            try {
                val result = GeminiAi.analyze(
                    profile = profileText,
                    jobDescription = jobDescriptionText
                )
                if (result != null) {
                    analysisResult = result
                } else {
                    // This case is hit if analyze() returns null from its own internal error handling
                    errorMessage = "Sorry, the analysis could not be completed. The AI returned an invalid response."
                }
            } catch (e: Exception) {
                // This will catch any other unexpected errors, like the 404 you saw.
                console.error("An unexpected error occurred during analysis:", e)
                errorMessage = "An unexpected error occurred. Please check the browser console (F12) for more details."
            } finally {
                // This 'finally' block ensures the loading spinner is always turned off,
                // even if an error occurs. This prevents the UI from "hanging".
                isLoading = false
            }
        }
    }

    Section({ id("profile-matcher"); classes("section") }) {
        H2 { Text("AI-Powered Profile Matcher") }
        P { Text("Paste a job description below to get an AI-generated analysis of how well it matches my profile.") }
        Div({ classes("mb-3") }) {
            TextArea(jobDescriptionText) {
                classes("form-control")
                style { property("height", "150px") }
                placeholder("Paste job description here...")
                onInput { event ->
                    jobDescriptionText = event.value
                    // Reset results if text changes
                    analysisResult = null
                    errorMessage = null
                }
            }
        }
        Button(attrs = {
            classes("btn", "btn-primary")
            onClick {
                if (jobDescriptionText.isNotBlank()) {
                    performAnalysis()
                }
            }
            // Disable button if there's no text or if it's loading
            if (jobDescriptionText.isBlank() || isLoading) {
                attr("disabled", "true")
            }
        }) {
            Text(if (isLoading) "Analyzing..." else "Analyze with AI")
        }
        if (isLoading) {
            Div({ classes("mt-3", "spinner-border", "text-primary") }) {
                Span({ classes("visually-hidden") }) { Text("Loading...") }
            }
        }
        errorMessage?.let { error ->
            Div({ classes("alert", "alert-danger", "mt-4") }) {
                Text(error)
            }
        }
        analysisResult?.let { result ->
            Div({ classes("mt-4", "p-3", "border", "rounded") }) {
                H4 { Text("AI Analysis Result") }
                P { B { Text("Overall Match Score: ${result.matchScore}%") } }
                Div({ classes("progress") }) {
                    Div({
                        classes("progress-bar")
                        style { width(result.matchScore.percent) }
                        attr("role", "progressbar")
                        attr("aria-valuenow", result.matchScore.toString())
                        attr("aria-valuemin", "0")
                        attr("aria-valuemax", "100")
                    })
                }
                H5({ classes("mt-4") }) { Text("Summary") }
                P { Text(result.summary) }
                H5({ classes("mt-3") }) { Text("Strengths") }
                Ul({ classes("list-group") }) {
                    result.strengths.forEach { strength ->
                        Li({ classes("list-group-item") }) { Text(strength) }
                    }
                }
                H5({ classes("mt-3") }) { Text("Gaps / Areas for Growth") }
                Ul({ classes("list-group") }) {
                    result.gaps.forEach { gap ->
                        Li({ classes("list-group-item") }) { Text(gap) }
                    }
                }
            }
        }
    }
}

@Composable
fun ProjectsSection() {
    Section({ id("projects"); classes("section") }) {
        H2 { Text("Projects") }
        // Data is now read from the PortfolioData object
        val projects = PortfolioData.projects
        projects.forEach { project ->
            Div({ classes("project-card") }) {
                H5 { Text(project.title) }
                P { Text(project.description) }
                project.links.forEach { (label, url) ->
                    A(href = url, attrs = {
                        classes("btn", "btn-primary", "me-2")
                        attr("target", "_blank")
                        attr("rel", "noopener noreferrer") // Good practice for security
                    }) { Text(label) }
                }
            }
        }
    }
}

@Composable
fun PatentsAwardsSection() {
    Section({ id("patents"); classes("section") }) {
        H2 { Text("Patents & Awards") }
        Ul {
            Li {
                B { Text("Patent: Image-Surveilled Security Escort (US20230274552A1)") }
                P { Text("Co-inventor on a system for enhancing user safety using image surveillance and notifications.") }
                A(href = "https://patents.google.com/patent/US20230274552A1", attrs = { attr("target", "_blank") }) { Text("View Patent") }
            }
            Li {
                B { Text("Award: Best Innovations in Mobile Applications") }
                P { Text("Awarded by Shobiz for creating an innovative QR scanner module in a mobile app for SAP Singapore.") }
            }
        }
    }
}

@Composable
fun ContactSection() {
    Section({ id("contact"); classes("section") }) {
        H2 { Text("Contact") }
        Div({ classes("d-flex", "justify-content-start") }) {
            A(href = "mailto:kamathsh91@gmail.com", attrs = { classes("social-icon", "me-4") }) {
                I({ classes("fas", "fa-envelope", "fa-2x") })
            }
            A(href = "https://github.com/shashwathkamath", attrs = { classes("social-icon", "me-4") }) {
                I({ classes("fab", "fa-github", "fa-2x") })
            }
            A(href = "https://www.linkedin.com/in/kamathshashwath", attrs = { classes("social-icon") }) {
                I({ classes("fab", "fa-linkedin", "fa-2x") })
            }
        }
    }
}

@Composable
fun FooterSection() {
    Footer {
        val currentYear = Date().getFullYear()
        P { Text("© $currentYear Shashwath Kamath. All rights reserved.") }
    }
}