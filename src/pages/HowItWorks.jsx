import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Download, UserPlus, Video, Users, Radio, 
  Shield, CheckCircle, ArrowRight, Play, Apple,
  Smartphone, Settings, Heart, MessageCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
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
    document.title = "How Chamakz Works - Simple Live Video Chat Guide"
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', 'Learn how to use Chamakz in 3 easy steps. Download, create profile, start video chatting! Simple guide to live streaming and meeting new people.')

    // Add HowTo Schema
    const howToSchema = document.createElement('script')
    howToSchema.type = 'application/ld+json'
    howToSchema.id = 'howitworks-howto-schema'
    howToSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Use Chamakz - Live Video Chat Guide",
      "description": "Step-by-step guide on how to use Chamakz for live video chat and meeting new people",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Download & Sign Up",
          "text": "Download the Chamakz app from the App Store or Google Play. Open the app and sign up using your phone number or email address. The process takes less than 2 minutes.",
          "image": "https://chamakz.app/images/download-step.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Create Your Profile",
          "text": "Add a profile photo, write a brief bio, and set your preferences. You can choose who can see your profile and what information to share. Verification is optional but recommended.",
          "image": "https://chamakz.app/images/profile-step.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Start Connecting",
          "text": "Start making video calls, join group rooms, or go live. Use the search feature to find people with similar interests or let our matching algorithm connect you with compatible users.",
          "image": "https://chamakz.app/images/connect-step.jpg"
        }
      ],
      "totalTime": "PT5M"
    })

    // Add Breadcrumb Schema
    const breadcrumbSchema = document.createElement('script')
    breadcrumbSchema.type = 'application/ld+json'
    breadcrumbSchema.id = 'howitworks-breadcrumb-schema'
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
          "name": "How It Works",
          "item": "https://chamakz.app/how-it-works"
        }
      ]
    })

    // Remove existing schemas if any
    const existingHowTo = document.getElementById('howitworks-howto-schema')
    const existingBreadcrumb = document.getElementById('howitworks-breadcrumb-schema')
    if (existingHowTo) existingHowTo.remove()
    if (existingBreadcrumb) existingBreadcrumb.remove()

    document.head.appendChild(howToSchema)
    document.head.appendChild(breadcrumbSchema)

    return () => {
      const howTo = document.getElementById('howitworks-howto-schema')
      const breadcrumb = document.getElementById('howitworks-breadcrumb-schema')
      if (howTo) howTo.remove()
      if (breadcrumb) breadcrumb.remove()
    }
  }, [])

  const steps = [
    {
      number: 1,
      icon: Download,
      title: 'Download & Sign Up',
      description: 'Getting started with Chamakz is quick and easy. First, <strong>download the app</strong> from the App Store (iOS) or Google Play Store (Android). The app is completely free to download and use. Once installed, open the app and you\'ll be prompted to sign up. You can create an account using your phone number or email address. The <strong>getting started</strong> process takes less than 2 minutes, and you\'ll have access to all basic features immediately. No credit card required, no hidden fees - just download, sign up, and start connecting.',
      image: '📱'
    },
    {
      number: 2,
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'After signing up, the next step in our <strong>video chat guide</strong> is creating your profile. Add a clear profile photo that represents you well - this helps others recognize you and makes connections more meaningful. Write a brief bio that tells people about your interests, hobbies, or what you\'re looking for. You can set your preferences for who can see your profile and contact you. Optional verification (phone or email) adds a badge to your profile and increases trust. Customize your privacy settings to control what information is visible. A complete profile helps you make better connections and improves your <strong>live streaming tutorial</strong> experience.',
      image: '👤'
    },
    {
      number: 3,
      icon: Video,
      title: 'Start Connecting',
      description: 'Now you\'re ready to start connecting! This is where the fun begins in our <strong>how to use</strong> guide. You can <strong>make video calls</strong> with people one-on-one, join group video rooms with multiple participants, or go live and broadcast to an audience. Use the search feature to find people with similar interests, or let our smart matching algorithm connect you with compatible users. You can filter by location, interests, or activity status. Once you find someone interesting, simply tap to start a video call. The <strong>getting started</strong> process is designed to be intuitive - you\'ll be making connections in no time!',
      image: '🎥'
    }
  ]

  const features = [
    {
      icon: Video,
      title: 'Making 1-on-1 Video Calls',
      description: 'To <strong>make video calls</strong> with someone, simply browse profiles or use the search feature to find interesting people. When you find someone you\'d like to connect with, tap their profile and select "Start Video Call." The other person will receive a notification and can accept or decline. Once connected, you\'ll enjoy HD video quality and crystal-clear audio. You can send text messages during the call, use filters and effects, or send virtual gifts. The call continues until either person ends it. This <strong>video chat guide</strong> makes it easy to have meaningful one-on-one conversations.',
      tips: [
        'Ensure good lighting for better video quality',
        'Use headphones to reduce echo',
        'Check your internet connection before calling',
        'Be respectful and follow community guidelines'
      ]
    },
    {
      icon: Users,
      title: 'Joining Group Video Rooms',
      description: 'Group video rooms are perfect for meeting multiple people at once. You can either join an existing public room or create your own private room. To join a room, browse the available public rooms, see how many people are currently in each room, and tap to join. In group rooms, you can see and interact with multiple participants simultaneously. You can raise your hand to speak, use reactions, or send messages in the chat. This feature is great for virtual hangouts, online events, or just meeting new people in a social setting. Our <strong>live streaming tutorial</strong> includes tips for making the most of group interactions.',
      tips: [
        'Mute your microphone when not speaking',
        'Use the chat feature for questions',
        'Respect all participants in the room',
        'Follow the room moderator\'s guidelines'
      ]
    },
    {
      icon: Radio,
      title: 'Going Live',
      description: 'Going live allows you to broadcast to a global audience. Tap the "Go Live" button, add a title and description for your stream, and start broadcasting. Viewers can join your stream, send comments and reactions in real-time, and send virtual gifts. You can see how many people are watching, interact with comments, and build your audience. This is perfect for sharing your talents, hosting Q&A sessions, or just connecting with your community. Our <strong>live streaming tutorial</strong> helps you create engaging content that keeps viewers coming back. You can save your streams, share highlights, and build a following over time.',
      tips: [
        'Plan your content before going live',
        'Engage with viewers through comments',
        'Use good lighting and audio equipment',
        'Promote your streams on social media'
      ]
    }
  ]

  const tips = [
    'Use a stable internet connection for the best video quality',
    'Find a quiet, well-lit space for video calls',
    'Complete your profile to attract more connections',
    'Be authentic and respectful in all interactions',
    'Use the search filters to find people with similar interests',
    'Take advantage of verification to build trust',
    'Report any inappropriate behavior immediately',
    'Customize your privacy settings to your comfort level',
    'Try different features to find what works best for you',
    'Have fun and be yourself - genuine connections are the best!'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">How It Works</li>
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
              How Chamakz Works - Start Video Chatting in Minutes
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Our simple <strong>video chat guide</strong> will help you get started in just 3 easy steps. 
              Learn <strong>how to use</strong> Chamakz for <strong>live streaming</strong>, making video calls, 
              and meeting new people with this comprehensive <strong>getting started</strong> tutorial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to our comprehensive <strong>video chat guide</strong>! This <strong>getting started</strong> 
              tutorial will walk you through everything you need to know about using Chamakz. Whether you're 
              interested in <strong>how to use</strong> our platform for one-on-one video calls, group conversations, 
              or <strong>live streaming</strong>, we've got you covered. Our <strong>live streaming tutorial</strong> 
              and <strong>video chat guide</strong> are designed to make the process simple and enjoyable.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Learning <strong>how to use</strong> Chamakz is straightforward. Our <strong>getting started</strong> 
              process takes just minutes, and you'll be making connections in no time. This <strong>video chat guide</strong> 
              covers everything from downloading the app to <strong>making video calls</strong> and going live. 
              Follow our step-by-step <strong>live streaming tutorial</strong> to master all the features and 
              start building meaningful connections today.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This <strong>video chat guide</strong> provides detailed instructions on <strong>how to use</strong> 
              every feature of Chamakz. From the initial <strong>getting started</strong> steps to advanced 
              <strong>live streaming</strong> techniques, our <strong>live streaming tutorial</strong> ensures 
              you have all the knowledge needed to <strong>make video calls</strong> confidently and create 
              engaging content that connects you with people worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              3 Simple Steps to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Follow our easy guide to start video chatting today
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                >
                  {/* Visual Element */}
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
                      <div className="relative rounded-3xl p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex flex-col items-center justify-center aspect-square">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                          {step.number}
                        </div>
                        <div className="text-8xl mb-6">{step.image}</div>
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="text-white" size={40} />
                        </div>
                        <p className="text-gray-600 font-medium text-center">{step.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl sm:text-4xl font-heading font-bold text-gradient">
                      Step {step.number}: {step.title}
                    </h3>
                    <div 
                      className="text-lg text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Quick Process Flow</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <p className="text-sm font-medium text-center">Download App</p>
                </div>
                <ArrowRight className="text-primary hidden md:block" size={32} />
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <p className="text-sm font-medium text-center">Create Profile</p>
                </div>
                <ArrowRight className="text-primary hidden md:block" size={32} />
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <p className="text-sm font-medium text-center">Start Chatting</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Making Video Calls */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Making Video Calls
            </h2>
            <p className="text-xl text-gray-600">
              Learn how to connect with others through video
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gradient">
                      {feature.title}
                    </h3>
                  </div>
                  <div 
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Pro Tips:</h4>
                    <ul className="space-y-2">
                      {feature.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-3">
                          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Joining Live Streams */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
                Joining Live Streams
              </h2>
              <p className="text-xl text-gray-600">
                Discover and join live broadcasts from creators worldwide
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                To join a live stream, simply browse the "Live Now" section on the home screen. You'll see 
                a list of creators currently broadcasting. Tap on any stream to join and watch. While watching, 
                you can send comments, reactions, and virtual gifts to show your appreciation. The streamer 
                can see your interactions in real-time and may respond to your comments. This creates an 
                engaging, interactive experience for both viewers and creators.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MessageCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Send Comments</h4>
                    <p className="text-sm text-gray-600">Interact with the streamer and other viewers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Heart className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Send Reactions</h4>
                    <p className="text-sm text-gray-600">Show your appreciation with emoji reactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Explained */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
                Safety Features Explained
              </h2>
              <p className="text-xl text-gray-600">
                Built-in tools to keep you safe while connecting
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Block & Report',
                  description: 'Instantly block any user or report inappropriate behavior with a single tap. Our safety team reviews all reports within 24 hours.'
                },
                {
                  icon: Settings,
                  title: 'Privacy Controls',
                  description: 'Control who can see your profile, contact you, or view your activity. Customize your privacy settings to your comfort level.'
                },
                {
                  icon: UserPlus,
                  title: 'User Verification',
                  description: 'Optional verification adds a badge to your profile and helps build trust. Verified users are prioritized in matching.'
                },
                {
                  icon: CheckCircle,
                  title: 'AI Moderation',
                  description: 'Advanced AI continuously monitors content to detect and prevent harassment, spam, and inappropriate behavior automatically.'
                }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/safety"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Learn more about safety
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Best Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-4">
                Tips for Best Experience
              </h2>
              <p className="text-xl text-gray-600">
                Get the most out of your Chamakz experience
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <ul className="grid md:grid-cols-2 gap-4">
                {tips.map((tip, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get Started Free
            </h2>
            <p className="text-xl text-white/90">
              Now that you know how it works, download Chamakz and start connecting with people worldwide!
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
                Need help? Check out our <Link to="/features" className="underline font-semibold">features</Link> or 
                <Link to="/contact" className="underline font-semibold"> contact support</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks


