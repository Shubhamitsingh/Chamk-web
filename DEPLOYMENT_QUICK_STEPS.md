# 🚀 Quick Deployment Steps for Hostinger

## Step 1: Build Your Project

```bash
cd "C:\Users\Shubham Singh\Desktop\Chamak-Web"
npm run build
```

**Wait for:** `✓ built in X.XXs` message
**Check:** `dist` folder is created

---

## Step 2: Access Hostinger File Manager

1. Go to: https://hpanel.hostinger.com
2. Login → Click **"File Manager"**
3. Navigate to **`public_html`** folder

---

## Step 3: Clean & Upload

1. **Delete all files** in `public_html` (backup first if needed)
2. **Click "Upload"** button
3. **Select ALL files from `dist` folder**:
   - `index.html`
   - `.htaccess` ⚠️ **CRITICAL!**
   - `assets/` folder
   - `images/` folder
4. **Upload** and wait

---

## Step 4: Set Permissions

1. **Select all files** in `public_html`
2. **Right-click** → **"Change Permissions"**
3. **Set:**
   - Files: `644`
   - Folders: `755`

---

## Step 5: Verify

1. Visit: **https://chamakz.app**
2. Test all pages
3. Check navigation works
4. Verify no 404 errors

---

## ✅ Done!

Your website is live at **https://chamakz.app**

---

**For detailed guide, see: `HOSTINGER_DEPLOYMENT_COMPLETE.md`**

