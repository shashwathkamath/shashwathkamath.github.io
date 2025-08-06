package me.shashwathkamath

import androidx.compose.runtime.*
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.*
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import kotlin.js.json

fun main() {
    Firebase.logEvent("page_view")
    renderComposable(rootElementId = "root") {
        var darkMode by remember { mutableStateOf(false) }
        LaunchedEffect(darkMode) {
            val body = kotlinx.browser.document.body
            if (darkMode) {
                body?.classList?.add("dark")
            } else {
                body?.classList?.remove("dark")
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
                Div({ classes("col-md-8") }) {
                    H1({ classes("display-4") }) { Text("Shashwath Kamath") }
                    P({ classes("lead") }) { Text("Senior Android & Full Stack Engineer | Innovator | Mentor") }
                    Div({ classes("mt-4") }) {
                        A(href = "#contact",
                            attrs = { classes("btn", "btn-dark", "btn-lg", "m-1")
                            onClick { Firebase.logEvent(
                                "hero_button_click",
                                json("button_name" to "get_in_touch")
                            ) }
                            })
                        { Text("Get in Touch") }
                        A(href = PortfolioData.resumeUrl, attrs = {
                            classes("btn", "btn-dark", "btn-lg", "m-1")
                            attr("download", "")
                            onClick {
                                Firebase.logEvent(
                                    "hero_button_click",
                                    json("button_name" to "download_resume")
                                )
                            }
                        }) { Text("Download Resume") }
                        Button(attrs = {
                            classes("btn", "btn-dark", "btn-lg", "m-1")
                            onClick {
                                Firebase.logEvent(
                                    "theme_toggle_click",
                                    json("toggled_to" to if (darkMode) "light_mode" else "dark_mode")
                                )
                                toggleDarkMode()
                            }
                        }) { Text(if (darkMode) "Light Mode" else "Dark Mode") }
                    }
                }
                Div({ classes("col-md-4", "text-center", "d-none", "d-md-block") }) {
                    Img(src = "/images/profile-picture.jpg", alt = "Shashwath Kamath", attrs = {
                        classes("img-fluid", "rounded-circle")
                        style {
                            width(200.px)
                            height(200.px)
                        }
                    })
                }
            }
        }
    }
}

