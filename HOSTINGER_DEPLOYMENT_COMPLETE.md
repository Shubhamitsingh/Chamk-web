# Complete Hostinger Deployment Guide for Chamakz.app

## ✅ Pre-Deployment Checklist

- [x] package.json updated with homepage field
- [x] .htaccess file created in public folder
- [x] vite.config.js configured for root path
- [ ] Build production version
- [ ] Upload files to Hostinger

---

## 1. Updated package.json

Your `package.json` now includes:
```json
{
  "name": "chamak-web",
  "version": "1.0.0",
  "type": "module",
  "description": "Chamakz - The most exciting livestreaming platform",
  "homepage": "https://chamakz.app",
  "private": true,
  ...
}
```

**✅ Homepage field added: `"homepage": "https://chamakz.app"`**

---

## 2. .htaccess File Location & Content

**File Location:** `public/.htaccess`

**Complete Code:**
```apache
# Enable URL Rewriting for React Router
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories that exist
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule . /index.html [L]
</IfModule>

# Set DirectoryIndex to index.html
DirectoryIndex index.html

# Disable directory listing
Options -Indexes

# Handle 404 errors by serving index.html
ErrorDocument 404 /index.html

# Enable GZIP Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Force HTTPS (Enable SSL)
<IfModule mod_rewrite.c>
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

**What this does:**
- ✅ Enables URL rewriting for React Router
- ✅ Redirects all requests to index.html
- ✅ Sets DirectoryIndex to index.html
- ✅ Disables directory listing
- ✅ Handles 404 errors by serving index.html
- ✅ Enables GZIP compression
- ✅ Sets browser caching
- ✅ Forces HTTPS
- ✅ Adds security headers

---

## 3. Build Production Version

### Step-by-Step Build Process:

1. **Open Terminal/Command Prompt** in your project folder:
   ```bash
   cd "C:\Users\Shubham Singh\Desktop\Chamak-Web"
   ```

2. **Install dependencies** (if needed):
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Verify build success**:
   - You should see: `✓ built in X.XXs`
   - Check that `dist` folder is created
   - Verify `dist` folder contains:
     - `index.html`
     - `assets/` folder (with JS and CSS files)
     - `.htaccess` file (copied from public folder)
     - `images/` folder (if any)

5. **Test build locally** (optional but recommended):
   ```bash
   npm run preview
   ```
   - Visit `http://localhost:4173`
   - Test all pages and navigation
   - Verify everything works

---

## 4. Files to Upload to Hostinger

### Exact Files from `dist` Folder:

Upload **ALL contents** from the `dist` folder to `public_html`:

```
dist/
├── index.html                    ← Upload this
├── .htaccess                     ← Upload this (IMPORTANT!)
├── assets/                       ← Upload entire folder
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── images/                       ← Upload entire folder (if exists)
│   ├── logo.png
│   └── portrait-girl.png
└── vite.svg                      ← Upload if exists
```

### Correct Folder Structure on Hostinger:

After upload, your `public_html` folder should look like this:

```
public_html/
├── index.html                    ← Main HTML file
├── .htaccess                     ← Server configuration (CRITICAL!)
├── assets/                       ← JavaScript and CSS files
│   ├── index-abc123.js
│   ├── index-abc123.css
│   └── ...
├── images/                       ← Your images
│   ├── logo.png
│   └── portrait-girl.png
└── vite.svg                      ← Icon (if exists)
```

**Important Notes:**
- Upload **contents** of `dist` folder, not the `dist` folder itself
- `.htaccess` file **MUST** be in the root of `public_html`
- All files should be directly in `public_html`, not in a subfolder

---

## 5. Complete Deployment Checklist

### Step 1: Access Hostinger cPanel

1. Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Log in with your Hostinger credentials
3. Click on **"File Manager"** or go to **"Files"** → **"File Manager"**

### Step 2: Navigate to public_html

1. In File Manager, click on **`public_html`** folder
2. If you have multiple domains, select the folder for `chamakz.app`

### Step 3: Clean public_html (if needed)

1. **Select all existing files** in `public_html`
2. **Backup first** (download or move to a backup folder)
3. **Delete all files** in `public_html` (keep the folder structure)

### Step 4: Upload Files

#### Option A: Using File Manager (Recommended for first time)

1. **Click "Upload"** button in File Manager
2. **Navigate to your local `dist` folder**
3. **Select ALL files and folders**:
   - `index.html`
   - `.htaccess`
   - `assets/` folder (select entire folder)
   - `images/` folder (if exists)
   - Any other files
4. **Click "Upload"**
5. **Wait for upload to complete**

#### Option B: Using FTP Client (Faster for large files)

1. **Get FTP credentials** from Hostinger:
   - Go to **"Files"** → **"FTP Accounts"**
   - Note: FTP Host, Username, Password

2. **Connect using FileZilla or WinSCP**:
   - Host: `ftp.chamakz.app` or your FTP host
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Upload files**:
   - Navigate to `public_html` on server
   - Navigate to `dist` folder locally
   - Select all files and folders
   - Drag and drop to `public_html`

### Step 5: Verify File Locations

Check that files are in correct location:

