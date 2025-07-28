import java.util.Properties

// Plugins block must be at the top
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.composeCompiler)
    id("org.jetbrains.kotlin.plugin.serialization") version "1.9.22"
}

group = "me.shashwathkamath"
version = "1.0-SNAPSHOT"

repositories {
    google()
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
}

kotlin {
    js(IR) {
        browser {
            binaries.executable()
        }
    }
    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(compose.html.core)
                implementation(compose.runtime)
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.1") // Updated to a recent stable version
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.3")
            }
        }
    }
}


// --- API Key Generation Logic ---

// 1. Read properties from local.properties file
val localProperties = Properties()
val localPropertiesFile = rootProject.file("local.properties")
if (localPropertiesFile.exists()) {
    localProperties.load(localPropertiesFile.inputStream())
}

// 2. Define a task to generate an ApiKey.kt file
tasks.register("generateApiKey") {
    description = "Generates ApiKey.kt from local.properties or environment variables."
    group = "build"

    // Read from local.properties, or fall back to an environment variable for CI/CD
    val apiKey = localProperties.getProperty("GEMINI_API_KEY") ?: System.getenv("GEMINI_API_KEY") ?: ""
    if (apiKey.isEmpty() && !project.hasProperty("isCiBuild")) { // Avoid warning on CI
        logger.warn("Warning: GEMINI_API_KEY not found in local.properties or environment variables.")
    }

    // Use the project's group for the package name to avoid placeholders
    val packageName = project.group.toString()
    val outputDir = file("$buildDir/generated/source/apiKey/jsMain/kotlin/${packageName.replace('.', '/')}")
    outputs.dir(outputDir)

    doLast {
        outputDir.mkdirs()
        file("$outputDir/ApiKey.kt").writeText("""
            package $packageName

            /**
             * This is a generated file. Do not edit.
             * It is populated by the 'generateApiKey' Gradle task.
             */
            object ApiKey {
                const val GEMINI_API_KEY = "$apiKey"
            }
        """.trimIndent())
    }
}

// 3. Add the generated directory to the jsMain source set
// This tells the Kotlin compiler to include the generated ApiKey.kt file during compilation.
kotlin.sourceSets.getByName("jsMain") {
    kotlin.srcDir("$buildDir/generated/source/apiKey/jsMain/kotlin")
}

// 4. Make the compile task depend on our generator task
// This ensures ApiKey.kt is created *before* the compiler needs it.
tasks.getByName("compileKotlinJs").dependsOn(tasks.getByName("generateApiKey"))
