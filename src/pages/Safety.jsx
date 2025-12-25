import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, Lock, Eye, AlertTriangle, Ban, CheckCircle, 
  Users, FileText, Mail, MessageCircle, UserCheck, 
  Key, Server, Clock, Heart
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Safety = () => {
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
    document.title = "Safety Guidelines - Secure Video Chat Platform | Chamakz"
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', 'Your safety is our priority. Learn about Chamakz safety features, community guidelines, privacy protection, and how we keep video chats secure.')

    // Add FAQPage Schema
    const faqSchema = document.createElement('script')
    faqSchema.type = 'application/ld+json'
    faqSchema.id = 'safety-faq-schema'
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Chamakz ensure safe video chat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chamakz uses AI-powered moderation, user verification, end-to-end encryption, and 24/7 monitoring to ensure a safe video chat environment. Our secure platform includes content filtering, automated abuse detection, and human review teams."
          }
        },
        {
          "@type": "Question",
          "name": "How can I report abuse or inappropriate behavior?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can report abuse by clicking the report button on any user profile or during a video call. You can also block users immediately. All reports are reviewed by our safety team within 24 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data protected on Chamakz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we use end-to-end encryption for all video calls and messages. Your personal information is protected according to our privacy policy. We never share your data with third parties without consent."
          }
        },
        {
          "@type": "Question",
          "name": "What are the age restrictions for using Chamakz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chamakz is intended for users aged 13 and above. Users under 18 should have parental supervision. We do not knowingly collect personal information from children under 13."
          }
        },
        {
          "@type": "Question",
          "name": "How does user verification work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer optional phone number and email verification. Verified users receive a badge and are prioritized in matching. This helps create a more secure platform and reduces fake accounts."
          }
        }
      ]
    })

    // Add Organization Schema
    const orgSchema = document.createElement('script')
    orgSchema.type = 'application/ld+json'
    orgSchema.id = 'safety-org-schema'
    orgSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Chamakz",
      "url": "https://chamakz.app",
      "logo": "https://chamakz.app/images/logopink.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "info@chamakz.app",
        "availableLanguage": ["English", "Hindi", "Tamil", "Telugu"]
      },
      "sameAs": [
        "https://chamakz.app"
      ]
    })

    // Remove existing schemas if any
    const existingFaq = document.getElementById('safety-faq-schema')
    const existingOrg = document.getElementById('safety-org-schema')
    if (existingFaq) existingFaq.remove()
    if (existingOrg) existingOrg.remove()

    document.head.appendChild(faqSchema)
    document.head.appendChild(orgSchema)

    return () => {
      const faq = document.getElementById('safety-faq-schema')
      const org = document.getElementById('safety-org-schema')
      if (faq) faq.remove()
      if (org) org.remove()
    }
  }, [])

  const safetyFeatures = [
    {
      icon: Shield,
      title: 'AI-Powered Moderation',
      description: 'Advanced artificial intelligence continuously monitors all video chats and content to detect and prevent inappropriate behavior, harassment, and abuse in real-time.'
    },
    {
      icon: UserCheck,
      title: 'User Verification',
      description: 'Optional phone number and email verification helps ensure authentic users. Verified accounts receive badges and are prioritized in matching for a safer experience.'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All video calls and messages are protected with end-to-end encryption, ensuring your conversations remain private and secure from unauthorized access.'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Our dedicated safety team monitors the platform around the clock, reviewing reports and taking immediate action against violations of our community guidelines.'
    },
    {
      icon: Ban,
      title: 'Instant Blocking',
      description: 'Block any user instantly with a single click. Blocked users cannot contact you, view your profile, or interact with you in any way.'
    },
    {
      icon: AlertTriangle,
      title: 'Content Filtering',
      description: 'Automated content filtering detects and removes inappropriate content, spam, and harmful material before it reaches users.'
    }
  ]

  const safetyTips = [
    'Never share personal information like your address, phone number, or financial details with strangers',
    'Use a strong, unique password for your account and enable two-factor authentication if available',
    'Trust your instincts - if someone makes you uncomfortable, end the conversation and block them',
    'Report any suspicious behavior, harassment, or inappropriate content immediately',
    'Keep your profile information minimal - only share what you\'re comfortable with others knowing',
    'Be cautious of users who ask for money, personal favors, or try to move conversations off-platform',
    'Verify the identity of users you plan to meet in person through multiple video calls first',
    'Don\'t share explicit photos or videos - they can be screenshotted and shared without your consent',
    'Use the platform\'s safety features like blocking and reporting - they\'re there to protect you',
    'Remember that you can end any conversation at any time - your comfort and safety come first'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Safety & Guidelines</li>
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
            <div className="w-20 h-20 bg-gradient-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary" size={48} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gradient mb-4">
              Your Safety is Our Top Priority
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              At Chamakz, we're committed to providing a <strong>safe video chat</strong> experience. 
              Our <strong>secure platform</strong> uses advanced technology and comprehensive 
              <strong>community guidelines</strong> to protect all users and ensure a positive environment 
              for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Chamakz is dedicated to creating the safest possible <strong>safe video chat</strong> environment 
              for all users. Our comprehensive <strong>community guidelines</strong> and advanced safety features 
              work together to ensure that every interaction on our <strong>secure platform</strong> is respectful, 
              safe, and enjoyable. We understand that <strong>user safety</strong> is paramount when connecting 
              with new people online, which is why we've implemented multiple layers of protection.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our <strong>privacy protection</strong> measures include end-to-end encryption for all video calls 
              and messages, ensuring that your conversations remain confidential. We never share your personal 
              information with third parties without your explicit consent. Our <strong>secure platform</strong> 
              also includes AI-powered content moderation that continuously monitors for inappropriate behavior, 
              helping to prevent harassment and abuse before it occurs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you need to <strong>report abuse</strong>, our system makes it easy and fast. You can report 
              any user or content that violates our <strong>community guidelines</strong> with just a few clicks. 
              Our dedicated safety team reviews all reports within 24 hours and takes appropriate action, which 
              may include warnings, temporary suspensions, or permanent bans. We take every report seriously and 
              are committed to maintaining a <strong>safe video chat</strong> environment for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your <strong>user safety</strong> is enhanced through features like instant blocking, user verification, 
              and comprehensive <strong>privacy protection</strong> settings. You have complete control over who can 
              contact you and what information is visible on your profile. Our <strong>secure platform</strong> gives 
              you the tools you need to have a positive experience while maintaining your privacy and security at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Safety Features */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Platform Safety Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology protecting you at every step
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {safetyFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-primary/10 rounded-xl flex items-center justify-center mb-6">
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

      {/* Community Guidelines */}
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
                Community Guidelines
              </h2>
              <p className="text-xl text-gray-600">
                Rules and expectations for a positive community
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Heart className="text-primary" size={28} />
                  Be Respectful
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Treat all users with kindness, respect, and dignity. Harassment, bullying, hate speech, 
                  discrimination, or any form of abusive behavior will not be tolerated. We celebrate diversity 
                  and expect all members of our community to do the same.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="text-primary" size={28} />
                  Keep It Safe
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Do not share personal information like your address, phone number, email, or financial details. 
                  Never engage in illegal activities or create content that could harm others. Report any 
                  suspicious behavior immediately.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Ban className="text-primary" size={28} />
                  Prohibited Content
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following content is strictly prohibited and will result in immediate account suspension:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Violence, graphic content, or content promoting harm</li>
                  <li>Sexually explicit content, nudity, or adult material</li>
                  <li>Hate speech, discrimination, or harassment</li>
                  <li>Illegal activities or content violating laws</li>
                  <li>Spam, scams, or fraudulent activities</li>
                  <li>Copyright infringement or unauthorized content</li>
                  <li>Sharing personal information of others without consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="text-primary" size={28} />
                  Age Restrictions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chamakz is intended for users aged 13 and above. Users under 18 should have parental supervision. 
                  We do not knowingly collect personal information from children under 13. If you believe a user 
                  is underage, please report them immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Data Protection */}
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
                Privacy & Data Protection
              </h2>
              <p className="text-xl text-gray-600">
                Your privacy is protected with industry-leading security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Lock,
                  title: 'End-to-End Encryption',
                  description: 'All video calls and messages are encrypted end-to-end, meaning only you and the person you\'re communicating with can see the content.'
                },
                {
                  icon: Key,
                  title: 'Data Security',
                  description: 'Your personal information is stored securely using industry-standard encryption and security protocols. We never sell your data to third parties.'
                },
                {
                  icon: Eye,
                  title: 'Privacy Controls',
                  description: 'You have complete control over your privacy settings. Choose who can see your profile, contact you, and view your activity.'
                },
                {
                  icon: Server,
                  title: 'Secure Servers',
                  description: 'Our servers are protected with advanced security measures, regular security audits, and compliance with international data protection standards.'
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
                    <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
              <p className="text-gray-700 mb-4">
                For detailed information about how we protect your data, please review our
              </p>
              <Link 
                to="/privacy-policy" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <FileText size={20} />
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting & Blocking */}
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
                Reporting & Blocking
              </h2>
              <p className="text-xl text-gray-600">
                Easy tools to protect yourself and help keep the community safe
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">How to Report Abuse</h3>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>Click on the user's profile or during a video call</li>
                  <li>Select "Report" from the menu</li>
                  <li>Choose the reason for reporting (harassment, spam, inappropriate content, etc.)</li>
                  <li>Add any additional details that might help our team</li>
                  <li>Submit the report - our team will review it within 24 hours</li>
                </ol>
                <p className="mt-6 text-gray-600">
                  All reports are confidential. You can also email us directly at{' '}
                  <a href="mailto:info@chamakz.app" className="text-primary hover:underline font-semibold">
                    info@chamakz.app
                  </a>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Ban className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">How to Block Users</h3>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>Open the user's profile or tap during a video call</li>
                  <li>Select "Block User" from the options menu</li>
                  <li>Confirm that you want to block this user</li>
                  <li>The user will be immediately blocked and cannot contact you</li>
                  <li>You can unblock users anytime from your settings</li>
                </ol>
                <p className="mt-6 text-gray-600">
                  Blocked users cannot see your profile, send you messages, or match with you. 
                  This action is immediate and permanent until you choose to unblock.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
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
                Safety Tips for Users
              </h2>
              <p className="text-xl text-gray-600">
                Best practices to stay safe while using Chamakz
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <ul className="space-y-4">
                {safetyTips.map((tip, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-gradient-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-primary" size={20} />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{tip}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-4">
                Your Trust Matters
              </h2>
              <p className="text-xl text-gray-600">
                We're committed to transparency and your safety
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/privacy-policy"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <FileText className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading font-bold mb-2">Privacy Policy</h3>
                <p className="text-sm text-gray-600">Read our complete privacy policy</p>
              </Link>

              <Link
                to="/terms"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <FileText className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading font-bold mb-2">Terms of Service</h3>
                <p className="text-sm text-gray-600">Review our terms and conditions</p>
              </Link>

              <Link
                to="/contact"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <Mail className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading font-bold mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">Get help from our support team</p>
              </Link>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
              <Clock className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-heading font-bold mb-3">24/7 Safety Support</h3>
              <p className="text-gray-700 mb-4">
                Our safety team is available around the clock to assist you. If you have any safety concerns 
                or need immediate help, don't hesitate to reach out.
              </p>
              <a
                href="mailto:info@chamakz.app"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Mail size={20} />
                info@chamakz.app
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Safety


