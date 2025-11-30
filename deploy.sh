#!/bin/bash

# Deployment Script for GitHub Pages
# MDX Class 1 - Digital Innovation Website

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy MDX Class 1 website - $(date)"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Please add a remote repository first:"
    echo "   git remote add origin https://github.com/USERNAME/REPOSITORY.git"
    echo "   Then run this script again"
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment complete!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/root' folder"
echo "5. Save and wait for deployment"
echo ""
echo "🎉 Your website will be available at:"
echo "   https://USERNAME.github.io/REPOSITORY"
