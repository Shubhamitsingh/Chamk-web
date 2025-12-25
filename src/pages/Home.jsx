import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Video, DollarSign, Users, MessageCircle, Shield, Globe,
  Download, Smartphone, Trophy, Play, Apple
} from 'lucide-react'
import Button from '../components/Button'
import StatCounter from '../components/StatCounter'
import SEOHead from '../components/SEOHead'
import Breadcrumbs from '../components/Breadcrumbs'
import { Link } from 'react-router-dom'
import { openAppOrStore, getDeepLinkUrl, getAppStoreUrl, trackAppInstall, detectDevice } from '../utils/mobileDetection'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroSlides = [
    {
      title: 'Live Video Chat & Dating Platform',
      subtitle: 'Meet new people worldwide through live video chat and random video calls. Experience HD video quality and safe connections with strangers.',
      emoji: '✨',
      bgColor: '#FF1B7C',
    },
  ]

  // Removed auto-advance and navigation functions since we only have one slide

  const features = [
    {
      icon: Video,
      title: 'Random Video Chat',
      description: 'Connect instantly with people worldwide through random video calls. Experience spontaneous conversations and meet new people in real-time.',
    },
    {
      icon: Users,
      title: 'Group Video Rooms',
      description: 'Join or create group video rooms to meet multiple people at once. Perfect for social gatherings and community building.',
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Translation',
      description: 'Break down language barriers with our real-time translation feature. Chat with strangers from any country seamlessly.',
    },
    {
      icon: Video,
      title: 'HD Video Quality',
      description: 'Experience crystal-clear HD live streaming with minimal lag. Enjoy high-quality video chat online with excellent picture and sound.',
    },
    {
      icon: Shield,
      title: 'Safe Chat with Strangers',
      description: 'AI-powered moderation and safety features ensure a secure environment. Chat with strangers confidently with our protection tools.',
    },
    {
      icon: Globe,
      title: 'Worldwide Connections',
      description: 'Meet new people from around the globe. Our dating app connects you with users worldwide for meaningful connections.',
    },
  ]

  const steps = [
    {
      number: 1,
      icon: Download,
      title: 'Download & Sign Up',
      description: 'Get the app and create your profile in minutes',
    },
    {
      number: 2,
      icon: Video,
      title: 'Go Live',
      description: 'Tap the go-live button and start streaming your talent',
    },
    {
      number: 3,
      icon: Trophy,
      title: 'Earn & Grow',
      description: 'Receive gifts, gain followers, and build your brand',
    },
  ]

  const stats = [
    { number: '3K+', label: 'Total Streams' },
    { number: '5K+', label: 'Downloads' },
    { number: '2K+', label: 'Active Users' },
    { number: '4.5★', label: 'App Rating' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Live Video Chat & Dating App | Chamakz - Meet New People"
        description="Join Chamakz for live video chat, random calls, and dating. Meet new people worldwide with HD video quality. Download free now - Chat with strangers safely!"
        image="/images/logopink.png"
        keywords="live video chat, random video call, meet new people, dating app, video chat online, live streaming, chat with strangers"
      />
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 md:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ backgroundColor: heroSlides[currentSlide].bgColor }}
          />
        </AnimatePresence>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Column - Slider Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-5 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1 max-w-full"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight">
                  {heroSlides[currentSlide].title}{' '}
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                    {heroSlides[currentSlide].emoji}
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed px-2 sm:px-0">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center lg:justify-start w-full max-w-[340px] sm:max-w-none mx-auto lg:mx-0">
                  <button
                    onClick={() => {
                      const deepLink = getDeepLinkUrl('open')
                      const fallback = getAppStoreUrl()
                      trackAppInstall('hero-android', detectDevice())
                      openAppOrStore(deepLink, fallback)
                    }}
                    className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-primary border-2 border-white rounded-lg sm:rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg flex-1 sm:flex-none sm:w-auto max-w-[150px] sm:max-w-none"
                  >
                    <Play size={14} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <span className="hidden lg:inline">Download on </span>Play Store
                  </button>
                  <button
                    onClick={() => {
                      const deepLink = getDeepLinkUrl('open')
                      const fallback = getAppStoreUrl()
                      trackAppInstall('hero-ios', detectDevice())
                      openAppOrStore(deepLink, fallback)
                    }}
                    className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-white text-primary border-2 border-white rounded-lg sm:rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg flex-1 sm:flex-none sm:w-auto max-w-[150px] sm:max-w-none"
                  >
                    <Apple size={14} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                    <span className="hidden lg:inline">Download on </span>App Store
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 pt-2 sm:pt-4 justify-center lg:justify-start">
                  {['5K+ Downloads', '2K+ Active Users', '4.5★ Rating'].map((badge, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="px-3 sm:px-3.5 py-1.5 sm:py-2 bg-white/30 backdrop-blur-md rounded-lg text-white text-xs sm:text-sm font-semibold shadow-lg"
                    >
                      {badge}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: -50, scale: 0.8, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0, 
                scale: 1, 
                rotate: 0
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="relative order-1 lg:order-2 pt-8 sm:pt-12 md:pt-16 lg:pt-20"
            >
              <div className="relative mx-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
                
                {/* Phone Frame with Live Stream */}
                <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 md:p-4 shadow-2xl border border-white">
                  <div className="bg-black rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                    {/* Live Stream Image */}
                    <div className="absolute inset-0">
                      <img 
                        src="/images/portrait-girl.png" 
                        alt="People using Chamakz live video chat app for random video calls and dating"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder if image not found */}
                      <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-2 sm:mb-3 md:mb-4 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                            <span className="text-4xl sm:text-5xl md:text-6xl">📹</span>
                          </div>
                          <p className="text-white font-semibold text-sm sm:text-base md:text-lg">Live Streaming</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Live Badge */}
                    <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 flex items-center gap-1 sm:gap-1.5 md:gap-2 bg-red-500 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white text-[10px] sm:text-xs font-semibold">LIVE</span>
                    </div>
                    
                    {/* Viewers Count */}
                    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-black/50 backdrop-blur-md px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full">
                      <span className="text-white text-[10px] sm:text-xs font-medium">👁️ <span className="hidden sm:inline">1.2K</span><span className="sm:hidden">1.2K</span></span>
                    </div>
                    
                    {/* Bottom UI Elements (like Tango) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 sm:p-3 md:p-4">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-primary rounded-full border border-white sm:border-2"></div>
                          <span className="text-white text-xs sm:text-sm font-semibold truncate max-w-[100px] sm:max-w-none">@username</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                            <span className="text-white text-sm sm:text-base md:text-lg">❤️</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="flex -space-x-1.5 sm:-space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full border border-white sm:border-2"></div>
                          ))}
                        </div>
                        <span className="text-white/80 text-[10px] sm:text-xs">+50 watching</span>
                      </div>
                    </div>
                    
                    {/* Floating Gifts/Reactions */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[
                        { emoji: '💝', position: 'top-1/3 right-2 sm:right-4 md:right-6 lg:right-8', delay: 0 },
                        { emoji: '❤️', position: 'top-1/2 right-3 sm:right-6 md:right-8 lg:right-12', delay: 0.5 },
                        { emoji: '⭐', position: 'top-2/3 right-1.5 sm:right-3 md:right-4 lg:right-6', delay: 1 },
                        { emoji: '🎁', position: 'top-1/4 right-2.5 sm:right-5 md:right-6 lg:right-10', delay: 1.5 },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className={`absolute ${item.position} text-lg sm:text-xl md:text-2xl lg:text-3xl`}
                          initial={{ opacity: 0, y: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 1, 0],
                            y: [-10, -30, -60],
                            scale: [0, 1, 0.9, 0.6],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "easeOut",
                          }}
                        >
                          {item.emoji}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements Around Phone - Hidden on mobile, visible on larger screens */}
                {[
                  { emoji: '💝', position: 'top-10 -right-6 sm:-right-8 md:-right-10', size: 'text-2xl sm:text-3xl md:text-4xl' },
                  { emoji: '❤️', position: 'top-1/2 -right-3 sm:-right-4 md:-right-5', size: 'text-3xl sm:text-4xl md:text-5xl' },
                  { emoji: '🎉', position: 'bottom-20 -right-5 sm:-right-6 md:-right-8', size: 'text-2xl sm:text-3xl md:text-4xl' },
                  { emoji: '⭐', position: 'top-1/4 -left-5 sm:-left-6 md:-left-8', size: 'text-2xl sm:text-3xl md:text-4xl' },
                  { emoji: '💎', position: 'bottom-10 -left-4 sm:-left-5 md:-left-6', size: 'text-xl sm:text-2xl md:text-3xl' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className={`absolute ${item.position} ${item.size} hidden sm:block`}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 8, -8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Slider Dots - Hidden since we only have one slide */}
        </div>
      </section>

      {/* About Chamakz Section - SEO Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient text-center">
              Meet New People Worldwide
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Chamakz is the ultimate <strong>live video chat</strong> and <strong>dating app</strong> that connects you with people from around the world. Whether you're looking for meaningful connections, casual conversations, or romantic relationships, our platform offers a safe and exciting way to <strong>meet new people</strong> through <strong>random video calls</strong> and <strong>video chat online</strong>.
              </p>
              <p>
                Experience crystal-clear <strong>HD live streaming</strong> that makes every conversation feel personal and real. Our advanced technology ensures smooth video calls, minimal lag, and high-definition picture quality, so you can focus on building connections rather than technical issues. With Chamakz, you can <strong>chat with strangers</strong> safely in a moderated environment designed for your security and comfort.
              </p>
              <p>
                Our platform features include <strong>random video chat</strong> for spontaneous connections, <strong>group video rooms</strong> to meet multiple people at once, and <strong>real-time translation</strong> to break down language barriers. Whether you're interested in <strong>live streaming</strong> your talents, one-on-one <strong>video chat online</strong>, or exploring our <strong>dating app</strong> features, Chamakz gives you all the tools you need to connect authentically. Safety is our top priority — we use AI-powered moderation and human review, with strict community guidelines and reporting tools so you can <strong>chat with strangers</strong> confidently in a safe and respectful environment.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/features" className="px-4 py-2 bg-gradient-primary/10 rounded-full text-primary font-medium hover:bg-gradient-primary/20 transition-colors">
                Explore Features
              </Link>
              <Link to="/download" className="px-4 py-2 bg-gradient-primary/10 rounded-full text-primary font-medium hover:bg-gradient-primary/20 transition-colors">
                Download Free App
              </Link>
              <Link to="/contact" className="px-4 py-2 bg-gradient-primary/10 rounded-full text-primary font-medium hover:bg-gradient-primary/20 transition-colors">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Safe Video Calls & HD Live Streaming
            </h2>
            <p className="text-xl text-gradient">
              Everything you need for the best video chat experience
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover-lift border border-primary-100/50"
                >
                  <div className="w-16 h-16 bg-gradient-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{feature.title}</h3>
                  <p className="text-gradient">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Download Free App
            </h2>
            <p className="text-xl text-gray-600">
              Get started with live video chat in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={40} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-gradient">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <StatCounter number={stat.number} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Ready to Start Your Video Chat Journey?
            </h2>
            <p className="text-xl text-gradient">
              Join millions of users worldwide on Chamakz - Download free now and start meeting new people through live video chat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('home-cta-android', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FF1B7C] text-white rounded-lg font-semibold hover:bg-[#E6176D] transition-all duration-300 shadow-lg"
              >
                <Play size={20} />
                Download from Google Play Store
              </button>
              <button
                onClick={() => {
                  const deepLink = getDeepLinkUrl('open')
                  const fallback = getAppStoreUrl()
                  trackAppInstall('home-cta-ios', detectDevice())
                  openAppOrStore(deepLink, fallback)
                }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FF1B7C] text-white rounded-lg font-semibold hover:bg-[#E6176D] transition-all duration-300 shadow-lg"
              >
                <Apple size={20} />
                Download from Apple App Store
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <Link to="/features" className="text-primary hover:underline">Explore all features</Link> or <Link to="/about" className="text-primary hover:underline">learn how it works</Link> to get started with live video chat and random video calls.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

