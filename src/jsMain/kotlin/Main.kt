package me.shashwathkamath

import PortfolioData
import androidx.compose.runtime.*
import myCertifications
import myEducation
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.get
import kotlin.js.json

private const val SITE_URL = "https://shashwathkamath.com"

fun main() {
    val hostname = kotlinx.browser.window.location.hostname
    val isProduction = hostname == "shashwathkamath.com"
            || hostname == "www.shashwathkamath.com"
            || hostname == "shashwathkamath.github.io"
    if (isProduction) {
        val storage = kotlinx.browser.window.localStorage
        val userIdKey = "portfolio_user_id"
        val isNewUser = storage.get(userIdKey) == null
        if (isNewUser) {
            val newUserId = "user_${kotlin.js.Date.now()}_${kotlin.random.Random.nextInt(1000)}"
            storage.setItem(userIdKey, newUserId)
            Firebase.logEvent("first_visit")
        }
    }
    setupSeoHead()
    Firebase.logEvent("page_view")
    renderComposable(rootElementId = "root") {
        var darkMode by remember { mutableStateOf(false) }
        LaunchedEffect(darkMode) {
            val body = kotlinx.browser.document.body
            if (darkMode) body?.classList?.add("dark")
            else body?.classList?.remove("dark")
        }
        ResumeLayout(darkMode) { darkMode = !darkMode }
    }
}

private fun setupSeoHead() {
    val head = kotlinx.browser.document.head ?: return
    val title = "Shashwath Kamath – Senior Android & Full Stack Engineer"
    val description = "Portfolio of Shashwath Kamath, a seasoned Senior Android and Full Stack Engineer with expertise in Kotlin, Java, TypeScript, and building scalable mobile and web applications."
    kotlinx.browser.document.title = title

    addMetaTag(head, "description", description)
    addMetaTag(head, "keywords", "Shashwath Kamath, Android Developer, Full Stack Engineer, Kotlin, Java, React Native, TypeScript, Next.js, Portfolio")
    addMetaTag(head, "author", "Shashwath Kamath")
    addMetaTag(head, "og:title", title, "property")
    addMetaTag(head, "og:description", description, "property")
    addMetaTag(head, "og:type", "website", "property")
    addMetaTag(head, "og:url", SITE_URL, "property")
    addJsonLd(head)
}

private fun addMetaTag(head: org.w3c.dom.HTMLHeadElement, name: String, content: String, attrName: String = "name") {
    val element = kotlinx.browser.document.createElement("meta") as org.w3c.dom.HTMLMetaElement
    element.setAttribute(attrName, name)
    element.content = content
    head.appendChild(element)
}

private fun addJsonLd(head: org.w3c.dom.HTMLHeadElement) {
    val script = kotlinx.browser.document.createElement("script")
    script.setAttribute("type", "application/ld+json")
    script.textContent = """
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shashwath Kamath",
      "url": "$SITE_URL",
      "sameAs": [
        "https://www.linkedin.com/in/kamathshashwath",
        "https://github.com/shashwathkamath"
      ],
      "jobTitle": "Senior Android & Full Stack Engineer",
      "description": "${PortfolioData.summary.replace("\n", " ").replace("\"", "\\\"")}"
    }
    """.trimIndent()
    head.appendChild(script)
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
                    H1 { Text("Shashwath Kamath") }
                    P({ classes("lead") }) { Text("Senior Android Developer · Patent Holder · Mentor") }
                    Div({ classes("mt-4") }) {
                        A(
                            href = "#contact",
                            attrs = {
                                classes("btn", "btn-light", "btn-lg", "m-1")
                                onClick {
                                    Firebase.logEvent("hero_button_click", json("button_name" to "get_in_touch"))
                                }
                            }
                        ) { Text("Get in Touch") }
                        A(
                            href = PortfolioData.resumeUrl,
                            attrs = {
                                classes("btn", "btn-outline-light", "btn-lg", "m-1")
                                attr("download", "")
                                onClick {
                                    Firebase.logEvent("hero_button_click", json("button_name" to "download_resume"))
                                }
                            }
                        ) { Text("Download Resume") }
                        Button(attrs = {
                            classes("btn", "btn-outline-light", "btn-lg", "m-1")
                            onClick {
                                Firebase.logEvent(
                                    "theme_toggle_click",
                                    json("toggled_to" to if (darkMode) "light_mode" else "dark_mode")
                                )
                                toggleDarkMode()
                            }
                        }) { Text(if (darkMode) "☀️ Light" else "🌙 Dark") }
                    }
                }
                Div({ classes("col-md-4", "text-center", "d-none", "d-md-block") }) {
                    Img(
                        src = "images/profile-picture.jpg",
                        alt = "Shashwath Kamath",
                        attrs = { classes("hero-avatar") }
                    )
                }
            }
        }
    }
}

