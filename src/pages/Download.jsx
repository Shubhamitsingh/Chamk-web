import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download as DownloadIcon, Smartphone, Check, Play, Apple, Star, Shield, Globe, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { openAppOrStore, getDeepLinkUrl, getAppStoreUrl, trackAppInstall, detectDevice } from '../utils/mobileDetection'

const Download = () => {
  // Ensure page scrolls to top when component mounts
  useEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Use requestAnimationFrame for next frame
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
    
    // Additional fallbacks with increasing delays to ensure it works after animations
    const timeout1 = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 50)

    const timeout2 = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 100)

    const timeout3 = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 200)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
    }
  }, [])

  // Add Schema Markup and Meta Tags
  useEffect(() => {
    // Update document title
    document.title = "Download Chamakz - Free Video Chat & Dating App | iOS & Android"
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', 'Download Chamakz app for free! Available on iOS and Android. Start video chatting and meeting new people today. 100% safe and secure.')

    // Add Schema Markup
    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.id = 'download-page-schema'
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Chamakz",
      "applicationCategory": "SocialNetworkingApplication",
      "operatingSystem": "Android, iOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "2000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "description": "Free live video chat and dating app for iOS and Android. Download now to start meeting new people through HD video calls.",
      "downloadUrl": "https://chamakz.app/download",
      "softwareVersion": "2.5.0",
      "screenshot": "https://chamakz.app/images/logo.png"
    })

    // Add Breadcrumb Schema
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.id = 'breadcrumb-schema'
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://chamakz.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Download",
          "item": "https://chamakz.app/download"
        }
      ]
    })

    // Remove existing schemas if any
    const existingSchema = document.getElementById('download-page-schema')
    const existingBreadcrumb = document.getElementById('breadcrumb-schema')
    if (existingSchema) existingSchema.remove()
    if (existingBreadcrumb) existingBreadcrumb.remove()

    document.head.appendChild(schemaScript)
    document.head.appendChild(breadcrumbScript)

    return () => {
      const schema = document.getElementById('download-page-schema')
      const breadcrumb = document.getElementById('breadcrumb-schema')
      if (schema) schema.remove()
      if (breadcrumb) breadcrumb.remove()
    }
  }, [])

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Best free video chat app I've used! The HD quality is amazing and I've met so many interesting people.",
      location: "New York, USA"
    },
    {
      name: "Raj K.",
      rating: 5,
      text: "Easy mobile app download and the interface is so user-friendly. Love the random video call feature!",
      location: "Mumbai, India"
    },
    {
      name: "Emma L.",
      rating: 4,
      text: "Safe and secure platform. The iOS app works perfectly and I feel comfortable chatting with strangers.",
      location: "London, UK"
    }
  ]

  const appScreenshots = [
    { alt: "Chamakz live video chat interface showing HD video call", title: "HD Video Chat" },
    { alt: "Random video call feature in Chamakz mobile app", title: "Random Calls" },
    { alt: "Group video rooms feature on Chamakz dating app", title: "Group Rooms" },
    { alt: "User profile and matching features in Chamakz app", title: "User Profiles" },
    { alt: "Chat and messaging interface in Chamakz video chat app", title: "Live Chat" },
    { alt: "Safety and privacy settings in Chamakz mobile app", title: "Safety Features" }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Download</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gradient mb-4">
              Download Chamakz - Free Live Video Chat App
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-6">
              Available on iOS & Android
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Get the <strong>free video chat app</strong> that connects you with people worldwide. 
              <strong>Download app</strong> now for <strong>iOS Android</strong> and start <strong>live chat app download</strong> experience today!
            </p>
            
            {/* App Rating Display */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.5</span>
              <span className="text-gray-600">(2,000+ reviews)</span>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('hero-ios', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg min-w-[280px] sm:min-w-[300px]"
                aria-label="Download Chamakz from Apple App Store"
              >
                <Apple size={28} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('hero-android', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0175C2] text-white rounded-xl font-semibold hover:bg-[#0165A3] transition-all duration-300 shadow-lg hover:shadow-xl text-lg min-w-[280px] sm:min-w-[300px]"
                aria-label="Download Chamakz from Google Play Store"
              >
                <Play size={28} />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Looking for the best <strong>free video chat app</strong> to <strong>meet new people</strong>? 
              <strong>Download Chamakz</strong> - the ultimate <strong>mobile app download</strong> for 
              <strong>live video chat</strong> and dating. Our <strong>free video chat app</strong> is 
              available for both <strong>iOS Android</strong> devices, making it easy to connect with 
              people from around the world through <strong>HD video calls</strong> and <strong>random video chat</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>mobile app download</strong> process is simple and secure. Whether you're using 
              an iPhone or Android device, you can <strong>download app</strong> in minutes from the 
              App Store or Google Play. Our <strong>live chat app download</strong> includes all the 
              features you need: <strong>HD video quality</strong>, <strong>safe chat with strangers</strong>, 
              <strong>group video rooms</strong>, and <strong>real-time translation</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Why choose Chamakz? Our <strong>free video chat app</strong> offers unmatched security 
              with AI-powered moderation, ensuring a safe environment for all users. The <strong>iOS Android</strong> 
              compatibility means you can connect with friends regardless of their device. With millions 
              of active users worldwide, you'll never run out of interesting people to meet through our 
              <strong>live video chat</strong> platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ready to start your journey? <strong>Download app</strong> now and experience the best 
              <strong>mobile app download</strong> for video chatting. Join thousands of users who have 
              already discovered the joy of connecting through our <strong>free video chat app</strong>. 
              The <strong>live chat app download</strong> is completely free, with no hidden costs or 
              subscription fees required.
            </p>
          </div>
        </div>
      </section>

      {/* Why Download Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Why Download Chamakz?
            </h2>
            <p className="text-xl text-gray-600">
              Discover what makes our free video chat app the best choice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Video,
                title: "HD Video Quality",
                description: "Experience crystal-clear HD live streaming with minimal lag. Our advanced technology ensures smooth video calls every time."
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "AI-powered moderation and strict safety protocols ensure a secure environment. Chat with strangers confidently."
              },
              {
                icon: Globe,
                title: "Global Community",
                description: "Connect with millions of users worldwide. Break language barriers with real-time translation features."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Download Options with QR Codes */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* iOS Download */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center space-y-6"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Apple className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-heading font-bold">Download for iOS</h2>
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('download-ios', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full"
                aria-label="Download Chamakz iOS app from App Store"
              >
                <Apple size={24} />
                Download for iOS
              </button>
              <div className="space-y-3 text-left pt-4">
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">iOS 12.0 and above</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">Latest version: 2.5.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">Free to download</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">100% safe and secure</span>
                </div>
              </div>
              <div className="pt-6">
                <div className="w-40 h-40 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 shadow-md">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📱</div>
                    <p className="text-xs text-gray-600">Scan QR Code</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">Scan with your iPhone camera to download</p>
              </div>
            </motion.div>

            {/* Android Download */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center space-y-6"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-heading font-bold">Download for Android</h2>
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('download-android', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0175C2] text-white rounded-xl font-semibold hover:bg-[#0165A3] transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full"
                aria-label="Download Chamakz Android app from Google Play"
              >
                <Play size={24} />
                Download for Android
              </button>
              <div className="space-y-3 text-left pt-4">
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">Android 6.0 and above</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">Latest version: 2.5.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">Free to download</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">100% safe and secure</span>
                </div>
              </div>
              <div className="pt-6">
                <div className="w-40 h-40 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 shadow-md">
                  <div className="text-center">
                    <div className="text-6xl mb-2">📱</div>
                    <p className="text-xs text-gray-600">Scan QR Code</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">Scan with your Android camera to download</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              See Chamakz in Action
            </h2>
            <p className="text-xl text-gray-600">
              Explore our app features through screenshots
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {appScreenshots.map((screenshot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-2">📱</div>
                    <p className="text-sm font-medium text-gray-700">{screenshot.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-primary rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get Started Free
            </h2>
            <p className="text-xl text-white/90">
              Download Chamakz now and start meeting new people through live video chat today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('cta-ios', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <Apple size={24} />
                Download for iOS
              </button>
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('cta-android', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <Play size={24} />
                Download for Android
              </button>
            </div>
            <div className="pt-6 space-y-2">
              <p className="text-white/80">
                Learn more about our <Link to="/features" className="underline font-semibold">features</Link> or 
                check out our <Link to="/guidelines" className="underline font-semibold">safety guidelines</Link>
              </p>
              <p className="text-white/80">
                Need help? Visit our <Link to="/how-it-works" className="underline font-semibold">how it works</Link> page or 
                <Link to="/contact" className="underline font-semibold"> contact us</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Download
