import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Video, Users, MessageCircle, Globe, Shield, Gift, 
  Download, Play, Apple, Check, Star, Languages, 
  Lock, Zap, Heart, UsersRound
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Features = () => {
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
    document.title = "Features - Live Video Chat & Streaming | Chamakz – New Friends Live Chat"
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', 'Explore Chamakz – New Friends Live Chat features: HD video calls, random chat, group rooms, real-time translation, and live streaming. Join millions worldwide!')

    // Add ItemList Schema for Features
    const itemListSchema = document.createElement('script')
    itemListSchema.type = 'application/ld+json'
    itemListSchema.id = 'features-itemlist-schema'
    itemListSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Chamakz Features",
      "description": "Complete list of features for Chamakz – New Friends Live Chat platform",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "1-on-1 Video Calls",
          "description": "HD video call features for private one-on-one conversations"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Random Video Chat with Strangers",
          "description": "Connect with random people worldwide through video chat"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Group Video Rooms",
          "description": "Join or create group video chat rooms with multiple participants"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Live Streaming",
          "description": "Live streaming features for broadcasting to audiences"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Real-Time Translation",
          "description": "Break language barriers with real-time translation features"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Safe & Secure Platform",
          "description": "AI-powered moderation and safety features for secure video chat"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "HD Video Quality",
          "description": "Crystal-clear HD video quality for all video calls and streaming"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Virtual Gifts & Rewards",
          "description": "Send and receive virtual gifts during video calls and streams"
        }
      ]
    })

    // Add Breadcrumb Schema
    const breadcrumbSchema = document.createElement('script')
    breadcrumbSchema.type = 'application/ld+json'
    breadcrumbSchema.id = 'features-breadcrumb-schema'
    breadcrumbSchema.textContent = JSON.stringify({
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
          "name": "Features",
          "item": "https://chamakz.app/features"
        }
      ]
    })

    // Remove existing schemas if any
    const existingItemList = document.getElementById('features-itemlist-schema')
    const existingBreadcrumb = document.getElementById('features-breadcrumb-schema')
    if (existingItemList) existingItemList.remove()
    if (existingBreadcrumb) existingBreadcrumb.remove()

    document.head.appendChild(itemListSchema)
    document.head.appendChild(breadcrumbSchema)

    return () => {
      const itemList = document.getElementById('features-itemlist-schema')
      const breadcrumb = document.getElementById('features-breadcrumb-schema')
      if (itemList) itemList.remove()
      if (breadcrumb) breadcrumb.remove()
    }
  }, [])

  const features = [
    {
      id: 1,
      title: '1-on-1 Video Calls',
      description: 'Experience crystal-clear <strong>HD video quality</strong> with our advanced <strong>video call features</strong>. Connect privately with friends, family, or new connections through secure one-on-one conversations. Our platform ensures minimal latency and excellent audio quality, making every conversation feel natural and personal. Perfect for <strong>making new friends</strong> where meaningful connections matter.',
      icon: Video,
      benefits: ['HD video quality', 'Low latency', 'Private conversations', 'Crystal-clear audio']
    },
    {
      id: 2,
      title: 'Random Video Chat with Strangers',
      description: 'Discover the excitement of <strong>random chat</strong> with people from around the world. Our <strong>safe video chat</strong> platform uses AI-powered matching to connect you with interesting individuals based on your preferences. Break the ice with spontaneous conversations and meet new people in a secure environment. Experience the thrill of <strong>video call features</strong> designed for authentic connections.',
      icon: Users,
      benefits: ['AI-powered matching', 'Global connections', 'Safe environment', 'Instant connections']
    },
    {
      id: 3,
      title: 'Group Video Rooms',
      description: 'Create or join <strong>group video chat</strong> rooms with up to 50 participants. Perfect for virtual hangouts, online events, or community gatherings. Our <strong>live streaming features</strong> support multiple participants with excellent video quality for everyone. Whether you\'re hosting a party, conducting a meeting, or just hanging out with friends, <strong>group video chat</strong> makes it easy to connect with multiple people simultaneously.',
      icon: UsersRound,
      benefits: ['Up to 50 participants', 'Screen sharing', 'Moderator controls', 'Public or private rooms']
    },
    {
      id: 4,
      title: 'Live Streaming',
      description: 'Broadcast your talents to a global audience with our comprehensive <strong>live streaming features</strong>. Share your music, dance, comedy, or daily life with viewers worldwide. Our platform supports <strong>HD video quality</strong> streaming with real-time viewer interaction through comments and reactions. Build your audience and connect with fans through engaging <strong>live streaming</strong> sessions.',
      icon: Zap,
      benefits: ['Global broadcasting', 'Real-time interaction', 'Viewer engagement', 'Monetization options']
    },
    {
      id: 5,
      title: 'Real-Time Translation',
      description: 'Break down language barriers with our <strong>real-time translation</strong> feature. Chat with people from any country, speaking any language, and communicate seamlessly. Our advanced translation technology supports 50+ languages, making it easy to connect with the global community. Experience <strong>video call features</strong> that truly bring the world together.',
      icon: Languages,
      benefits: ['50+ languages', 'Instant translation', 'Natural conversations', 'Cultural exchange']
    },
    {
      id: 6,
      title: 'Safe & Secure Platform',
      description: 'Your safety is our top priority. Our <strong>safe video chat</strong> platform uses AI-powered moderation, content filtering, and reporting tools to ensure a secure environment for everyone. We maintain strict community guidelines and provide 24/7 support to address any concerns. Experience <strong>new friends features</strong> with peace of mind, knowing you\'re protected by advanced security measures.',
      icon: Shield,
      benefits: ['AI moderation', 'Content filtering', '24/7 support', 'Privacy protection']
    },
    {
      id: 7,
      title: 'HD Video Quality',
      description: 'Experience the best <strong>HD video quality</strong> in the industry. Our advanced video compression and streaming technology ensures crystal-clear video calls and streams, even on slower internet connections. Whether you\'re using <strong>video call features</strong> for personal conversations or <strong>live streaming features</strong> for broadcasting, enjoy professional-grade video quality that makes every interaction memorable.',
      icon: Star,
      benefits: ['4K support', 'Adaptive quality', 'Low bandwidth mode', 'Crystal-clear audio']
    },
    {
      id: 8,
      title: 'Virtual Gifts & Rewards',
      description: 'Express yourself and show appreciation with our <strong>virtual gifts</strong> system. Send animated gifts, emojis, and special effects during video calls and streams. Creators can monetize their content by receiving gifts from viewers, which can be converted to real earnings. Our <strong>new friends features</strong> include gift exchanges that make connections more meaningful and fun.',
      icon: Gift,
      benefits: ['Animated gifts', 'Monetization', 'Special effects', 'Gift collections']
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Features</li>
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
              Powerful Features for Live Video Chat & New Friends
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Discover comprehensive <strong>video call features</strong>, <strong>live streaming features</strong>, 
              and <strong>new friends features</strong> designed to connect you with people worldwide. Experience 
              <strong>HD video quality</strong>, <strong>safe video chat</strong>, and <strong>real-time translation</strong> 
              in one powerful platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Chamakz offers the most comprehensive <strong>video call features</strong> and <strong>live streaming features</strong> 
              in the industry. Whether you're looking for <strong>random chat</strong> opportunities, <strong>group video chat</strong> 
              experiences, or one-on-one connections, our platform provides everything you need. Our <strong>HD video quality</strong> 
              ensures that every conversation feels personal and engaging, while our <strong>safe video chat</strong> protocols 
              guarantee a secure environment for all users.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our <strong>real-time translation</strong> feature breaks down language barriers, allowing you to connect with 
              people from any country seamlessly. This powerful <strong>video call feature</strong> supports over 50 languages, 
              making it easy to have natural conversations regardless of your native tongue. Combined with our <strong>new friends features</strong>, 
              you can build meaningful friendships with people from diverse cultural backgrounds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>group video chat</strong> functionality allows you to create or join rooms with up to 50 participants, 
              perfect for virtual events, online gatherings, or community meetups. Our <strong>live streaming features</strong> 
              enable content creators to broadcast to global audiences with professional-grade <strong>HD video quality</strong>. 
              Whether you're streaming music, hosting a Q&A, or sharing your daily life, our platform provides all the tools 
              you need for successful broadcasts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Safety is paramount in our <strong>safe video chat</strong> environment. We use advanced AI moderation, content 
              filtering, and user reporting systems to maintain a positive community. Our <strong>new friends features</strong> 
              include verified profiles, privacy controls, and secure messaging, ensuring that every interaction is safe and 
              respectful. Experience the best <strong>video call features</strong> and <strong>live streaming features</strong> 
              with the confidence that comes from comprehensive security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              const isEven = idx % 2 === 0
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient">
                        {feature.title}
                      </h2>
                    </div>
                    <div 
                      className="text-lg text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, benefitIdx) => (
                        <li key={benefitIdx} className="flex items-center gap-3">
                          <Check className="text-primary flex-shrink-0" size={20} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
                      <div className="relative rounded-3xl p-8 aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20">
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-lg">
                            <Icon className="text-white" size={64} />
                          </div>
                          <p className="text-gray-600 font-medium">{feature.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA After Features 2-3 */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-gray-700">
              Download the app now and start using all these powerful features today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Download size={24} />
                Download App
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gradient text-center mb-12">
              More Amazing Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: 'End-to-End Encryption', desc: 'Your conversations are private and secure' },
                { icon: Heart, title: 'Like & Match System', desc: 'Find compatible people with our matching algorithm' },
                { icon: MessageCircle, title: 'Text & Voice Messages', desc: 'Stay connected even when not on video' },
                { icon: Globe, title: 'Global Community', desc: 'Connect with millions of users worldwide' },
                { icon: Zap, title: 'Fast Connection', desc: 'Instant video call connections in seconds' },
                { icon: Star, title: 'Premium Features', desc: 'Unlock exclusive features with premium membership' }
              ].map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <ItemIcon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Try Free Now
            </h2>
            <p className="text-xl text-white/90">
              Experience all these powerful features for free. Download Chamakz today and start connecting with people worldwide!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <Apple size={24} />
                Download for iOS
              </Link>
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <Play size={24} />
                Download for Android
              </Link>
            </div>
            <div className="pt-6 space-y-2">
              <p className="text-white/80">
                Learn more about our <Link to="/about" className="underline font-semibold">platform</Link> or 
                check out our <Link to="/download" className="underline font-semibold">download page</Link>
              </p>
              <p className="text-white/80">
                Have questions? <Link to="/contact" className="underline font-semibold">Contact us</Link> for support
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Features
