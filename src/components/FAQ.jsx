import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I verify my profile?",
      answer: "To ensure safety and authenticity, you can verify your profile by uploading a selfie or ID document. Once reviewed by our team, your profile will display a verified badge, helping others know you are a real user. Verification typically takes 24-48 hours."
    },
    {
      question: "How can I match up with someone?",
      answer: "Chamakz offers smart matchmaking based on your preferences — such as region, language, or interests. You can also choose random matching to meet new people and explore different cultures. Simply set your preferences in the app settings and start connecting!"
    },
    {
      question: "How can I have a premium account?",
      answer: "You can upgrade to Chamakz Premium through the app's settings or our website. Premium unlocks advanced features like exclusive filters, ad-free experience, faster matching, higher visibility to other users, and priority customer support. Premium subscriptions start at just ₹99/month."
    },
    {
      question: "Is my chat private and secure?",
      answer: "Yes, absolutely. Chamakz prioritizes user privacy with features like blurred video start, reporting/blocking tools, end-to-end encryption, and strict content moderation to keep conversations safe. We never share your personal information with third parties."
    },
    {
      question: "Can I earn money on Chamakz?",
      answer: "Yes! Chamakz offers multiple ways to earn. As a creator, you can receive virtual gifts during live streams, participate in live battles, and build your fanbase. We offer industry-leading 70% commission rates with instant withdrawals to your bank account or digital wallet."
    },
    {
      question: "What devices are supported?",
      answer: "Chamakz is available on both iOS and Android devices. The app works on iOS 12.0+ and Android 6.0+. You can download it from the App Store or Google Play Store. The app is optimized for all screen sizes and works smoothly on 3G, 4G, and 5G networks."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary/10 rounded-full mb-4">
            <HelpCircle className="text-primary" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about using Chamakz
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-primary" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Still have questions? Contact our support team
            <ChevronDown className="rotate-[-90deg]" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
