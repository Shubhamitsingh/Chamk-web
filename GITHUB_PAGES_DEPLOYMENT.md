# GitHub Pages Deployment Guide

Deploy your Chamakz website for FREE using GitHub Pages!

## ✅ Prerequisites

- GitHub account (you already have this)
- Repository pushed to GitHub (already done ✅)

---

## Step 1: Build Your Project

1. **Open terminal** in your project folder:
   ```bash
   cd "C:\Users\Shubham Singh\Desktop\Chamak-Web"
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Verify** the `dist` folder is created

---

## Step 2: Configure Vite for GitHub Pages

We need to set the base path for GitHub Pages.

### Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Chamk-web/', // Your repository name
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
  publicDir: 'public'
})
```

**Important**: Replace `/Chamk-web/` with your actual repository name if different.

---

## Step 3: Rebuild with New Config

```bash
npm run build
```

---

## Step 4: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Recommended - Automatic)

1. **Create `.github/workflows` folder** in your project root

2. **Create `deploy.yml` file** in `.github/workflows/`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

### Option B: Manual Deployment (Quick Start)

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to `package.json`**:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

---

## Step 5: Enable GitHub Pages

1. **Go to your GitHub repository**: `https://github.com/Shubhamitsingh/Chamk-web`

2. **Click "Settings"** (top menu)

3. **Click "Pages"** (left sidebar)

4. **Under "Source"**, select:
   - **Branch**: `gh-pages` (if using manual) or `main` (if using Actions)
   - **Folder**: `/root` or `/dist` (depending on method)

5. **Click "Save"**

6. **Wait 1-2 minutes** for deployment

---

## Step 6: Access Your Website

Your website will be available at:
- **GitHub Pages URL**: `https://shubhamitsingh.github.io/Chamk-web/`

(Replace with your GitHub username and repo name)

---

## Step 7: Custom Domain (Optional)

1. **Create `CNAME` file** in `public/` folder:
   ```
   yourdomain.com
   www.yourdomain.com
   ```

2. **In GitHub Pages Settings**:
   - Add your custom domain
   - Update DNS records at your domain provider:
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: `shubhamitsingh.github.io`

---

## Troubleshooting

### Issue: 404 Error on Routes
**Solution**: Make sure `base: '/Chamk-web/'` in `vite.config.js` matches your repo name

### Issue: Assets Not Loading
**Solution**: Check that all paths use relative paths, not absolute

### Issue: White Screen
**Solution**: 
- Check browser console (F12)
- Verify build completed successfully
- Check GitHub Actions logs (if using Actions)

---

## Update Your Site

Every time you push to `main` branch:
- **With GitHub Actions**: Automatically deploys
- **Manual**: Run `npm run deploy` again

---

## Advantages of GitHub Pages

✅ **Free hosting**
✅ **Automatic HTTPS**
✅ **Easy updates** (just push to GitHub)
✅ **No server management**
✅ **Fast CDN**

---

**Your site will be live in minutes! 🚀**