@Composable
fun Sidebar() {
    Div({ classes("col-md-3", "sidebar") }) {
        P({ classes("sidebar-nav-label") }) { Text("Navigate") }
        Ul({ classes("nav", "flex-column") }) {
            PortfolioData.navigationLinks.forEach { (name, sectionId) ->
                Li({ classes("nav-item") }) {
                    A(href = sectionId, attrs = { classes("nav-link") }) { Text(name) }
                }
            }
        }

        P({ classes("sidebar-nav-label") }) { Text("Connect") }
        Div({ classes("d-flex", "gap-3") }) {
            PortfolioData.socialLinks.forEach { (url, iconClass) ->
                A(href = url, attrs = {
                    classes("social-icon")
                    attr("target", "_blank")
                    attr("rel", "noopener noreferrer")
                }) {
                    I({ classes("fab", iconClass) })
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
        EducationSection()
        PatentsAndAwardsSection()
        CertificationsSection()
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
        Div({ classes("timeline") }) {
            PortfolioData.jobs.forEach { job ->
                Div({ classes("timeline-item") }) {
                    Div({ classes("job-role") }) { Text(job.role) }
                    Div({ classes("job-meta") }) {
                        Span({ classes("job-company") }) { Text(job.company) }
                        Text("  ·  ${job.period}  ·  ${job.location}")
                    }
                    Ul {
                        job.details.forEach { detail ->
                            Li { Text(detail) }
                        }
                    }
                    Span({ classes("tech-badge") }) { Text(job.techStack) }
                }
            }
        }
    }
}

@Composable
fun EducationSection() {
    Section({ id("education"); classes("section") }) {
        H2 { Text("Education") }
        myEducation.forEach { degree ->
            Div({ classes("accomplishment-card") }) {
                H4 { Text(degree.degree) }
                P({ classes("text-muted", "mb-0") }) { Text("${degree.institution}  ·  ${degree.year}") }
            }
        }
    }
}

@Composable
fun PatentsAndAwardsSection() {
    Section({ id("patents"); classes("section") }) {
        H2 { Text("Patents & Awards") }
        PortfolioData.accomplishments.forEach { accomplishment ->
            Div({ classes("accomplishment-card") }) {
                H4 { Text(accomplishment.title) }
                val details = buildList {
                    accomplishment.issuer?.takeIf { it.isNotBlank() }?.let { add(it) }
                    accomplishment.id?.takeIf { it.isNotBlank() }?.let { add("ID: $it") }
                }
                if (details.isNotEmpty()) {
                    P({ classes("text-muted", "mb-2") }) { Text(details.joinToString("  ·  ")) }
                }
                accomplishment.url?.let { url ->
                    A(href = url, attrs = {
                        classes("btn", "btn-sm", "btn-outline-primary")
                        attr("target", "_blank")
                        attr("rel", "noopener noreferrer")
                        onClick {
                            Firebase.logEvent("accomplishment_link_click", json("title" to accomplishment.title))
                        }
                    }) { Text("View Details →") }
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
                Span({ classes("skill-pill") }) { Text(skill) }
            }
        }
    }
}

@Composable
fun ContactSection() {
    Section({ id("contact"); classes("section") }) {
        H2 { Text("Get in Touch") }
        P { Text("I'm always open to discussing new projects and creative ideas. Feel free to reach out.") }
        P {
            A(href = "mailto:${PortfolioData.email}", attrs = { classes("contact-email") }) {
                Text(PortfolioData.email)
            }
        }
    }
}

@Composable
fun CertificationsSection() {
    Section({ id("certifications"); classes("section") }) {
        H2 { Text("Certifications & Credentials") }
        Div({ classes("cert-grid") }) {
            myCertifications.forEach { cert ->
                Div({ classes("cert-card") }) {
                    H5 { Text(cert.name) }
                    P({ classes("cert-meta") }) {
                        Text("${cert.issuingOrganization}  ·  ${cert.date}")
                    }
                    A(href = cert.credentialUrl, attrs = {
                        classes("btn", "btn-sm", "btn-outline-primary")
                        attr("target", "_blank")
                        attr("rel", "noopener noreferrer")
                        onClick {
                            Firebase.logEvent("certification_link_click", json("name" to cert.name))
                        }
                    }) { Text("View Credential") }
                }
            }
        }
    }
}

@Composable
fun FooterSection() {
    Footer {
        Text("© ${js("new Date().getFullYear()")} Shashwath Kamath · Built with Kotlin/JS & Compose for Web")
    }
}
