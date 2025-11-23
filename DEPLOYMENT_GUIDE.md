# Hostinger Deployment Guide for Chamakz Website

This guide will walk you through deploying your React/Vite website to Hostinger hosting.

## Prerequisites

- Hostinger hosting account (with cPanel access)
- Your website files ready
- FTP client (FileZilla, WinSCP, or use Hostinger's File Manager)

---

## Step 1: Build Your Project for Production

Before deploying, you need to build your project to create optimized production files.

### On Your Local Machine:

1. **Open Terminal/Command Prompt** in your project directory:
   ```bash
   cd "C:\Users\Shubham Singh\Desktop\Chamak-Web"
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Verify the build**:
   - After building, you should see a `dist` folder created in your project directory
   - This folder contains all the optimized files ready for deployment

---

## Step 2: Access Hostinger cPanel

1. **Log in to Hostinger**:
   - Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Log in with your Hostinger account credentials

2. **Navigate to File Manager**:
   - In the cPanel dashboard, find and click on **"File Manager"**
   - Or go to **"Files"** → **"File Manager"**

---

## Step 3: Prepare Your Domain Directory

1. **Navigate to your domain folder**:
   - In File Manager, go to `public_html` folder
   - If you have multiple domains, select the folder for your specific domain (e.g., `public_html/yourdomain.com`)

2. **Backup existing files** (if any):
   - Select all existing files
   - Create a backup folder or download them first

3. **Clear the directory** (optional but recommended):
   - Delete all files in `public_html` (or your domain folder)
   - **Important**: Keep the folder structure, just remove files

---

## Step 4: Upload Your Built Files

### Option A: Using File Manager (Easiest)

1. **Navigate to your domain folder** in File Manager

2. **Upload the dist folder contents**:
   - Click **"Upload"** button in File Manager
   - Navigate to your local `dist` folder
   - Select ALL files and folders inside the `dist` folder
   - Upload them to `public_html` (or your domain folder)

3. **Extract if needed**:
   - If files were uploaded as a zip, right-click and extract

### Option B: Using FTP Client (Recommended for large files)

1. **Get FTP credentials from Hostinger**:
   - Go to **"Files"** → **"FTP Accounts"** in cPanel
   - Note down: FTP Host, Username, Password, Port

2. **Connect using FTP client** (FileZilla, WinSCP, etc.):
   - Host: Your FTP host (usually `ftp.yourdomain.com` or IP)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)

3. **Upload files**:
   - Navigate to `public_html` on the server
   - Navigate to your local `dist` folder
   - Select all files and folders from `dist`
   - Drag and drop or upload to `public_html`

---

## Step 5: Configure for React Router

Since you're using React Router, you need to handle routing properly on the server.

### Create .htaccess File

1. **In File Manager**, navigate to `public_html` folder

2. **Create a new file** named `.htaccess`

3. **Add the following content** to `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures that all routes work correctly and don't show 404 errors.

---

## Step 6: Verify Deployment

1. **Visit your website**:
   - Open your browser
   - Go to `https://yourdomain.com` (replace with your actual domain)

2. **Test all pages**:
   - Home page
   - Features page
   - Download page
   - About page
   - Contact page
   - Privacy Policy
   - Terms of Service
   - Community Guidelines

3. **Check for issues**:
   - Images loading correctly
   - All links working
   - No console errors (press F12 to check)

---

## Step 7: SSL Certificate (HTTPS)

1. **Enable SSL in Hostinger**:
   - Go to **"SSL"** in cPanel
   - Click **"Install SSL Certificate"**
   - Select **"Let's Encrypt"** (free)
   - Install for your domain

2. **Force HTTPS** (optional):
   - Add this to your `.htaccess` file:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

## Troubleshooting

### Issue: 404 Error on Page Refresh
**Solution**: Make sure the `.htaccess` file is in `public_html` with the correct rewrite rules.

### Issue: Images Not Loading
**Solution**: 
- Check that images are in the correct path (`/images/logo.png`)
- Verify file permissions (should be 644 for files, 755 for folders)

### Issue: White Screen
**Solution**:
- Check browser console for errors (F12)
- Verify all files were uploaded correctly
- Check that `index.html` is in the root directory

### Issue: Slow Loading
**Solution**:
- Enable GZIP compression in `.htaccess`:
  ```apache
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
  </IfModule>
  ```

---

## Quick Reference Commands

```bash
# Build for production
npm run build

# Preview build locally (test before deploying)
npm run preview

# Check build output
# Files will be in the 'dist' folder
```

---

## File Structure After Deployment

Your `public_html` should look like this:

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── images/
│   ├── logo.png
│   └── portrait-girl.png
└── vite.svg (if exists)
```

---

## Need Help?

If you encounter any issues:
1. Check Hostinger's documentation
2. Contact Hostinger support
3. Verify all files were uploaded correctly
4. Check file permissions (should be 644 for files, 755 for folders)

---

## Next Steps After Deployment

1. **Update DNS** (if using a new domain)
2. **Set up email** (if needed)
3. **Monitor performance** using Google Analytics
4. **Set up backups** in Hostinger cPanel
5. **Enable caching** for better performance

---

**Good luck with your deployment! 🚀**

