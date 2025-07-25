import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import kotlinx.browser.document
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.B
import org.jetbrains.compose.web.dom.Br
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.H2
import org.jetbrains.compose.web.dom.H5
import org.jetbrains.compose.web.dom.Li
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Section
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.Ul
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

        HeroSection(darkMode, { darkMode = !darkMode })
        SummarySection()
        ExperienceSection()
        SkillsSection()
        ProjectsSection()
        PatentsAwardsSection()
        //ContactSection()
    }
}

@Composable
fun HeroSection(darkMode: Boolean, toggleDarkMode: () -> Unit) {
    Section({ classes("hero") }) {
        Div({ classes("container") }) {
            H1({ classes("display-4") }) { Text("Shashwath Kamath") }
            P({ classes("lead") }) { Text("Senior Android Developer | Innovator | Mentor") }
            A(href = "#contact", attrs = {
                classes("btn", "btn-light", "btn-lg")
                attr("aria-label", "Get in Touch")
            }) { Text("Get in Touch") }
            Br()
            A(href = "Shashwath-Kamath-Resume.pdf", attrs = {
                classes("btn", "btn-resume")
                attr("aria-label", "Download Resume")
                attr("download", "")
            }) { Text("Download Resume") }
            Br()
            Button(attrs = {
                classes("btn", "btn-toggle")
                onClick { toggleDarkMode() }
            }) { Text(if (darkMode) "Switch to Light Mode" else "Switch to Dark Mode") }
        }
    }
}

@Composable
fun SummarySection() {
    Section({ id("summary"); classes("section", "bg-light") }) {
        Div({ classes("container") }) {
            H2({ classes("text-center", "mb-4") }) { Text("Professional Summary") }
            P({ classes("text-center", "mx-auto"); style { property("max-width", "800px") } }) {
                Text("Seasoned Senior Android Developer with over 12 years of hands-on experience in crafting efficient, reliable, and scalable mobile and web applications. Expert in Android Native development using Java and Kotlin, with a strong track record of optimizing app performance, boosting user satisfaction, and delivering innovative solutions that meet rigorous industry standards. Passionate about driving technological advancement through creative problem-solving and mentoring cross-functional teams to foster collaboration and growth. Additionally, proficient in React Native for the past 3 years, enabling seamless cross-platform development and enhanced project versatility.")
            }
        }
    }
}