```
✅ public_html/index.html exists
✅ public_html/.htaccess exists (IMPORTANT!)
✅ public_html/assets/ folder exists
✅ public_html/images/ folder exists (if you have images)
```

### Step 6: Set File Permissions

1. **Select all files** in `public_html`
2. **Right-click** → **"Change Permissions"**
3. **Set permissions**:
   - **Files**: `644` (rw-r--r--)
   - **Folders**: `755` (rwxr-xr-x)

**Quick way:**
- Files: Check `Read`, `Write` (owner), `Read` (group), `Read` (public)
- Folders: Check all boxes for owner, `Read`, `Execute` for group and public

### Step 7: Verify .htaccess File

1. **Check `.htaccess` is in root** of `public_html`
2. **Verify it's not hidden** (some file managers hide dot files)
3. **Check file permissions** are `644`

### Step 8: Test Deployment

1. **Visit your website**: `https://chamakz.app`
2. **Test all pages**:
   - Home page loads
   - Navigation works
   - All routes work (Features, Download, About, etc.)
   - No 404 errors on page refresh
   - Images load correctly

3. **Check browser console** (F12):
   - No errors in Console tab
   - All assets load (check Network tab)

---

## Common Errors & Solutions

### Error 1: 403 Forbidden Error

**Symptoms:**
- Website shows "403 Forbidden"
- Can't access any pages

**Solutions:**
1. **Check file permissions**:
   - Files should be `644`
   - Folders should be `755`
   - `.htaccess` should be `644`

2. **Check .htaccess file**:
   - Make sure it exists in `public_html` root
   - Verify it's not corrupted
   - Check file name is exactly `.htaccess` (not `.htaccess.txt`)

3. **Check index.html**:
   - Make sure `index.html` exists in `public_html`
   - Verify permissions are `644`

4. **Contact Hostinger support** if issue persists

### Error 2: 404 Error on Page Refresh

**Symptoms:**
- Home page works
- Direct URLs or page refresh shows 404

**Solutions:**
1. **Verify .htaccess file**:
   - Must be in `public_html` root
   - Check content is correct (copy from above)

2. **Check mod_rewrite is enabled**:
   - Contact Hostinger support to enable `mod_rewrite`
   - Most Hostinger plans have it enabled by default

3. **Test .htaccess**:
   - Temporarily rename to `.htaccess.bak`
   - If site works, .htaccess has an issue
   - Restore and check syntax

### Error 3: White Screen / Blank Page

**Symptoms:**
- Website loads but shows blank white page

**Solutions:**
1. **Check browser console** (F12):
   - Look for JavaScript errors
   - Check Network tab for failed requests

2. **Verify all files uploaded**:
   - Check `assets/` folder exists
   - Verify JS and CSS files are present

3. **Check file paths**:
   - Make sure assets are in correct location
   - Verify no broken links

4. **Clear browser cache**:
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### Error 4: Images Not Loading

**Symptoms:**
- Images show broken icon
- Images don't display

**Solutions:**
1. **Check image paths**:
   - Images should be in `public_html/images/`
   - Verify file names match exactly (case-sensitive)

2. **Check file permissions**:
   - Image files should be `644`

3. **Verify upload**:
   - Make sure `images/` folder was uploaded
   - Check all image files are present

### Error 5: CSS/JS Not Loading

**Symptoms:**
- Website loads but no styling
- JavaScript not working

**Solutions:**
1. **Check assets folder**:
   - Verify `assets/` folder exists in `public_html`
   - Check JS and CSS files are present

2. **Check file permissions**:
   - Assets folder should be `755`
   - Files inside should be `644`

3. **Clear browser cache**:
   - Hard refresh the page

---

## Post-Deployment Verification

### ✅ Checklist:

- [ ] Website loads at `https://chamakz.app`
- [ ] Home page displays correctly
- [ ] All navigation links work
- [ ] Page refresh doesn't show 404
- [ ] Images load correctly
- [ ] CSS styling is applied
- [ ] JavaScript functionality works
- [ ] Mobile view works
- [ ] SSL certificate is active (HTTPS)
- [ ] No console errors (F12)
- [ ] All routes work (/, /features, /download, etc.)

---

## Quick Reference Commands

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Check build output
# Files will be in the 'dist' folder
```

---

## File Permissions Reference

| Type | Permission | Numeric | Description |
|------|-----------|--------|-------------|
| Files | rw-r--r-- | 644 | Owner: read/write, Others: read |
| Folders | rwxr-xr-x | 755 | Owner: all, Others: read/execute |
| .htaccess | rw-r--r-- | 644 | Same as files |

---

## Support & Troubleshooting

If you encounter issues:

1. **Check Hostinger documentation**
2. **Contact Hostinger support** (they're very helpful)
3. **Verify all steps were followed correctly**
4. **Check file permissions**
5. **Verify .htaccess file is correct**

---

## Next Steps After Deployment

1. ✅ **Test all pages**
2. ✅ **Set up Google Analytics** (optional)
3. ✅ **Submit to Google Search Console**
4. ✅ **Set up email** (if needed)
5. ✅ **Enable backups** in Hostinger

---

**Your website should now be live at https://chamakz.app! 🚀**

If you need help with any step, let me know!

