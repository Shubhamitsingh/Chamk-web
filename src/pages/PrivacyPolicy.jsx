import { useEffect } from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
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
              Privacy Policy – Chamakz
            </h1>
            <p className="text-gray-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <p className="mb-4">
                  <strong>CHAMAKZ TECHNOLOGIES PRIVATE LIMITED</strong> ("we", "our", "us") offers personalized content and services to all users through our mobile application Chamakz.
                  When you access or use Chamakz, we may collect, use, store, and share your information as described in this Privacy Policy.
                </p>
                <p>
                  Please read this Privacy Policy carefully to understand how we handle your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">1. Application Scope of this Privacy Policy</h2>
                <p className="mb-4">
                  By using Chamakz, you agree that we may access, collect, store, use, and share your information as described in this Privacy Policy.
                  If you do not agree with this Privacy Policy, please do not use Chamakz.
                </p>
                <p className="mb-4">
                  This Privacy Policy forms part of the Chamakz Terms of Service. Any terms used here have the same meaning as defined in the Terms of Service.
                </p>
                <p className="mb-4">
                  We may update or revise this Privacy Policy from time to time. If material changes are made, we will notify you through the app, website, or email. By continuing to use Chamakz after changes become effective, you agree to the updated policy.
                </p>
                <p>
                  Chamakz may contain links to third-party websites or services. This Privacy Policy does not apply to third-party services. We are not responsible for how third parties use your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">2. Information You Provide and We Collect</h2>
                <p className="mb-4">
                  To provide Chamakz services, we may access, collect, store, and use the following information:
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3">2.1 Information You Provide While Using Chamakz</h3>
                
                <p className="font-semibold mb-2">Account Information:</p>
                <p className="mb-4">
                  Name, gender, date of birth, age, city/area, profile photo, social media account information, and any tags or details you add.
                </p>
                
                <p className="font-semibold mb-2">Profile Information (visible to other users):</p>
                <p className="mb-4">
                  Photos, gender, city/area, and any content you upload.
                </p>
                
                <p className="font-semibold mb-2">Usage Information:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Device and connection details</li>
                  <li>IP address</li>
                  <li>Device capability, bandwidth</li>
                  <li>Page views and interaction statistics</li>
                  <li>Network type</li>
                  <li>Geographical usage data</li>
                </ul>
                
                <p className="font-semibold mb-2">Technical Information:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Mobile carrier</li>
                  <li>IP address</li>
                  <li>Location/country/region/time zone</li>
                  <li>Device version & identification number</li>
                  <li>Operating system</li>
                  <li>App settings</li>
                  <li>Likes, dislikes, and in-app interactions</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3">2.2 Sensitive Personal Information</h3>
                <p className="mb-4">
                  To enable certain features (e.g., live streaming, video calling), we may request access to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Microphone</strong> – for audio input during calls.</li>
                  <li><strong>Camera</strong> – for profile photos and real-time video.</li>
                  <li><strong>Location</strong> – to show your region for personalized content.</li>
                </ul>
                <p className="mb-4">
                  We access these only with your explicit permission.
                </p>
                <p className="mb-4">
                  We do not use sensitive personal information for marketing without your consent.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3">2.3 Children's Information</h3>
                <p className="mb-4">
                  Chamakz is not intended for users under 18 years of age.
                  We do not knowingly collect personal data from anyone under 18.
                  If we discover such data, we will delete it immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We may use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>To provide and operate Chamakz services (current and future features).</li>
                  <li>To improve and personalize your app experience, including content recommendations.</li>
                  <li>To respond to inquiries and provide customer support.</li>
                  <li>To analyze usage trends and app performance.</li>
                  <li>To maintain safety and prevent misuse.</li>
                  <li>To verify identity and prevent fraud/illegal activity.</li>
                  <li>To enforce our Terms of Service and policies.</li>
                </ul>
                <p className="mb-4">
                  Any messages, photos, videos, or content you share in Chamakz may be stored on our servers.
                  If you share them publicly or with other users, we may not be able to remove them once distributed.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3">3.2 Transfer & Storage of Information</h3>
                <p className="mb-4">
                  Our servers may operate in multiple countries.
                  Your information may be stored or processed outside your jurisdiction.
                </p>
                <p className="mb-4">
                  By using Chamakz, you consent to this data transfer.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3">3.3 Sharing of Information</h3>
                <p className="font-semibold mb-2">A. Sharing within Chamakz</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Public profile information is visible to any user.</li>
                  <li>Your online status or activity may be visible to others.</li>
                </ul>

                <p className="font-semibold mb-2">B. Sharing with Third-Party Partners</p>
                <p className="mb-4">You agree that we may share your information with:</p>
                
                <p className="mb-2"><strong>Analytics Partners</strong></p>
                <p className="mb-4">Shared in aggregated or anonymous form for research and performance analysis.</p>
                
                <p className="mb-2"><strong>Service Providers</strong></p>
                <p className="mb-4">Companies that help us operate our services (hosting, analytics, communication tools). They may access your data only to perform tasks on our behalf.</p>
                
                <p className="mb-2"><strong>Law Enforcement</strong></p>
                <p className="mb-4">If required by law, legal processes, or to protect our users or platform.</p>
                
                <p className="mb-2"><strong>New Owners (Business Transfer)</strong></p>
                <p className="mb-4">If Chamakz is acquired, merged, or reorganized, your data may be transferred to the new operator.</p>
                
                <p className="mb-4">
                  <strong>We never sell personal information to third parties.</strong>
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3">3.4 Security Measures</h3>
                <p className="mb-4">
                  We use administrative, technical, and physical safeguards to protect your data.
                  However, no system is 100% secure. If a data breach occurs, we will notify you as required by law.
                </p>
                <p>
                  When sharing information with third parties, we ensure they follow confidentiality and security obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">4. Accessing & Managing Your Information</h2>
                <p className="mb-4">
                  You may access and edit your profile any time.
                </p>
                <p className="mb-4">
                  If you believe information on your Chamakz profile is incorrect, you may request correction by contacting us.
                </p>
                <p className="mb-4">If you delete your account:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You will lose access to your data, messages, and history.</li>
                  <li>Some content may remain visible if shared with other users.</li>
                  <li>We may retain data as required by law (fraud prevention, disputes, legal compliance).</li>
                </ul>
                <p>
                  Requests that are technically impossible or legally restricted may not be fulfilled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or privacy matters, you may contact us at:
                </p>
                <p className="mt-4">
                  📩 Email:{' '}
                  <a href="mailto:info@chamakz.app" className="text-primary hover:underline font-semibold">
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

export default PrivacyPolicy

