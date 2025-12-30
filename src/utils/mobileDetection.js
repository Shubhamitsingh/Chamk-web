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
    return 'https://play.google.com/store/apps/details?id=com.chamakz.app&pcampaignid=web_share'
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
  const storeUrl = fallbackUrl || getAppStoreUrl()
  
  // If no deep link, go directly to store
  if (!deepLink) {
    window.open(storeUrl, '_blank')
    return
  }
  
  // For Android, try intent first, then fallback to Play Store
  if (device === 'android') {
    // Try to open app via intent
    const startTime = Date.now()
    window.location.href = deepLink
    
    // Fallback: if app doesn't open within 1 second, redirect to Play Store
    setTimeout(() => {
      const elapsed = Date.now() - startTime
      // If less than 1 second passed, the page is still here (app didn't open)
      if (elapsed < 1000) {
        window.location.href = storeUrl
      }
    }, 1000)
  } else if (device === 'ios') {
    // For iOS, try deep link first
    const startTime = Date.now()
    window.location.href = deepLink
    
    // Fallback: redirect to App Store if app doesn't open
    setTimeout(() => {
      const elapsed = Date.now() - startTime
      if (elapsed < 1000) {
        window.location.href = storeUrl
      }
    }, 1000)
  } else {
    // Desktop or other - go directly to store
    window.open(storeUrl, '_blank')
  }
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






