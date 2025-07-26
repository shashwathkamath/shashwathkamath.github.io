import androidx.compose.runtime.*
import kotlinx.browser.document
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable

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
    Section({ classes("hero") }) {
        Div({ classes("container") }) {
            H1({ classes("display-4") }) { Text("Shashwath Kamath") }
            P({ classes("lead") }) { Text("Senior Android & Full Stack Engineer | Innovator | Mentor") }
            A(href = "#contact", attrs = { classes("btn", "btn-light", "btn-lg") }) { Text("Get in Touch") }
            A(href = "Shashwath-Kamath-Senior-Engineer.pdf", attrs = {
                classes("btn", "btn-light", "btn-lg", "ms-2")
                attr("download", "")
            }) { Text("Download Resume") }
            Button(attrs = {
                classes("btn", "btn-light", "btn-lg", "ms-2")
                onClick { toggleDarkMode() }
            }) { Text(if (darkMode) "Light Mode" else "Dark Mode") }
        }
    }
}

@Composable
fun Sidebar() {
    Div({ classes("col-md-3", "sidebar") }) {
        H3 { Text("Navigation") }
        Ul({ classes("nav", "flex-column") }) {
            listOf(
                "Summary" to "#summary",
                "Experience" to "#experience",
                "Skills" to "#skills",
                "Projects" to "#projects",
                "Patents & Awards" to "#patents",
                "Contact" to "#contact"
            ).forEach { (label, href) ->
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
        val jobs = listOf(
            mapOf(
                "title" to "Senior Android and Full Stack Engineer - Infovision, Verizon (Oct 2023 - Present, Basking Ridge, NJ)",
                "details" to listOf(
                    "Architect My Verizon Services managing 25M+ devices, enhancing app efficiency and reliability.",
                    "Build Extension Profile Module for dynamic app module management, optimizing service downloads.",
                    "Create Carrier Config feature, enabling server-side carrier settings for improved user experience",
                    "Developed a Unified Settings App for OEMs, ensuring compliance with Verizon standards and streamlining the device finalization process.",
                    "Orchestrated cross-functional teams to create an Automation Portal, achieving a 40% reduction in QA workload through optimized testing",
                    "Android Tech Stack: Kotlin, Clean Architecture pattern, Java, MVI, Jetpack Compose",
                    "Full Stack: Typescript, Next Js Framwork, Express"
                ),
                "techStack" to "Kotlin, Java, Jetpack Compose, TypeScript, Next.js",
                "fullStack" to "Typescript, Next Js Framework, Express"
            ),
            mapOf(
                "title" to "Senior Mobile and Backend Engineer - Johnson Controls Inc. (Aug 2021 - Aug 2023, Edison, NJ)",
                "details" to listOf(
                    "Led integration of OAuth for user authentication.",
                    "Developed advanced video streaming features using WebRTC, resulting in improved Time to First Frame and user engagement.",
                    "Architected a Rules Engine with Apache Kafka, optimizing performance for 1 million event messages, driving substantial efficiency gains",
                    "Mentored junior engineers on best coding practices, fostering a culture of continuous learning and improving code quality across the team.",
                    "Resolved complex issues in the Android Native Java and Typescript codebase, ensuring smooth deployment of the CloudVue app on the Google Play Store.",
                    "Optimized codebase performance, leading to faster load times and a noticeable increase in user satisfaction across applications.",
                ),
                "techStack" to "React Native, TypeScript, Apache Kafka",
                "fullStack" to "Typescript, Next Js Framework, Express"
            ),
            mapOf(
                "title" to "Android Framework Engineer - L&T Technology Services (Oct 2017 - Aug 2021, Berkeley Heights, NJ)",
                "details" to listOf(
                    "Enhanced user experience by developing intuitive SetupWizard screens for carrier-specific Samsung devices, leading to increased user satisfaction",
                    "Analyzed carrier requirements to maintain and implement critical system app features ensuring compliance and operational efficiency.",
                    "Created automation scripts using Python for app testing, significantly reducing manual testing time and improving deployment speed.",
                    "Partnered with cross-functional teams to gather feedback, driving continuous improvements in carrier applications and enhancing overall performance.",
                    "Demonstrated strong problem-solving skills by addressing technical challenges in app development, fostering a collaborative team environment.",
                    "Enhanced app performance by aligning system app features with carrier needs, resulting in improved user satisfaction and engagement",
                ),
                "techStack" to "Kotlin, MVVM, Java, XML"
            ),
            mapOf(
                "title" to "Senior Mobile Developer - Shobiz Experiential Communications Pvt Ltd. (Mar 2013 - Dec 2014, Mumbai, India)",
                "details" to listOf(
                    "Led mobile app development, enhancing user engagement and data collection efficiency",
                    "Resolved app issues, ensuring seamless updates and improved functionality.",
                    "Utilized Android and iOS tech stack, advancing project delivery timelines",
                    "Spearheaded the development of mobile applications, enhancing user engagement and contributing to a 30increase in client project success.",
                    "Designed interactive wireframes that improved client presentation outcomes, leading to a notable uptick in project approvals.",
                    "Fostered teamwork across departments to build kiosk applications, streamlining user data collection and enhancing service responsiveness.",
                ),
                "techStack" to "MVP pattern, Java, XML"
            )
        )
        jobs.forEach { job ->
            Div({ classes("experience-card") }) {
                H4 { Text(job["title"] as String) }
                Ul {
                    (job["details"] as List<String>).forEach { detail ->
                        Li { Text(detail) }
                    }
                }
                P { Text("Tech Stack: ${job["techStack"] as String}") }
            }
        }
    }
}

@Composable
fun SkillsSection() {
    Section({ id("skills"); classes("section") }) {
        H2 { Text("Skills") }
        Div({ classes("skills-grid") }) {
            val skills = listOf("Android Development", "React Native", "React JS", "Flutter", "Redux Thunk", "Java", "TypeScript", "Dart", "JavaScript", "Kotlin", "Node JS", "Express JS", "PostgreSQL", "SQL", "Android Studio", "VS Code", "Git", "Unit Testing", "Mentorship", "Agile Methodologies", "Performance Optimization", "Continuous Integration")
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
        val projects = listOf(
            mapOf(
                "title" to "BookDigest (BookApp) - In Progress",
                "description" to "A mobile app for exchanging books (free or paid).",
                "links" to listOf("Frontend" to "https://github.com/shashwathkamath/BookApp", "Backend" to "https://github.com/shashwathkamath/BookApp-Backend")
            )
        )
        projects.forEach { project ->
            Div({ classes("project-card") }) {
                H5 { Text(project["title"] as String) }
                P { Text(project["description"] as String) }
                (project["links"] as List<Pair<String, String>>).forEach { (label, url) ->
                    A(href = url, attrs = { classes("btn", "btn-primary", "me-2"); attr("target", "_blank") }) { Text(label) }
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
        P { Text("© 2025 Shashwath Kamath. All rights reserved.") }
    }
}