@Composable
fun Sidebar() {
    Div({ classes("col-md-3", "sidebar") }) {
        Div({ classes("card", "p-3", "mb-4", "text-center", "bg-primary", "text-white") }) {
            H4({ classes("card-title") }) { Text("AI Profile Matcher") }
            P({ classes("card-text", "small") }) { Text("See how my skills align with your job opening in seconds.") }
            A(href = "#profile-matcher", attrs = { classes("btn", "btn-light") }) {
                Text("Analyze Now")
            }
        }

        H3 { Text("Navigation") }
        Ul({ classes("nav", "flex-column") }) {
            PortfolioData.navigationLinks.forEach { (name, sectionId) ->
                Li({ classes("nav-item") }) {
                    A(href = sectionId, attrs = { classes("nav-link") }) { Text(name) }
                }
            }
        }
        H3({ classes("mt-4") }) { Text("Connect") }
        Div({ classes("d-flex", "justify-content-center", "justify-content-md-start") }) {
            PortfolioData.socialLinks.forEach { (url, iconClass) ->
                A(href = url, attrs = {
                    classes("social-icon", "me-3")
                    // FIX: Use attr() to set the target directly
                    attr("target", "_blank")
                }) {
                    I({ classes("fab", iconClass, "fa-2x") })
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
        PatentsAndAwardsSection()
        ProfileMatchSection()
        ProjectsSection()
        SkillsSection()
        ContactSection()
    }
}

@Composable
fun SummarySection() {
    Section({ id("summary"); classes("section") }) {
        H2 { Text("Professional Summary") }
        P { Text(PortfolioData.summary) }
    }
}

@Composable
fun ExperienceSection() {
    Section({ id("experience"); classes("section") }) {
        H2 { Text("Work Experience") }
        PortfolioData.jobs.forEach { job ->
            Div({ classes("experience-card", "mb-4") }) {
                H4 { Text(job.title) }
                // Note: Company and Period are now part of the title string in your data model.
                // If you wanted to separate them, you'd add them as fields to the Job data class.
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
fun ProfileMatchSection() {
    var jobDescriptionText by remember { mutableStateOf("") }
    var analysisResult by remember { mutableStateOf<AnalysisResult?>(null) }
    var isLoading by remember { mutableStateOf(false) }
    var errorMessage by remember { mutableStateOf<String?>(null) }
    val coroutineScope = rememberCoroutineScope()

    val profileText = remember {
        val skills = PortfolioData.skills.joinToString(", ")
        val experience = PortfolioData.jobs.joinToString("\n\n") { job ->
            "${job.title}\n${job.details.joinToString("\n- ")}\nTech Stack: ${job.techStack}"
        }
        """
        Professional Summary:
        ${PortfolioData.summary}

        Skills: $skills

        Experience:
        $experience
        """.trimIndent()
    }

    fun performAnalysis() {
        Firebase.logEvent(
            eventName = "analyze_button_click",
            params = json("description_length" to jobDescriptionText.length)
        )
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
                    errorMessage = "Sorry, the analysis could not be completed. The AI returned an invalid response."
                }
            } catch (e: Exception) {
                console.error("An unexpected error occurred during analysis:", e)
                errorMessage = "An unexpected error occurred. Please check the browser console (F12) for more details."
            } finally {
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
            if (jobDescriptionText.isBlank() || isLoading) {
                attr("disabled", "true")
            }
        }) {
            Text(if (isLoading) "Analyzing..." else "Analyze with AI")
        }

        if (isLoading) {
            Div({ classes("mt-3", "d-flex", "align-items-center") }) {
                Div({ classes("spinner-border", "text-primary", "me-3") }) {
                    Span({ classes("visually-hidden") }) { Text("Loading...") }
                }
                Span { Text("Analyzing... This may take a moment.") }
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
        H2 { Text("Personal Projects") }
        Div({ classes("row") }) {
            PortfolioData.projects.forEach { project ->
                Div({ classes("col-md-6", "mb-4") }) {
                    Div({ classes("card", "h-100") }) { // Using Bootstrap card for better structure
                        Div({ classes("card-body", "d-flex", "flex-column") }) {
                            H5({ classes("card-title") }) { Text(project.title) }
                            P({ classes("card-text", "flex-grow-1") }) { Text(project.description) }
                            Div({ classes("mt-auto") }) {
                                project.links.forEach { (name, url) ->
                                    A(href = url, attrs = {
                                        classes("btn", "btn-sm", "btn-outline-primary", "me-2")
                                        attr("target", "_blank")
                                        onClick {
                                            Firebase.logEvent(
                                                eventName = "project_link_click",
                                                params = json("project_title" to project.title, "link_name" to name)
                                            )
                                        }
                                    }) { Text(name) }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun PatentsAndAwardsSection() {
    Section({ id("patents"); classes("section") }) {
        H2 { Text("Patents & Awards") }
        PortfolioData.accomplishments.forEach { accomplishment ->
            Div({ classes("accomplishment-card", "mb-4") }) {
                H4 { Text(accomplishment.title) }
                val details = mutableListOf<String>()
                accomplishment.issuer?.takeIf { it.isNotBlank() }?.let {
                    details.add(it)
                }
                accomplishment.id?.takeIf { it.isNotBlank() }?.let {
                    details.add("ID: $it")
                }
                if (details.isNotEmpty()) {
                    P({ classes("text-muted") }) {
                        Text(details.joinToString(" | "))
                    }
                }
                accomplishment.url?.let { url ->
                    A(href = url, attrs = {
                        classes("btn", "btn-sm", "btn-outline-primary")
                        attr("target", "_blank")
                        onClick {
                            Firebase.logEvent(
                                eventName = "accomplishment_link_click",
                                params = json("accomplishment_title" to accomplishment.title)
                            )
                        }
                    }) { Text("View Details") }
                }
            }
        }
    }
}

@Composable
fun SkillsSection() {
    Section({ id("skills"); classes("section") }) {
        H2 { Text("Skills & Technologies") }
        Div({ classes("skills-grid") }) {
            PortfolioData.skills.forEach { skill ->
                Span({ classes("skill-card") }) { Text(skill) }
            }
        }
    }
}

@Composable
fun ContactSection() {
    Section({ id("contact"); classes("section") }) {
        H2 { Text("Get in Touch") }
        P { Text("I'm always open to discussing new projects, creative ideas. Feel free to reach out.") }
        P {
            B { Text("Email: ") }
            A(href = "mailto:${PortfolioData.email}") { Text(PortfolioData.email) }
        }
    }
}

@Composable
fun FooterSection() {
    Footer {
        Text("© ${js("new Date().getFullYear()")} Shashwath Kamath. Built with Kotlin/JS and Compose for Web.")
    }
}