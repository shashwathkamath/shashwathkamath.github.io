# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio website for Shashwath Kamath built entirely in **Kotlin/JS** with **Jetpack Compose for Web** (Compose HTML). It compiles to a single JavaScript bundle served on GitHub Pages at **shashwathkamath.com** (custom domain configured via `src/jsMain/resources/CNAME`).

## Build commands

```bash
# Development build (runs in browser with hot-reload)
./gradlew jsBrowserDevelopmentRun

# Production bundle → build/dist/js/productionExecutable/
./gradlew jsBrowserDistribution

# Full clean + build
./gradlew clean build

# Deploy: build → copy dist files to repo root → commit → push to main
./deploy.sh
```

## Architecture

There are three source files in `src/jsMain/kotlin/`:

| File | Role |
|------|------|
| `Main.kt` | Entry point (`main()`), all `@Composable` UI functions (sections, layout) |
| `Data.kt` | `PortfolioData` singleton (all resume content), data classes (`Job`, `Accomplishment`, `Degree`, `Certification`), `myEducation` and `myCertifications` lists |
| `Firebase.kt` | Firebase Analytics wrapper — bridges Kotlin to `window.firebaseAnalytics` / `window.firebaseLogEvent` injected by `index.html` |

The HTML shell at `src/jsMain/resources/index.html`:
1. Initializes Firebase Analytics and attaches `firebaseAnalytics` / `firebaseLogEvent` to `window`
2. Loads the compiled `shashwathkamath.github.io.js` bundle
3. Contains all CSS (design tokens, animations, layout)

## UI layout structure

```
main()
└── renderComposable("#root")
    └── ResumeLayout
        ├── HeroSection        — name, tagline, CTA buttons, dark mode toggle
        ├── Row
        │   ├── Sidebar        — nav links, social icons
        │   └── MainContent
        │       ├── SummarySection
        │       ├── ExperienceSection   — timeline layout
        │       ├── EducationSection
        │       ├── PatentsAndAwardsSection
        │       ├── CertificationsSection
        │       ├── SkillsSection
        │       └── ContactSection
        └── FooterSection
```

## Deployment model

The `jekyll-gh-pages.yml` workflow (the active one) builds on push to `main`, assembles a `_site/` directory, and deploys to GitHub Pages via the official Pages action. The `build.yml` workflow is a legacy artifact that commits the compiled JS directly to the repo root — it is no longer the primary deploy path.

`local.properties` is gitignored and must never be committed — it contains local SDK paths.

## Key dependencies

- Kotlin 2.0.0, Compose Multiplatform 1.6.11 / plugin 2.0.0
- `compose.html.core` + `compose.runtime` — Compose for Web DSL
- `kotlinx-coroutines-core:1.8.1` — used by Compose runtime
- Bootstrap 5.3.0 (CDN) + Font Awesome 6.4.0 (CDN) — loaded in `index.html`
