# 🚀 Quick Start: Deploy to GitHub Pages (5 Minutes)

## Step 1: Install gh-pages Package

Open terminal in your project folder and run:

```bash
npm install --save-dev gh-pages
```

---

## Step 2: Build Your Project

```bash
npm run build
```

---

## Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push it to GitHub
- Make your site live!

---

## Step 4: Enable GitHub Pages

1. Go to: `https://github.com/Shubhamitsingh/Chamk-web/settings/pages`

2. Under **"Source"**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`

3. Click **"Save"**

4. Wait 1-2 minutes

---

## Step 5: Your Website is Live! 🎉

Your site will be available at:
**https://shubhamitsingh.github.io/Chamk-web/**

---

## ✅ Automatic Updates

**Option A: Manual** (whenever you want to update):
```bash
npm run deploy
```

**Option B: Automatic** (already set up with GitHub Actions):
- Just push to `main` branch
- GitHub Actions will automatically deploy!

---

## 🔄 How to Update Your Site

1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. **If using GitHub Actions**: Wait 2-3 minutes, site updates automatically!
4. **If manual**: Run `npm run deploy` again

---

## 📝 Important Notes

- Your repository name is `Chamk-web`
- The base path in `vite.config.js` is set to `/Chamk-web/`
- If you change your repo name, update the `base` in `vite.config.js`

---

## 🆘 Troubleshooting

**404 Error?**
- Check that `base: '/Chamk-web/'` in `vite.config.js` matches your repo name

**Assets not loading?**
- Make sure you ran `npm run build` before deploying

**Still not working?**
- Check GitHub Actions tab in your repository for errors
- Wait a few more minutes (deployment can take 2-5 minutes)

---

**That's it! Your website is now live on GitHub Pages! 🎊**




