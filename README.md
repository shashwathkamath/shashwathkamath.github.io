# Portfolio Website — Shashwath Kamath

A modern, fully-interactive personal portfolio website built with **Kotlin/JS** and **Jetpack Compose for Web**.

The live version is deployed at **[shashwathkamath.com](https://shashwathkamath.com)**

## Features

- **Declarative UI with Compose for Web** — entire frontend built with Jetpack Compose HTML DSL
- **Dark mode** — toggle between light and dark themes
- **Animated UI** — scroll-reveal sections, timeline animations, floating avatar, animated hero gradient
- **Firebase Analytics** — page views and interaction events tracked via Firebase
- **Automated Deployment** — built and deployed to GitHub Pages via GitHub Actions

## Tech Stack

- **Frontend**: Kotlin/JS, Jetpack Compose for Web, HTML5, CSS3, Bootstrap 5
- **Analytics**: Firebase Analytics
- **Build & Tooling**: Gradle
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages (custom domain)

## Local development

```bash
./gradlew jsBrowserDevelopmentRun   # dev server at http://localhost:8080
./gradlew jsBrowserDistribution     # production build
./deploy.sh                         # build + deploy to GitHub Pages
```
