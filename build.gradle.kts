import java.util.Properties

// Plugins block must be at the top
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.composeCompiler)
    id("org.jetbrains.kotlin.plugin.serialization") version "1.9.22"
    id("com.github.gmazzo.buildconfig") version "5.3.5"
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
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.1")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.3")
                implementation(npm("firebase", "10.12.2"))
                implementation(npm("@google/generative-ai", "0.15.0"))
            }
        }
    }
}

val localProperties = Properties()
val localPropertiesFile = rootProject.file("local.properties")
if (localPropertiesFile.exists()) {
    localProperties.load(localPropertiesFile.inputStream())
}

buildConfig {
    packageName.set("me.shashwathkamath.config") // A new package for your config
    buildConfigField("String", "FIREBASE_API_KEY", "\"${localProperties.getProperty("firebase.apiKey")}\"")
    buildConfigField("String", "FIREBASE_AUTH_DOMAIN", "\"${localProperties.getProperty("firebase.authDomain")}\"")
    buildConfigField("String", "FIREBASE_PROJECT_ID", "\"${localProperties.getProperty("firebase.projectId")}\"")
    buildConfigField("String", "FIREBASE_STORAGE_BUCKET", "\"${localProperties.getProperty("firebase.storageBucket")}\"")
    buildConfigField("String", "FIREBASE_MESSAGING_SENDER_ID", "\"${localProperties.getProperty("firebase.messagingSenderId")}\"")
    buildConfigField("String", "FIREBASE_APP_ID", "\"${localProperties.getProperty("firebase.appId")}\"")
    buildConfigField("String", "FIREBASE_MEASUREMENT_ID", "\"${localProperties.getProperty("firebase.measurementId")}\"")

    // Gemini Key
    val geminiApiKey = localProperties.getProperty("GEMINI_API_KEY") ?: System.getenv("GEMINI_API_KEY") ?: ""
    buildConfigField("String", "GEMINI_API_KEY", "\"$geminiApiKey\"")
}

kotlin.sourceSets.getByName("jsMain") {
    kotlin.srcDir("$buildDir/generated/source/apiKey/jsMain/kotlin")
}
