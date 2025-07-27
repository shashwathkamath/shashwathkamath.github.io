#!/bin/bash

# This script automates the process of building and deploying the site to GitHub Pages.

# Exit immediately if a command exits with a non-zero status.
set -e

echo "🚀 Starting deployment..."

# 1. Build the production-ready files.
echo "🏗️ Building for production..."
./gradlew clean
./gradlew jsBrowserDistribution

# 2. Copy the contents of the build output to the root directory.
# This is required for GitHub Pages to find your index.html.
echo "🚚 Moving distribution files to the root..."
cp -r build/dist/js/productionExecutable/* .

# 3. Add, commit, and push the changes to the 'main' branch.
echo "📦 Committing and pushing to GitHub..."
git add .
git commit -m "Deploy: Build and deploy latest version to GitHub Pages"
git push origin main

echo "✅ Deployment successful! Your site will be live at https://shashwathkamath.github.io shortly."
