import { useState, useEffect } from 'react'
import { X, Apple, Play, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const SmartAppBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [deviceType, setDeviceType] = useState(null)

  // Detect device type
  useEffect(() => {
    const detectDevice = () => {
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

    const device = detectDevice()
    setDeviceType(device)

    // Check if banner was dismissed (using localStorage)
    const bannerDismissed = localStorage.getItem('app-banner-dismissed')
    const dismissedDate = bannerDismissed ? new Date(bannerDismissed) : null
    const daysSinceDismissed = dismissedDate 
      ? Math.floor((new Date() - dismissedDate) / (1000 * 60 * 60 * 24))
      : null

    // Show banner if:
    // 1. On mobile device
    // 2. Not dismissed or dismissed more than 7 days ago
    // 3. Not on desktop
    if (device !== 'desktop' && (!bannerDismissed || (daysSinceDismissed && daysSinceDismissed > 7))) {
      // Small delay for better UX
      setTimeout(() => {
        setIsVisible(true)
      }, 2000)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Store dismissal with timestamp
    localStorage.setItem('app-banner-dismissed', new Date().toISOString())
  }

  const handleInstallClick = (store) => {
    // Track banner click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'app_banner_click', {
        store: store,
        device: deviceType
      })
    }
    
    // Analytics tracking (if available)
    console.log('App banner clicked:', { store, device: deviceType })
  }

  const getAppStoreUrl = () => {
    if (deviceType === 'ios') {
      return 'https://apps.apple.com/app/chamakz/idYOUR_APP_ID' // Replace with actual App Store ID
    } else if (deviceType === 'android') {
      return 'https://play.google.com/store/apps/details?id=com.chamakz.app&pcampaignid=web_share'
    }
    return '/download'
  }

  const getDeepLinkUrl = () => {
    if (deviceType === 'ios') {
      return 'chamakz://open' // iOS URL scheme
    } else if (deviceType === 'android') {
      return 'intent://open#Intent;scheme=chamakz;package=com.chamakz.app;end' // Android Intent
    }
    return null
  }

  if (!isVisible || deviceType === 'desktop') {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white border-t-2 border-primary shadow-2xl">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center gap-3">
                {/* App Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                    <img 
                      src="/images/logopink.png" 
                      alt="Chamakz App" 
                      className="w-12 h-12 object-contain rounded-lg"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-gray-900 text-sm leading-tight">
                    Get the Chamakz App
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {deviceType === 'ios' 
                      ? 'Download on the App Store' 
                      : deviceType === 'android'
                      ? 'Get it on Google Play'
                      : 'Download our mobile app'}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {deviceType === 'ios' ? (
                      <a
                        href={getAppStoreUrl()}
                        onClick={() => handleInstallClick('ios')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Apple size={14} />
                        App Store
                      </a>
                    ) : deviceType === 'android' ? (
                      <a
                        href={getAppStoreUrl()}
                        onClick={() => handleInstallClick('android')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0175C2] text-white rounded-lg text-xs font-semibold hover:bg-[#0165A3] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play size={14} />
                        Google Play
                      </a>
                    ) : (
                      <Link
                        to="/download"
                        onClick={() => handleInstallClick('mobile')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-primary text-white rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        <Smartphone size={14} />
                        Download
                      </Link>
                    )}
                    <span className="text-xs text-gray-500">Free</span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close app banner"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SmartAppBanner






