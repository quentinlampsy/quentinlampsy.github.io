# Portfolio Deployment Guide

This repository contains a Next.js portfolio website that automatically deploys to GitHub Pages.

## 🚀 Automatic Deployment

The site automatically deploys when you push to the `main` branch using GitHub Actions.

### First-time Setup

1. Go to your GitHub repository settings
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save the changes

That's it! Every push to `main` will now automatically build and deploy your site.

## 💻 Development

### Running Locally

```bash
cd portfolio-nextjs
npm install
npm run dev
```

Visit http://localhost:3000 to see your site.

### Making Changes

1. Edit files in `portfolio-nextjs/app/` directory
2. Test locally with `npm run dev`
3. Deploy using the automated script:
   - **Windows (double-click):** Run `deploy.bat`
   - **PowerShell:** Run `.\deploy.ps1`
   - **With custom message:** `.\deploy.ps1 -Message "Your commit message"`
4. The script will automatically:
   - Stage all changes
   - Commit with your message (or use default timestamp)
   - Push to GitHub
   - Trigger automatic deployment

**Manual deployment (alternative):**
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## 🔧 Manual Deployment (Optional)

If you prefer to deploy manually:

```bash
cd portfolio-nextjs
npm run deploy:local
```

Then commit and push the generated files:
```bash
cd ..
git add .
git commit -m "Deploy portfolio"
git push origin main
```

## 📂 Project Structure

```
quentinlampsy.github.io/
├── portfolio-nextjs/    # Next.js source code
│   ├── app/            # App pages and components
│   ├── public/         # Static assets
│   └── package.json    # Dependencies
├── pictures/           # Images
└── index.html          # Generated from Next.js (auto-updated on deploy)
```

## 🛠️ Technologies

- **Next.js 16** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **GitHub Pages** for hosting
- **GitHub Actions** for CI/CD

## 📝 Notes

- The root `index.html` is generated from Next.js and should not be edited directly
- Always make changes in the `portfolio-nextjs/` directory
- The site is configured for static export (no server-side rendering)

## 🔗 Live Site

https://quentinlampsy.github.io

## 🤖 Deployment Scripts

### Quick Deploy (`deploy.bat` / `deploy.ps1`)

The easiest way to deploy your changes:

**Option 1: Double-click `deploy.bat`**
- Opens a window
- Prompts for commit message (or uses default)
- Automatically commits and pushes

**Option 2: Run from PowerShell**
```powershell
.\deploy.ps1
```

**Option 3: With custom message**
```powershell
.\deploy.ps1 -Message "Updated about section"
```

The script will:
- ✓ Check for changes
- ✓ Stage all files
- ✓ Commit with your message
- ✓ Push to GitHub
- ✓ Trigger automatic deployment
- ✓ Show deployment status link
