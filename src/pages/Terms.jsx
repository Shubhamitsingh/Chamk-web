import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'

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
      <SEOHead
        title="Terms of Service | Chamakz – New Friends Live Chat"
        description="Read Chamakz Terms of Service. Understand your rights and responsibilities when using our video chat platform, including user conduct, content policies, and account terms."
        keywords="terms of service, terms and conditions, user agreement, Chamakz terms"
      />
      <section className="py-20">
        <div className="w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-left"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4 text-left">
              Terms of Service – Chamakz
            </h1>
            <p className="text-gray-600 mb-8 text-left">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700 text-left prose-headings:text-left prose-p:text-left prose-ul:text-left prose-li:text-left">
              <section className="text-left">
                <p className="mb-4 text-left">
                  <strong>CHAMAKZ TECHNOLOGIES PRIVATE LIMITED</strong> ("we", "our", "us", "Chamakz") operates the Chamakz mobile application, website, and related services ("Service", "App", "Platform"). These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement between you and Chamakz Technologies Private Limited.
                </p>
                <p className="mb-4 text-left">
                  By accessing, downloading, installing, or using Chamakz, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use Chamakz. These Terms apply to all users, including viewers, creators, streamers, and participants in video calls and group rooms.
                </p>
                <p className="mb-4 text-left">
                  These Terms work together with our Privacy Policy and Community Guidelines. Please read all these documents carefully. By using Chamakz, you also agree to our Privacy Policy and Community Guidelines.
                </p>
                <p className="text-left">
                  We may update these Terms from time to time. We will notify you of material changes through the app, website, or email. Your continued use of Chamakz after changes become effective constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">1. Acceptance of Terms</h2>
                <p className="mb-4 text-left">
                  By accessing and using Chamakz, you accept and agree to be bound by the terms and provisions of this Agreement. If you do not agree to abide by the above, please do not use this Service.
                </p>
                <p className="mb-4 text-left">
                  You represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>You are at least 18 years of age</li>
                  <li>You have the legal capacity to enter into this Agreement</li>
                  <li>You will comply with all applicable laws and regulations</li>
                  <li>All information you provide is accurate and complete</li>
                  <li>You will maintain the accuracy of your information</li>
                </ul>
                <p className="text-left">
                  If you are using Chamakz on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">2. Description of Service</h2>
                <p className="mb-4 text-left">
                  Chamakz is a live video chat platform that enables users to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Connect with other users through one-on-one video calls</li>
                  <li>Participate in random video chat with strangers</li>
                  <li>Join or create group video rooms</li>
                  <li>Live stream content to audiences</li>
                  <li>Send and receive messages, virtual gifts, and other content</li>
                  <li>Use real-time translation features</li>
                  <li>Access other features as we may add from time to time</li>
                </ul>
                <p className="mb-4 text-left">
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">3. Use License</h2>
                <p className="mb-4 text-left">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use Chamakz for your personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Modify, copy, or create derivative works of the Service</li>
                  <li>Use the Service for any commercial purpose without our written consent</li>
                  <li>Attempt to decompile, reverse engineer, or disassemble any software</li>
                  <li>Remove any copyright, trademark, or other proprietary notations</li>
                  <li>Transfer the Service to another person or entity</li>
                  <li>Use the Service in any way that violates applicable laws</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems to access the Service without permission</li>
                </ul>
                <p className="text-left">
                  This license will automatically terminate if you violate any of these restrictions. Upon termination, you must destroy any downloaded materials in your possession.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">4. User Accounts</h2>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.1 Account Registration</h3>
                <p className="mb-4 text-left">
                  To use certain features of Chamakz, you must create an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.2 Account Security</h3>
                <p className="mb-4 text-left">
                  You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account, whether authorized by you or not. We are not liable for any loss or damage arising from your failure to protect your account information.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.3 Account Verification</h3>
                <p className="mb-4 text-left">
                  We may require you to verify your account through email, phone number, or other methods. Verified accounts may receive additional features and benefits. We reserve the right to suspend or terminate unverified accounts.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.4 Multiple Accounts</h3>
                <p className="mb-4 text-left">
                  You may not create multiple accounts to circumvent bans, restrictions, or to violate these Terms. We reserve the right to terminate all accounts associated with a user who violates this provision.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">5. User Conduct and Prohibited Activities</h2>
                <p className="mb-4 text-left">
                  You agree not to engage in any of the following prohibited activities:
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.1 Illegal Activities</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Violate any applicable local, state, national, or international law</li>
                  <li>Engage in fraud, scams, or deceptive practices</li>
                  <li>Distribute malware, viruses, or harmful code</li>
                  <li>Engage in hacking, phishing, or unauthorized access</li>
                  <li>Promote or facilitate illegal activities</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.2 Harmful Content</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Post, transmit, or share unlawful, threatening, abusive, or harmful content</li>
                  <li>Share content that promotes violence, self-harm, or suicide</li>
                  <li>Distribute false or misleading information that could cause harm</li>
                  <li>Share content that violates others' rights or dignity</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.3 Harassment and Abuse</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Harass, bully, threaten, or intimidate other users</li>
                  <li>Engage in hate speech or discrimination</li>
                  <li>Stalk or repeatedly contact users who have blocked you</li>
                  <li>Impersonate any person or entity</li>
                  <li>Create accounts to harass or abuse others</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.4 Prohibited Content</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Sexually explicit content, nudity, or adult material</li>
                  <li>Content involving minors in any inappropriate context</li>
                  <li>Violence, graphic content, or content promoting harm</li>
                  <li>Spam, scams, or fraudulent content</li>
                  <li>Copyright-infringing content without authorization</li>
                  <li>Personal information of others without consent</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.5 Service Interference</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems (bots, scrapers) without permission</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                  <li>Overload, flood, or spam the Service</li>
                  <li>Collect or store personal data about other users without consent</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">6. Content Ownership and License</h2>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.1 Your Content</h3>
                <p className="mb-4 text-left">
                  You retain ownership of any content you create, upload, post, or share on Chamakz ("Your Content"). You are solely responsible for Your Content and the consequences of posting it.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.2 License to Chamakz</h3>
                <p className="mb-4 text-left">
                  By posting, uploading, or sharing content on Chamakz, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Use, reproduce, distribute, and display Your Content on the Platform</li>
                  <li>Modify, adapt, and create derivative works of Your Content</li>
                  <li>Use Your Content for promotional and marketing purposes</li>
                  <li>Store and transmit Your Content through our systems</li>
                </ul>
                <p className="mb-4 text-left">
                  This license continues even after you stop using Chamakz, except for content you delete, which we will remove within a reasonable time.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.3 Content Standards</h3>
                <p className="mb-4 text-left">
                  Your Content must:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Comply with these Terms and our Community Guidelines</li>
                  <li>Not infringe on any third-party rights (copyright, trademark, privacy, etc.)</li>
                  <li>Be accurate and not misleading</li>
                  <li>Not violate any applicable laws</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.4 Content Removal</h3>
                <p className="mb-4 text-left">
                  We reserve the right to remove, edit, or refuse to display any content that violates these Terms or our policies, without prior notice. We are not obligated to monitor all content but may do so at our discretion.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">7. Payments, Virtual Items, and Refunds</h2>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">7.1 Virtual Items</h3>
                <p className="mb-4 text-left">
                  Chamakz may offer virtual items, gifts, coins, or other digital goods ("Virtual Items") for purchase. Virtual Items have no real-world value and cannot be exchanged for cash or refunded except as required by law.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">7.2 Payments</h3>
                <p className="mb-4 text-left">
                  All payments are processed securely through third-party payment processors. You agree to provide accurate payment information and authorize us to charge your payment method for purchases.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Prices are displayed in your local currency when available</li>
                  <li>Prices may vary by region</li>
                  <li>We reserve the right to change prices at any time</li>
                  <li>You are responsible for any taxes applicable to your purchases</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">7.3 Refunds</h3>
                <p className="mb-4 text-left">
                  Virtual Items and purchases are final and non-refundable unless required by applicable law or as otherwise specified. If you believe you are entitled to a refund, contact us at info@chamakz.app with details of your purchase.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">7.4 Earnings and Payouts</h3>
                <p className="mb-4 text-left">
                  If you earn money through Chamakz (e.g., as a creator or streamer), earnings are subject to our payment terms and conditions, including minimum payout thresholds, processing fees, and tax reporting requirements. We reserve the right to withhold payments if you violate these Terms.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">8. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">8.1 Our Intellectual Property</h3>
                <p className="mb-4 text-left">
                  The Service, including its design, features, functionality, logos, trademarks, and content (except user-generated content), is owned by Chamakz Technologies Private Limited and protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">8.2 Copyright Infringement</h3>
                <p className="mb-4 text-left">
                  If you believe your copyright has been infringed, please contact us at info@chamakz.app with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Description of the copyrighted work</li>
                  <li>Location of the infringing content on Chamakz</li>
                  <li>Your contact information</li>
                  <li>Statement of good faith belief that use is unauthorized</li>
                  <li>Statement that information is accurate and you are authorized to act</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">8.3 Trademarks</h3>
                <p className="mb-4 text-left">
                  "Chamakz" and related logos are trademarks of Chamakz Technologies Private Limited. You may not use our trademarks without our prior written consent.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">9. Termination</h2>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">9.1 Termination by You</h3>
                <p className="mb-4 text-left">
                  You may terminate your account at any time by contacting us or using the account deletion feature in the app settings. Upon termination, your right to use the Service will immediately cease.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">9.2 Termination by Us</h3>
                <p className="mb-4 text-left">
                  We may terminate or suspend your account immediately, without prior notice, for conduct that we believe:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Violates these Terms of Service</li>
                  <li>Violates our Community Guidelines or Privacy Policy</li>
                  <li>Is harmful to other users, us, or third parties</li>
                  <li>Violates applicable laws</li>
                  <li>Involves fraud or illegal activity</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">9.3 Effect of Termination</h3>
                <p className="mb-4 text-left">
                  Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Your right to use the Service will immediately cease</li>
                  <li>We may delete your account and content</li>
                  <li>You will lose access to Virtual Items and purchases</li>
                  <li>We may retain certain information as required by law or for safety purposes</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">10. Disclaimer of Warranties</h2>
                <p className="mb-4 text-left">
                  The materials on Chamakz are provided on an 'as is' and 'as available' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Implied warranties or conditions of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property</li>
                  <li>Accuracy, reliability, or completeness of content</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security or freedom from viruses or harmful code</li>
                </ul>
                <p className="text-left">
                  We do not warrant that the Service will meet your requirements or be available at all times.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">11. Limitation of Liability</h2>
                <p className="mb-4 text-left">
                  To the maximum extent permitted by applicable law, in no event shall Chamakz Technologies Private Limited, its officers, directors, employees, agents, or suppliers be liable for any damages (including, without limitation):
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Damages for loss of data or profit</li>
                  <li>Business interruption</li>
                  <li>Personal injury or property damage</li>
                  <li>Loss of goodwill or reputation</li>
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                </ul>
                <p className="mb-4 text-left">
                  Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid to us in the 12 months preceding the claim, or $100, whichever is greater.
                </p>
                <p className="text-left">
                  Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">12. Indemnification</h2>
                <p className="mb-4 text-left">
                  You agree to indemnify, defend, and hold harmless Chamakz Technologies Private Limited, its officers, directors, employees, agents, and suppliers from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another</li>
                  <li>Your Content</li>
                  <li>Your violation of any applicable laws</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">13. Third-Party Services and Links</h2>
                <p className="mb-4 text-left">
                  Chamakz may contain links to third-party websites, services, or content. We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>The content, privacy practices, or terms of third-party services</li>
                  <li>Any transactions between you and third parties</li>
                  <li>Any damage or loss caused by third-party services</li>
                </ul>
                <p className="mb-4 text-left">
                  Your use of third-party services is at your own risk and subject to their terms and conditions.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">14. Dispute Resolution</h2>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">14.1 Governing Law</h3>
                <p className="mb-4 text-left">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">14.2 Arbitration</h3>
                <p className="mb-4 text-left">
                  Any dispute arising out of or relating to these Terms shall be referred for final resolution by arbitration under the Arbitration and Conciliation Act, 1996. The Tribunal shall consist of three (3) arbitrators. Each party shall appoint one (1) arbitrator, and the two arbitrators shall appoint the third arbitrator. The arbitration proceedings shall be held at Bangalore. The language to be used in the arbitral proceedings shall be English.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">14.3 Jurisdiction</h3>
                <p className="mb-4 text-left">
                  Subject to the arbitration clause above, the Courts at Bangalore shall have exclusive jurisdiction over any disputes arising from these Terms.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">15. Changes to Terms</h2>
                <p className="mb-4 text-left">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Posting the new Terms of Service on this page</li>
                  <li>Sending notifications through the app</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Updating the "Last Updated" date</li>
                </ul>
                <p className="mb-4 text-left">
                  Your continued use of Chamakz after changes become effective constitutes acceptance of the updated Terms. If you do not agree with the updated Terms, you must stop using Chamakz.
                </p>
                <p className="text-left">
                  Please review these Terms regularly to stay informed about our policies.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">16. Severability</h2>
                <p className="mb-4 text-left">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">17. Entire Agreement</h2>
                <p className="mb-4 text-left">
                  These Terms, together with our Privacy Policy and Community Guidelines, constitute the entire agreement between you and Chamakz regarding the Service and supersede all prior agreements and understandings.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">18. Waiver</h2>
                <p className="mb-4 text-left">
                  Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by us.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">19. Assignment</h2>
                <p className="mb-4 text-left">
                  You may not assign or transfer these Terms or your account without our prior written consent. We may assign or transfer these Terms, in whole or in part, without restriction, including in connection with a merger, acquisition, or sale of assets.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">20. Contact Information</h2>
                <p className="mb-4 text-left">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mb-4 text-left">
                  📩 Email:{' '}
                  <a href="mailto:info@chamakz.app" className="text-primary hover:underline font-semibold">
                    info@chamakz.app
                  </a>
                </p>
                <p className="mb-4 text-left">
                  <strong>Chamakz Technologies Private Limited</strong><br />
                  Bangalore, India
                </p>
                <p className="text-left">
                  We will respond to your inquiries within a reasonable time frame.
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
