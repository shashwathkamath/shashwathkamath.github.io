object PortfolioData {

    val jobs = listOf(
        Job(
            title = "Senior Android and Full Stack Engineer - Infovision, Verizon (Oct 2023 - Present, Basking Ridge, NJ)",
            details = listOf(
                "Architect My Verizon Services managing 25M+ devices, enhancing app efficiency and reliability.",
                "Build Extension Profile Module for dynamic app module management, optimizing service downloads.",
                "Create Carrier Config feature, enabling server-side carrier settings for improved user experience.",
                "Developed a Unified Settings App for OEMs, ensuring compliance with Verizon standards and streamlining the device finalization process.",
                "Orchestrated cross-functional teams to create an Automation Portal, achieving a 40% reduction in QA workload through optimized testing."
            ),
            techStack = "Kotlin, Clean Architecture, Java, MVI, Jetpack Compose, TypeScript, Next.js, Express"
        ),
        Job(
            title = "Senior Mobile and Backend Engineer - Johnson Controls Inc. (Aug 2021 - Aug 2023, Edison, NJ)",
            details = listOf(
                "Led integration of OAuth for user authentication.",
                "Developed advanced video streaming features using WebRTC, resulting in improved Time to First Frame and user engagement.",
                "Architected a Rules Engine with Apache Kafka, optimizing performance for 1 million event messages.",
                "Mentored junior engineers on best coding practices, fostering a culture of continuous learning and improving code quality.",
                "Resolved complex issues in the Android Native Java and Typescript codebase, ensuring smooth deployment of the CloudVue app.",
                "Optimized codebase performance, leading to faster load times and a noticeable increase in user satisfaction."
            ),
            techStack = "React Native, TypeScript, React.js, Jetpack Compose, Next.js, Express, Apache Kafka"
        ),
        Job(
            title = "Android Framework Engineer - L&T Technology Services (Oct 2017 - Aug 2021, Berkeley Heights, NJ)",
            details = listOf(
                "Enhanced user experience by developing intuitive SetupWizard screens for carrier-specific Samsung devices.",
                "Analyzed carrier requirements to maintain and implement critical system app features ensuring compliance and operational efficiency.",
                "Created automation scripts using Python for app testing, significantly reducing manual testing time and improving deployment speed.",
                "Partnered with cross-functional teams to gather feedback, driving continuous improvements in carrier applications.",
                "Demonstrated strong problem-solving skills by addressing technical challenges in app development.",
                "Enhanced app performance by aligning system app features with carrier needs, resulting in improved user satisfaction."
            ),
            techStack = "Kotlin, MVVM, Java, XML, Python"
        ),
        Job(
            title = "Senior Mobile Developer - Shobiz Experiential Communications Pvt Ltd. (Mar 2013 - Dec 2014, Mumbai, India)",
            details = listOf(
                "Led mobile app development, enhancing user engagement and data collection efficiency.",
                "Resolved app issues, ensuring seamless updates and improved functionality.",
                "Utilized Android and iOS tech stack, advancing project delivery timelines.",
                "Spearheaded mobile application development, contributing to a 30% increase in client project success.",
                "Designed interactive wireframes that improved client presentation outcomes.",
                "Fostered teamwork across departments to build kiosk applications, streamlining user data collection."
            ),
            techStack = "Android, iOS, MVP pattern, Java, XML"
        )
    )

    val projects = listOf(
        Project(
            title = "BookDigest (BookApp) - In Progress",
            description = "A mobile app for exchanging books (free or paid).",
            links = listOf("Frontend" to "https://github.com/shashwathkamath/BookApp", "Backend" to "https://github.com/shashwathkamath/BookApp-Backend")
        )
    )

    val skills = listOf(
        "Android Development", "React Native", "React JS", "Flutter", "Redux Thunk", "Java",
        "TypeScript", "Dart", "JavaScript", "Kotlin", "Node JS", "Express JS", "PostgreSQL",
        "SQL", "Android Studio", "VS Code", "Git", "Unit Testing", "Mentorship",
        "Agile Methodologies", "Performance Optimization", "Continuous Integration"
    )

    val navigationLinks = listOf(
        "Summary" to "#summary",
        "Experience" to "#experience",
        "Skills" to "#skills",
        "Projects" to "#projects",
        "Patents & Awards" to "#patents",
        "Contact" to "#contact"
    )
}

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