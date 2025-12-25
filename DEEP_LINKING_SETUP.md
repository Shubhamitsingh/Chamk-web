# Deep Linking & Smart App Banners Setup Guide

## Overview
This guide explains how to configure mobile app deep linking and smart app banners for chamakz.app.

## 1. Smart App Banners

### iOS Smart App Banner
The iOS Smart App Banner is automatically shown by Safari when the meta tag is present:
```html
<meta name="apple-itunes-app" content="app-id=YOUR_APP_ID, app-argument=chamakz://">
```

**To configure:**
1. Replace `YOUR_APP_ID` with your actual App Store app ID
2. Update `app-argument` with your custom URL scheme

### Android App Links
Android uses the google-play-app meta tag:
```html
<meta name="google-play-app" content="app-id=com.chamakz.app">
```

**To configure:**
1. Replace `com.chamakz.app` with your actual package name

## 2. Universal Links (iOS)

### Configuration File
File: `public/.well-known/apple-app-site-association`

**Steps:**
1. Replace `TEAM_ID` with your Apple Developer Team ID
2. Update `com.chamakz.app` with your bundle identifier
3. Add paths you want to deep link to
4. Ensure the file is served with `Content-Type: application/json`
5. File must be accessible at: `https://chamakz.app/.well-known/apple-app-site-association`

### Server Configuration
Ensure your server serves the file with correct headers:
```
Content-Type: application/json
Access-Control-Allow-Origin: *
```

## 3. App Links (Android)

### Configuration File
File: `public/.well-known/assetlinks.json`

**Steps:**
1. Replace `com.chamakz.app` with your package name
2. Replace `YOUR_SHA256_FINGERPRINT_HERE` with your app's SHA-256 certificate fingerprint
3. File must be accessible at: `https://chamakz.app/.well-known/assetlinks.json`

### Getting SHA-256 Fingerprint
```bash
# For debug keystore
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

# For release keystore
keytool -list -v -keystore your-release-key.keystore -alias your-key-alias
```

## 4. Custom URL Schemes

### iOS
In your iOS app's `Info.plist`:
```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>chamakz</string>
    </array>
  </dict>
</array>
```

### Android
In your Android app's `AndroidManifest.xml`:
```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="chamakz" />
</intent-filter>
```

## 5. Testing Deep Links

### iOS Testing
```bash
# Test Universal Link
xcrun simctl openurl booted "https://chamakz.app/download"

# Test Custom URL Scheme
xcrun simctl openurl booted "chamakz://open"
```

### Android Testing
```bash
# Test App Link
adb shell am start -a android.intent.action.VIEW -d "https://chamakz.app/download"

# Test Intent
adb shell am start -a android.intent.action.VIEW -d "chamakz://open"
```

## 6. Custom Banner Component

The `SmartAppBanner` component:
- Automatically detects iOS/Android devices
- Shows appropriate app store link
- Remembers dismissal for 7 days
- Only shows on mobile devices
- Tracks banner clicks for analytics

## 7. Usage in Components

### Using Mobile Detection
```jsx
import { detectDevice, getDeepLinkUrl, openAppOrStore } from '../utils/mobileDetection'

const MyComponent = () => {
  const handleDownload = () => {
    const device = detectDevice()
    const deepLink = getDeepLinkUrl('open')
    const fallback = '/download'
    
    openAppOrStore(deepLink, fallback)
  }
  
  return <button onClick={handleDownload}>Open App</button>
}
```

## 8. App Store IDs

**Important:** Replace these placeholders:
- iOS App Store ID: `YOUR_APP_ID`
- Android Package Name: `com.chamakz.app`
- Apple Team ID: `TEAM_ID`
- SHA-256 Fingerprint: `YOUR_SHA256_FINGERPRINT_HERE`

## 9. Server Requirements

### Required Headers
- `.well-known/apple-app-site-association`: `Content-Type: application/json`
- `.well-known/assetlinks.json`: `Content-Type: application/json`

### File Accessibility
Both files must be:
- Accessible without authentication
- Served over HTTPS
- Return 200 status code
- Have correct JSON format

## 10. Analytics Tracking

The implementation includes tracking for:
- Banner clicks
- App install attempts
- Device type
- Source attribution

Data is stored in localStorage and can be sent to your analytics service.






