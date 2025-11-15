import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                <p>
                  Welcome to Chamak. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you use 
                  our livestreaming platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email, phone number)</li>
                  <li>Profile information and content you create</li>
                  <li>Payment and transaction information</li>
                  <li>Device information and usage data</li>
                  <li>Location data (with your permission)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our platform and hold 
                  certain information. You can instruct your browser to refuse all cookies or to indicate when 
                  a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">7. Third-Party Services</h2>
                <p>
                  Our platform may contain links to third-party websites or services. We are not responsible 
                  for the privacy practices of these third parties. We encourage you to read their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:{' '}
                  <a href="mailto:privacy@chamak.app" className="text-primary hover:underline">
                    privacy@chamak.app
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

