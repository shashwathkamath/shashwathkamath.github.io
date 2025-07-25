# Shashwath Kamath Portfolio (Kotlin Compose for Web)

This is a personal portfolio web app built with [Kotlin Compose for Web](https://github.com/JetBrains/compose-multiplatform).

## Prerequisites
- [JDK 17+](https://adoptopenjdk.net/)
- [Gradle](https://gradle.org/) (or use the Gradle wrapper)

## Run Locally
```sh
./gradlew jsBrowserRun
```

## Build for Production
```sh
./gradlew jsBrowserProductionWebpack
```
The output will be in `build/distributions/`.

## Project Structure
- `src/main/kotlin/Main.kt` — Main Compose for Web entry point
- `src/main/resources/index.html` — HTML loader

## Customization
Edit `Main.kt` to update your portfolio content and UI. 