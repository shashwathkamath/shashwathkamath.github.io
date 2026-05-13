object PortfolioData {
    val summary = "Seasoned Senior Android Engineer with 12+ years of experience building high-performance, scalable mobile applications for enterprises serving millions of users. Expert in Kotlin, Jetpack Compose, and Clean Architecture, with a strong full-stack foundation in TypeScript, Node.js, and React Native. Patent holder with a proven record of leading cross-functional teams, mentoring engineers, and driving measurable improvements in app performance, automation, and delivery quality."
    val email = "kamathsh91@gmail.com"
    val resumeUrl = "Shashwath-Kamath-Senior-Engineer.pdf"
    val socialLinks = listOf(
        "https://www.linkedin.com/in/kamathshashwath" to "fa-linkedin",
        "https://github.com/shashwathkamath" to "fa-github"
    )

    val jobs = listOf(
        Job(
            role = "Senior Android Developer — Contract",
            company = "Fidelity Investments",
            period = "Dec 2025 – Present",
            location = "Salt Lake City, UT",
            details = listOf(
                "Built and shipped features for the Fidelity Android app (10M+ downloads) focused on client cash and securities movement within the brokerage platform.",
                "Delivered robust, production-grade UI using Kotlin, Jetpack Compose, and MVVM, meeting strict performance, security, and reliability standards for financial applications.",
                "Collaborated with product, architecture, and UX teams to integrate complex backend APIs for real-time financial transactions.",
                "Participated in Agile/DevOps workflows including sprint planning, code reviews, and CI/CD pipelines via Jenkins and Git.",
                "Improved release stability through TDD practices and UI automation with UiAutomator."
            ),
            techStack = "Kotlin, Jetpack Compose, MVVM, JUnit, UiAutomator, Jenkins, Git"
        ),
        Job(
            role = "Senior Android & Full Stack Engineer — Contract",
            company = "Verizon Wireless",
            period = "Oct 2023 – Dec 2025",
            location = "Basking Ridge, NJ",
            details = listOf(
                "Architected and maintained My Verizon Services, deployed across 25M+ devices, using Kotlin, Android SDK, and Clean Architecture.",
                "Built the Extension Profile Module with dynamic module management and Clean Code principles, optimizing service delivery and modular downloads.",
                "Engineered a Unified Settings App for OEMs using Jetpack Compose and Kotlin, streamlining device finalization to Verizon standards.",
                "Led development of an Automation Portal (Express.js, Next.js, TypeScript) with CI/CD integration, reducing QA workload by 40%.",
                "Optimized app startup time and runtime efficiency using Android Profiler and Macrobenchmark.",
                "Mentored engineers across the team, promoting Clean Architecture adoption, code review culture, and best practices."
            ),
            techStack = "Kotlin, Java, Android SDK, Jetpack Compose, MVI, TypeScript, Next.js, Express.js"
        ),
        Job(
            role = "Senior Mobile & Backend Engineer",
            company = "Johnson Controls Inc.",
            period = "Aug 2021 – Aug 2023",
            location = "Edison, NJ",
            details = listOf(
                "Developed advanced video streaming features using WebRTC for the CloudVue app, significantly reducing Time to First Frame and boosting engagement.",
                "Designed and implemented a Rules Engine powered by Apache Kafka, handling 1M+ messages and enabling real-time event-driven decision making.",
                "Integrated OAuth 2.0 across mobile and web platforms using React Native, TypeScript, and Express.js, enhancing security and sign-in experience.",
                "Optimized performance across React Native and Android Native codebases via profiling tools and Jetpack Compose refactoring.",
                "Built secure, scalable backend APIs with TypeScript, Next.js, Express.js, and PostgreSQL.",
                "Championed automated testing (JUnit, Mockito) and CI/CD best practices, reducing regression rates.",
                "Mentored junior engineers through code reviews, pairing sessions, and technical guidance."
            ),
            techStack = "React Native, Jetpack Compose, Android Native (Java/Kotlin), TypeScript, Next.js, Express.js, PostgreSQL"
        ),
        Job(
            role = "Android Framework Engineer — Contract",
            company = "Samsung Electronics America",
            period = "Oct 2017 – Aug 2021",
            location = "Berkeley Heights, NJ",
            details = listOf(
                "Developed SetupWizard screens for Samsung carrier-specific devices using Kotlin, Java, MVVM, and Jetpack Compose, improving device onboarding experience.",
                "Implemented critical system app features aligned with carrier compliance requirements using deep Android framework expertise.",
                "Automated mobile testing with Espresso, JUnit, Mockito, and Python scripting, significantly reducing manual QA effort.",
                "Led debugging and troubleshooting initiatives across Java and Kotlin codebases, ensuring rapid resolution of production issues.",
                "Collaborated with QA, product, and UX teams to ship iterative improvements based on user feedback."
            ),
            techStack = "Kotlin, Java, MVVM, Jetpack Compose, Espresso, JUnit, Mockito"
        ),
        Job(
            role = "Senior Mobile Developer",
            company = "Shobiz Experiential Communications",
            period = "Mar 2013 – Dec 2014",
            location = "Mumbai, India",
            details = listOf(
                "Led mobile app development (Android & iOS) for client campaigns, contributing to a 30% increase in project success rates.",
                "Built kiosk applications in collaboration with cross-functional teams, streamlining user data collection and service responsiveness.",
                "Designed interactive wireframes that improved client presentation outcomes and increased project approvals."
            ),
            techStack = "Java, XML, MVP Pattern"
        )
    )

    val skills = listOf(
        // Mobile
        "Kotlin", "Java", "Jetpack Compose", "Android SDK", "React Native", "Flutter",
        "MVVM", "MVI", "Clean Architecture",
        // Frontend
        "React.js", "Next.js", "TypeScript", "JavaScript", "Redux-Thunk", "Dart",
        // Backend & Data
        "Node.js", "Express.js", "PostgreSQL", "SQL", "Firebase Firestore",
        "Apache Kafka", "REST APIs", "OAuth 2.0",
        // Tools & Practices
        "Git", "Jenkins", "CI/CD", "JUnit", "Mockito", "Espresso",
        "UiAutomator", "TDD", "Performance Profiling", "Agile/Scrum"
    )

    val accomplishments = listOf(
        Accomplishment(
            title = "U.S. Patent — Image Surveilled Security Escort",
            issuer = "Johnson Controls (Mar 2023)",
            id = "US20230274552A1",
            url = "https://patents.google.com/patent/US20230274552A1/en?inventor=Shashwath+Kamath"
        )
    )

    val navigationLinks = listOf(
        "Summary" to "#summary",
        "Experience" to "#experience",
        "Education" to "#education",
        "Skills" to "#skills",
        "Patent" to "#patents",
        "Certifications" to "#certifications",
        "Contact" to "#contact"
    )
}

