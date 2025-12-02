import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Terms = () => {
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

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Chamakz, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of Chamakz for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title, and under 
                  this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or other proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password. You agree 
                  to accept responsibility for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">4. User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Post or transmit any unlawful, threatening, abusive, or harmful content</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Collect or store personal data about other users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">5. Content Ownership</h2>
                <p>
                  You retain ownership of any content you create and share on Chamakz. By posting content, you 
                  grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute 
                  your content on the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">6. Payments and Refunds</h2>
                <p>
                  All payments are processed securely. Virtual gifts and purchases are final and non-refundable 
                  unless required by law. Earnings are subject to our payment terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">7. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice, for conduct that 
                  we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">8. Disclaimer</h2>
                <p>
                  The materials on Chamakz are provided on an 'as is' basis. We make no warranties, expressed or 
                  implied, and hereby disclaim all other warranties including, without limitation, implied warranties 
                  or conditions of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
                <p>
                  In no event shall Chamakz or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or 
                  inability to use the materials on Chamakz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material 
                  changes by posting the new Terms of Service on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:{' '}
                  <a href="mailto:info@chamakz.app" className="text-primary hover:underline">
                    info@chamakz.app
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms

