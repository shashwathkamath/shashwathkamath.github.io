import androidx.compose.runtime.*
import kotlinx.browser.document
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import kotlin.js.Date

data class Job(
    val title: String,
    val details: List<String>,
    val techStack: String
)

data class Project(
    val title: String,
    val description: String,
    val links: List<Pair<String, String>>
)

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