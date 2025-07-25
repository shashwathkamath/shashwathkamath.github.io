plugins {
    kotlin("multiplatform") version "2.0.0"
    id("org.jetbrains.kotlin.plugin.compose") version "2.0.0"
    id("org.jetbrains.compose") version "1.6.11"
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
            kotlin.srcDir("src/main/kotlin") // Point to main instead of jsMain
            dependencies {
                implementation(compose.html.core)
                implementation(compose.runtime)
            }
        }
    }
}