@Composable
fun ExperienceSection() {
    val jobs = listOf(
        mapOf(
            "title" to "Senior Android and Full Stack Engineer - Infovision, Verizon (Oct 2023 - Present, Basking Ridge, NJ)",
            "details" to listOf(
                "Architect My Verizon Services managing 25M+ devices, enhancing app efficiency and reliability.",
                "Build Extension Profile Module for dynamic app module management, optimizing service downloads.",
                "Create Carrier Config feature, enabling server-side carrier settings for improved user experience.",
                "Developed a Unified Settings App for OEMs, ensuring compliance with Verizon standards and streamlining the device finalization process.",
                "Orchestrated cross-functional teams to create an Automation Portal, achieving a 40% reduction in QA workload through optimized testing."
            ),
            "techStack" to "Android Tech Stack: Kotlin, Clean Architecture pattern, Java, MVI, Jetpack Compose | Full Stack: Typescript, Next Js Framework, Express"
        ),
        mapOf(
            "title" to "Senior Mobile and Backend Engineer - Johnson Controls Inc. (Aug 2021 - Aug 2023, Edison, NJ)",
            "details" to listOf(
                "Led integration of OAuth for user authentication, enhancing security and user experience across mobile and web platforms.",
                "Developed advanced video streaming features using WebRTC, resulting in improved Time to First Frame and user engagement.",
                "Architected a Rules Engine with Apache Kafka, optimizing performance for 1 million event messages, driving substantial efficiency gains.",
                "Mentored junior engineers on best coding practices, fostering a culture of continuous learning and improving code quality across the team.",
                "Resolved complex issues in the Android Native Java and Typescript codebase, ensuring smooth deployment of the CloudVue app on the Google Play Store.",
                "Optimized codebase performance, leading to faster load times and a noticeable increase in user satisfaction across applications."
            ),
            "techStack" to "Android Tech Stack: React Native, Typescript, React Js, Jetpack compose | Full Stack: Typescript, Next Js Framework, Express"
        ),
        mapOf(
            "title" to "Android Framework Engineer - L&T Technology Services (Oct 2017 - Aug 2021, Berkeley Heights, NJ)",
            "details" to listOf(
                "Enhanced user experience by developing intuitive SetupWizard screens for carrier-specific Samsung devices, leading to increased user satisfaction.",
                "Analyzed carrier requirements to maintain and implement critical system app features, ensuring compliance and operational efficiency.",
                "Created automation scripts using Python for app testing, significantly reducing manual testing time and improving deployment speed.",
                "Partnered with cross-functional teams to gather feedback, driving continuous improvements in carrier applications and enhancing overall performance.",
                "Demonstrated strong problem-solving skills by addressing technical challenges in app development, fostering a collaborative team environment.",
                "Enhanced app performance by aligning system app features with carrier needs, resulting in improved user satisfaction and engagement."
            ),
            "techStack" to "Android Tech Stack: Kotlin, MVVM pattern, Java, XML, Jetpack Compose"
        ),
        mapOf(
            "title" to "Senior Mobile Developer - Shobiz Experiential Communications Pvt Ltd. (Mar 2013 - Dec 2014, Mumbai, India)",
            "details" to listOf(
                "Led mobile app development, enhancing user engagement and data collection efficiency.",
                "Resolved app issues, ensuring seamless updates and improved functionality.",
                "Utilized Android and iOS tech stack, advancing project delivery timelines.",
                "Spearheaded the development of mobile applications, enhancing user engagement and contributing to a 30% increase in client project success.",
                "Designed interactive wireframes that improved client presentation outcomes, leading to a notable uptick in project approvals.",
                "Fostered teamwork across departments to build kiosk applications, streamlining user data collection and enhancing service responsiveness."
            ),
            "techStack" to "Mobile Tech Stack: MVP pattern, Java, XML"
        )
    )
    var expandedIndex by remember { mutableStateOf(0) }
    Section({ id("experience"); classes("section") }) {
        Div({ classes("container") }) {
            H2({ classes("text-center", "mb-4") }) { Text("Employment History") }
            Div({ classes("accordion") }) {
                jobs.forEachIndexed { index, job ->
                    Div({ classes("accordion-item") }) {
                        H2({ classes("accordion-header") }) {
                            Button({
                                classes("accordion-button", if (index != expandedIndex) "collapsed" else "")
                                attr("type", "button")
                                onClick { expandedIndex = if (expandedIndex == index) -1 else index }
                            }) { Text(job["title"] as String) }
                        }
                        Div({ classes("accordion-collapse", if (index == expandedIndex) "show" else "") }) {
                            Div({ classes("accordion-body") }) {
                                Ul({ classes("experience-details") }) {
                                    (job["details"] as List<String>).forEach { li -> Li { Text(li) } }
                                }
                                P({ classes("tech-stack") }) { Text(job["techStack"] as String) }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun SkillsSection() {
    val skills = listOf(
        "Android Development", "React Native", "React JS", "Flutter", "Redux Thunk", "Java", "TypeScript", "Dart", "JavaScript", "Kotlin",
        "Node JS", "Express JS", "PostgreSQL", "SQL", "Android Studio", "VS Code", "Git", "Unit Testing", "Mentorship", "Agile Methodologies",
        "Performance Optimization", "Continuous Integration"
    )
    Section({ id("skills"); classes("section", "bg-light") }) {
        Div({ classes("container") }) {
            H2({ classes("text-center", "mb-4") }) { Text("Skills") }
            Div({ classes("skills-grid") }) {
                skills.forEach {
                    Div({
                        classes("skill-card")
                        attr("tabindex", "0")
                        style { property("animation", "fadeIn 0.5s ease-in") }
                    }) { Text(it) }
                }
            }
        }
    }
}

@Composable
fun ProjectsSection() {
    Section({ id("projects"); classes("section") }) {
        Div({ classes("container") }) {
            H2({ classes("text-center", "mb-4") }) { Text("Projects") }
            Div({ classes("row") }) {
                ProjectCard(
                    title = "BookDigest (BookApp) - In Progress",
                    description = "A mobile app for exchanging books (free or paid). Inspired by the need for affordable used books. Includes backend for data management and CRUD operations.",
                    links = listOf(
                        "React Native Frontend" to "https://github.com/shashwathkamath/BookApp",
                        "Backend" to "https://github.com/shashwathkamath/BookApp-Backend"
                    )
                )
                ProjectCard(
                    title = "RedditWithRetrofit",
                    description = "A Reddit app that fetches feeds from Reddit APIs and allows posting.",
                    links = listOf(
                        "View Repository" to "https://github.com/shashwathkamath/RedditWithRetrofit"
                    )
                )
            }
        }
    }
}

@Composable
fun ProjectCard(title: String, description: String, links: List<Pair<String, String>>) {
    Div({ classes("col-md-6", "mb-4") }) {
        Div({ classes("card", "h-100") }) {
            Div({ classes("card-body") }) {
                H5({ classes("card-title") }) { Text(title) }
                P({ classes("card-text") }) { Text(description) }
                links.forEachIndexed { idx, (label, url) ->
                    A(href = url, attrs = {
                        classes(if (idx == 0) "btn btn-primary" else "btn btn-secondary ms-2")
                        attr("target", "_blank")
                        attr("rel", "noopener noreferrer")
                    }) { Text(label) }
                }
            }
        }
    }
}

@Composable
fun PatentsAwardsSection() {
    Section({ id("patents"); classes("section", "bg-light") }) {
        Div({ classes("container") }) {
            H2({ classes("text-center", "mb-4") }) { Text("Patents & Awards") }
            Ul({ classes("list-group") }) {
                Li({ classes("list-group-item") }) {
                    B { Text("Patent: Image-Surveilled Security Escort (US20230274552A1)") }
                    Br()
                    Text("Co-inventor on a system for enhancing user safety using image surveillance and notifications for security escorts. Assignee: Johnson Controls Tyco IP Holdings LLP. ")
                    A(href = "https://patents.google.com/patent/US20230274552A1", attrs = {
                        attr("target", "_blank")
                        attr("rel", "noopener noreferrer")
                    }) { Text("View Patent") }
                }
                Li({ classes("list-group-item") }) {
                    B { Text("Award: Best Innovations in Mobile Applications") }
                    Br()
                    Text("Awarded by Shobiz for creating an innovative QR scanner module in a mobile app for SAP Singapore.")
                }
            }
        }
    }
}