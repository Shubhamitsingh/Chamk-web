/**
 * Mobile Detection Utilities
 * Detects device type and provides deep linking functionality
 */

export const detectDevice = () => {
  if (typeof window === 'undefined') return 'desktop'
  
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  
  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios'
  }
  
  // Android detection
  if (/android/i.test(userAgent)) {
    return 'android'
  }
  
  // Other mobile devices
  if (/Mobile|Android|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(userAgent)) {
    return 'mobile'
  }
  
  return 'desktop'
}

export const isMobile = () => {
  return detectDevice() !== 'desktop'
}

export const isIOS = () => {
  return detectDevice() === 'ios'
}

export const isAndroid = () => {
  return detectDevice() === 'android'
}

/**
 * Get deep link URL for app
 * @param {string} path - Path to open in app
 * @returns {string|null} Deep link URL or null
 */
export const getDeepLinkUrl = (path = '') => {
  const device = detectDevice()
  
  if (device === 'ios') {
    // iOS Universal Links or Custom URL Scheme
    return `chamakz://${path}` // Replace with your actual URL scheme
  } else if (device === 'android') {
    // Android App Links or Intent
    return `intent://${path}#Intent;scheme=chamakz;package=com.chamakz.app;end`
  }
  
  return null
}

/**
 * Get app store URL
 * @returns {string} App store URL
 */
export const getAppStoreUrl = () => {
  const device = detectDevice()
  
  if (device === 'ios') {
    return 'https://apps.apple.com/app/chamakz/idYOUR_APP_ID' // Replace with actual App Store ID
  } else if (device === 'android') {
    return 'https://play.google.com/store/apps/details?id=com.chamakz.app' // Replace with actual package name
  }
  
  return '/download'
}

/**
 * Try to open app, fallback to store if not installed
 * @param {string} deepLink - Deep link URL
 * @param {string} fallbackUrl - Fallback URL (store or web)
 */
export const openAppOrStore = (deepLink, fallbackUrl) => {
  const device = detectDevice()
  
  if (!deepLink) {
    window.location.href = fallbackUrl || getAppStoreUrl()
    return
  }
  
  // Try to open app
  const startTime = Date.now()
  window.location.href = deepLink
  
  // Fallback detection (if app doesn't open, redirect to store)
  setTimeout(() => {
    const endTime = Date.now()
    // If page is still visible after 2.5 seconds, app likely didn't open
    if (endTime - startTime < 2500) {
      window.location.href = fallbackUrl || getAppStoreUrl()
    }
  }, 2500)
}

/**
 * Track app install attribution
 * @param {string} source - Source of install (banner, button, etc.)
 * @param {string} device - Device type
 */
export const trackAppInstall = (source, device) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'app_install_click', {
        source: source,
        device: device,
        timestamp: new Date().toISOString()
      })
    }
    
    // Custom analytics
    console.log('App install tracked:', { source, device })
    
    // Store in localStorage for attribution
    localStorage.setItem('app_install_source', JSON.stringify({
      source,
      device,
      timestamp: new Date().toISOString()
    }))
  }
}




