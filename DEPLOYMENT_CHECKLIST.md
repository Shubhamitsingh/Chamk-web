# Quick Deployment Checklist for Hostinger

## ✅ Pre-Deployment Checklist

- [ ] All code changes committed
- [ ] Tested locally with `npm run dev`
- [ ] No console errors
- [ ] All images are in `public/images/` folder
- [ ] Logo file exists at `public/images/logo.png`

## 📦 Build Steps

1. [ ] Open terminal in project folder
2. [ ] Run `npm install` (if dependencies changed)
3. [ ] Run `npm run build`
4. [ ] Verify `dist` folder is created
5. [ ] Test build locally with `npm run preview`

## 📤 Upload Steps

1. [ ] Log in to Hostinger cPanel
2. [ ] Open File Manager
3. [ ] Navigate to `public_html` folder
4. [ ] Delete old files (backup first if needed)
5. [ ] Upload ALL contents from `dist` folder
6. [ ] Copy `.htaccess` file to `public_html` root
7. [ ] Set file permissions (644 for files, 755 for folders)

## 🔍 Post-Deployment Verification

- [ ] Website loads at your domain
- [ ] Home page works
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] No 404 errors on page refresh
- [ ] Mobile view works correctly
- [ ] SSL certificate installed (HTTPS)

## 🚨 Common Issues

- **404 on refresh**: Check `.htaccess` file is uploaded
- **Images not loading**: Check file paths and permissions
- **White screen**: Check browser console for errors
- **Slow loading**: Enable GZIP in `.htaccess`

---

**Ready to deploy? Follow the detailed guide in `DEPLOYMENT_GUIDE.md`**