data class Job(
    val role: String,
    val company: String,
    val period: String,
    val location: String,
    val details: List<String>,
    val techStack: String
)

data class Accomplishment(
    val title: String,
    val issuer: String? = null,
    val id: String? = null,
    val url: String? = null
)

data class Degree(
    val degree: String,
    val institution: String,
    val year: String
)

data class Certification(
    val name: String,
    val issuingOrganization: String,
    val date: String,
    val credentialUrl: String,
)

val myEducation = listOf(
    Degree(
        degree = "M.S., Computer Science",
        institution = "Illinois Institute of Technology, Chicago",
        year = "May 2017"
    ),
    Degree(
        degree = "B.E., Electronics & Telecommunication",
        institution = "Nagpur University",
        year = "Jun 2012"
    )
)

val myCertifications = listOf(
    Certification(
        name = "Generative AI Fundamentals",
        issuingOrganization = "Databricks Academy",
        date = "Dec 2024",
        credentialUrl = "https://credentials.databricks.com/f079b08d-9800-463d-a803-6f4045848946#acc.Sqm49RD6",
    ),
    Certification(
        name = "Neo4j & LLM Fundamentals",
        issuingOrganization = "GraphAcademy: Neo4j",
        date = "Aug 2024",
        credentialUrl = "https://graphacademy.neo4j.com/c/a7d2fc4a-1f49-4a38-b1a9-eaa034be10f5/",
    ),
    Certification(
        name = "Building Neo4j Applications with TypeScript",
        issuingOrganization = "GraphAcademy: Neo4j",
        date = "Mar 2024",
        credentialUrl = "https://graphacademy.neo4j.com/c/0f885a0c-e0fb-4346-9a26-979eb934032b/",
    ),
    Certification(
        name = "Cypher Fundamentals",
        issuingOrganization = "GraphAcademy: Neo4j",
        date = "Mar 2024",
        credentialUrl = "https://graphacademy.neo4j.com/c/11186c63-1073-43a7-a2d4-6781283a006b/",
    ),
    Certification(
        name = "Graph Data Modeling Fundamentals",
        issuingOrganization = "GraphAcademy: Neo4j",
        date = "March 2024",
        credentialUrl = "https://graphacademy.neo4j.com/c/51f94e4c-2868-4170-8879-e98c38872fc3/",
    ),
)
