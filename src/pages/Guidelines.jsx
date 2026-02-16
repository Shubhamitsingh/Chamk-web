import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'

const Guidelines = () => {
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
        title="Community Guidelines | Chamakz – New Friends Live Chat"
        description="Community guidelines and rules for Chamakz users. Learn about acceptable behavior, prohibited content, and how to report violations."
        keywords="community guidelines, rules, safety, moderation, Chamakz guidelines"
      />
      <section className="py-20">
        <div className="w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-left"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4 text-left">
              Community Guidelines – Chamakz
            </h1>
            <p className="text-gray-600 mb-8 text-left">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700 text-left prose-headings:text-left prose-p:text-left prose-ul:text-left prose-li:text-left">
              <section className="text-left">
                <p className="mb-4 text-left">
                  <strong>CHAMAKZ TECHNOLOGIES PRIVATE LIMITED</strong> ("we", "our", "us", "Chamakz") is committed to creating a safe, positive, and inclusive community for all users. These Community Guidelines ("Guidelines") help ensure that everyone can enjoy our platform while respecting each other's rights and dignity.
                </p>
                <p className="mb-4 text-left">
                  By using Chamakz, you agree to comply with these Guidelines. These Guidelines apply to all users of Chamakz, including viewers, creators, streamers, and participants in video calls and group rooms. Violation of these Guidelines may result in content removal, account suspension, or permanent ban.
                </p>
                <p className="mb-4 text-left">
                  These Guidelines work together with our Terms of Service and Privacy Policy. Please read all these documents carefully. If you do not agree with these Guidelines, please do not use Chamakz.
                </p>
                <p className="text-left">
                  We may update these Guidelines from time to time. We will notify you of material changes through the app, website, or email. Your continued use of Chamakz after changes become effective constitutes acceptance of the updated Guidelines.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">1. Be Respectful and Kind</h2>
                <p className="mb-4 text-left">
                  Treat all users with kindness, respect, and dignity. We celebrate diversity and expect all members of our community to do the same.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">1.1 Harassment and Bullying</h3>
                <p className="mb-4 text-left">
                  The following behaviors are strictly prohibited:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Harassment, bullying, or intimidation of any kind</li>
                  <li>Threatening, stalking, or targeting individuals</li>
                  <li>Repeated unwanted contact or messages</li>
                  <li>Encouraging others to harass or bully</li>
                  <li>Creating accounts to circumvent blocks or bans</li>
                  <li>Sharing private conversations without consent</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">1.2 Hate Speech and Discrimination</h3>
                <p className="mb-4 text-left">
                  We do not tolerate hate speech or discrimination based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Race, ethnicity, or national origin</li>
                  <li>Religion or religious beliefs</li>
                  <li>Gender, gender identity, or sexual orientation</li>
                  <li>Age, disability, or medical condition</li>
                  <li>Political affiliation</li>
                  <li>Any other protected characteristic</li>
                </ul>
                <p className="mb-4 text-left">
                  Content that promotes or glorifies violence against individuals or groups based on these characteristics is strictly prohibited.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">1.3 Respectful Communication</h3>
                <p className="mb-4 text-left">
                  When engaging in video calls, live streams, or group rooms:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Use appropriate language and tone</li>
                  <li>Respect others' opinions, even if you disagree</li>
                  <li>Do not interrupt or talk over others</li>
                  <li>Be mindful of cultural differences</li>
                  <li>Give others space to express themselves</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">2. Keep It Safe</h2>
                <p className="mb-4 text-left">
                  Your safety and the safety of others is our top priority. Follow these safety guidelines:
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.1 Personal Information</h3>
                <p className="mb-4 text-left">
                  <strong>Do NOT share:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Your full name, address, or location</li>
                  <li>Phone number, email address, or social media handles</li>
                  <li>Financial information (bank accounts, credit cards, payment details)</li>
                  <li>Passwords or account credentials</li>
                  <li>Government-issued ID numbers</li>
                  <li>School or workplace information</li>
                  <li>Personal information of others without their consent</li>
                </ul>
                <p className="mb-4 text-left">
                  Sharing personal information puts you and others at risk. If someone asks for your personal information, do not share it and report them immediately.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.2 Illegal Activities</h3>
                <p className="mb-4 text-left">
                  Do not use Chamakz to engage in or promote illegal activities, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Drug dealing, drug use, or promotion of illegal substances</li>
                  <li>Human trafficking or exploitation</li>
                  <li>Weapons trading or illegal weapon promotion</li>
                  <li>Fraud, scams, or financial crimes</li>
                  <li>Identity theft or impersonation</li>
                  <li>Copyright infringement or piracy</li>
                  <li>Any activity that violates local, state, national, or international laws</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.3 Harmful Content</h3>
                <p className="mb-4 text-left">
                  Do not create, share, or promote content that could harm others:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Content that encourages self-harm or suicide</li>
                  <li>Dangerous challenges or stunts</li>
                  <li>Misinformation that could cause harm</li>
                  <li>Medical advice without proper qualifications</li>
                  <li>Content that could endanger minors</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">3. Prohibited Content</h2>
                <p className="mb-4 text-left">
                  The following types of content are strictly prohibited on Chamakz:
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.1 Sexual Content</h3>
                <p className="mb-4 text-left">
                  Prohibited sexual content includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Nudity or partial nudity</li>
                  <li>Sexually explicit content or pornography</li>
                  <li>Sexual acts or simulations</li>
                  <li>Sexual solicitation or requests for sexual content</li>
                  <li>Sexually suggestive content involving minors</li>
                  <li>Content that sexualizes minors</li>
                </ul>
                <p className="mb-4 text-left">
                  <strong>Note:</strong> Chamakz is not a dating or adult content platform. Any sexual content will result in immediate account termination.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.2 Violence and Graphic Content</h3>
                <p className="mb-4 text-left">
                  Prohibited violent content includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Graphic violence or gore</li>
                  <li>Content depicting real violence or harm</li>
                  <li>Threats of violence against individuals or groups</li>
                  <li>Content glorifying violence</li>
                  <li>Animal cruelty or abuse</li>
                  <li>Disturbing or graphic imagery</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.3 Spam and Scams</h3>
                <p className="mb-4 text-left">
                  Prohibited spam and scam activities include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Repetitive, unwanted, or unsolicited messages</li>
                  <li>Promotional content without permission</li>
                  <li>Phishing attempts or fake websites</li>
                  <li>Pyramid schemes or get-rich-quick scams</li>
                  <li>Fake giveaways or contests</li>
                  <li>Impersonation of Chamakz or other brands</li>
                  <li>Fake news or misinformation</li>
                  <li>Clickbait or misleading content</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.4 Copyright and Intellectual Property</h3>
                <p className="mb-4 text-left">
                  Do not share content that infringes on intellectual property rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Copyrighted music, videos, or images without permission</li>
                  <li>Pirated content or links to pirated content</li>
                  <li>Trademark infringement</li>
                  <li>Unauthorized use of others' content</li>
                </ul>
                <p className="mb-4 text-left">
                  If you believe your copyright has been infringed, please contact us at info@chamakz.app with details.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.5 Impersonation</h3>
                <p className="mb-4 text-left">
                  Do not impersonate:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Other users or individuals</li>
                  <li>Celebrities or public figures</li>
                  <li>Chamakz staff or representatives</li>
                  <li>Brands, companies, or organizations</li>
                  <li>Government officials or agencies</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">4. Age Restrictions and Safety</h2>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.1 Minimum Age Requirement</h3>
                <p className="mb-4 text-left">
                  Chamakz is intended for users aged 18 and above. Users under 18 should not use Chamakz without parental supervision. We do not knowingly collect personal information from children under 13. If we discover that a user is under 13, we will immediately delete their account and data.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.2 Protecting Minors</h3>
                <p className="mb-4 text-left">
                  Content that targets, exploits, or endangers minors is strictly prohibited and will result in immediate account termination and reporting to law enforcement. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Grooming or inappropriate contact with minors</li>
                  <li>Sharing or requesting inappropriate content involving minors</li>
                  <li>Creating accounts to target minors</li>
                  <li>Any form of child exploitation</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.3 Parental Controls</h3>
                <p className="mb-4 text-left">
                  Parents and guardians should monitor their children's use of Chamakz. If you are a parent and discover that your child has provided us with personal information, please contact us immediately at info@chamakz.app.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">5. Content Moderation</h2>
                <p className="mb-4 text-left">
                  We use a combination of AI-powered moderation and human review to ensure content complies with our Guidelines. Our moderation system works 24/7 to protect our community.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.1 How Moderation Works</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong>Automated Detection:</strong> AI systems scan content in real-time for violations</li>
                  <li><strong>Human Review:</strong> Our moderation team reviews reported content and appeals</li>
                  <li><strong>User Reports:</strong> Community members can report violations</li>
                  <li><strong>Proactive Monitoring:</strong> We actively monitor high-risk content and accounts</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.2 Enforcement Actions</h3>
                <p className="mb-4 text-left">
                  Violations of these Guidelines may result in one or more of the following actions:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong>Warning:</strong> First-time minor violations may result in a warning</li>
                  <li><strong>Content Removal:</strong> Violating content will be removed immediately</li>
                  <li><strong>Temporary Suspension:</strong> Accounts may be suspended for a period (1 day, 7 days, 30 days)</li>
                  <li><strong>Feature Restrictions:</strong> Certain features may be restricted (messaging, streaming, etc.)</li>
                  <li><strong>Permanent Ban:</strong> Severe or repeated violations result in permanent account termination</li>
                  <li><strong>Legal Action:</strong> Serious violations may be reported to law enforcement</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">5.3 Severity Levels</h3>
                <p className="mb-4 text-left">
                  Violations are categorized by severity:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong>Minor:</strong> First-time violations, spam, minor harassment (Warning or 1-day suspension)</li>
                  <li><strong>Moderate:</strong> Repeated violations, hate speech, sharing personal information (7-30 day suspension)</li>
                  <li><strong>Severe:</strong> Illegal content, threats, child exploitation, sexual content (Permanent ban + legal reporting)</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">6. Reporting Violations</h2>
                <p className="mb-4 text-left">
                  If you encounter content or behavior that violates these Guidelines, please report it immediately. We take all reports seriously and investigate promptly.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.1 How to Report</h3>
                <p className="mb-4 text-left">
                  You can report violations through:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong>In-App Reporting:</strong> Use the report button on any content or user profile</li>
                  <li><strong>Email:</strong> Send detailed reports to info@chamakz.app</li>
                  <li><strong>Emergency Situations:</strong> For immediate danger, contact local law enforcement first, then report to us</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.2 What to Include in Reports</h3>
                <p className="mb-4 text-left">
                  When reporting, please include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Username or profile link of the violator</li>
                  <li>Description of the violation</li>
                  <li>Screenshots or recordings (if applicable)</li>
                  <li>Time and date of the incident</li>
                  <li>Any relevant context</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.3 False Reports</h3>
                <p className="mb-4 text-left">
                  Filing false or malicious reports is a violation of these Guidelines and may result in action against your account. Only report genuine violations.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">6.4 Report Confidentiality</h3>
                <p className="mb-4 text-left">
                  We keep reports confidential. We will not share your identity with the reported user unless required by law or necessary to protect safety.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">7. Appeals Process</h2>
                <p className="mb-4 text-left">
                  If you believe your account was suspended or content was removed in error, you may appeal the decision.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">7.1 How to Appeal</h3>
                <p className="mb-4 text-left">
                  Send an appeal email to info@chamakz.app with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Your username and account email</li>
                  <li>Reason for the appeal</li>
                  <li>Any evidence supporting your appeal</li>
                  <li>Date of the enforcement action</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">7.2 Appeal Review</h3>
                <p className="mb-4 text-left">
                  Appeals are reviewed by our moderation team within 7-14 business days. We will notify you of the decision via email. Our decision is final, but you may submit additional information if new evidence becomes available.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">8. Building a Positive Community</h2>
                <p className="mb-4 text-left">
                  Help us create a welcoming environment for all users:
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">8.1 Positive Behaviors</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Be welcoming to new users</li>
                  <li>Engage in meaningful conversations</li>
                  <li>Support creators and streamers</li>
                  <li>Respect different opinions and cultures</li>
                  <li>Help others learn and grow</li>
                  <li>Report violations when you see them</li>
                  <li>Follow the spirit, not just the letter, of these Guidelines</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">8.2 Content Creation</h3>
                <p className="mb-4 text-left">
                  When creating content:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Create original, authentic content</li>
                  <li>Respect copyright and give credit where due</li>
                  <li>Be mindful of your audience</li>
                  <li>Engage with your viewers respectfully</li>
                  <li>Follow platform-specific rules for live streaming</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">9. Platform-Specific Rules</h2>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">9.1 Video Calls</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Respect the other person's boundaries</li>
                  <li>Do not record calls without consent</li>
                  <li>End calls if you feel uncomfortable</li>
                  <li>Report inappropriate behavior immediately</li>
                  <li>Do not share call recordings without permission</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">9.2 Live Streaming</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Follow all content guidelines while streaming</li>
                  <li>Moderate your chat and remove violators</li>
                  <li>Do not stream copyrighted content without permission</li>
                  <li>Respect your viewers and engage positively</li>
                  <li>Do not use streams to promote prohibited content</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">9.3 Group Rooms</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Room creators are responsible for moderation</li>
                  <li>Remove users who violate guidelines</li>
                  <li>Set clear rules for your room</li>
                  <li>Respect all participants</li>
                  <li>Do not use rooms for prohibited activities</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">10. Updates to Guidelines</h2>
                <p className="mb-4 text-left">
                  We may update these Guidelines from time to time to reflect changes in our services, legal requirements, or community standards. We will notify you of material changes through the app, website, or email.
                </p>
                <p className="mb-4 text-left">
                  Your continued use of Chamakz after changes become effective constitutes acceptance of the updated Guidelines. If you do not agree with the updated Guidelines, you must stop using Chamakz.
                </p>
                <p className="text-left">
                  Please review these Guidelines regularly to stay informed about our community standards.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">11. Contact Us</h2>
                <p className="mb-4 text-left">
                  If you have questions about these Guidelines, need to report a violation, or want to appeal an enforcement action, please contact us at:
                </p>
                <p className="mb-4 text-left">
                  📩 Email:{' '}
                  <a href="mailto:info@chamakz.app" className="text-primary hover:underline font-semibold">
                    info@chamakz.app
                  </a>
                </p>
                <p className="mb-4 text-left">
                  For urgent safety concerns or emergencies, please contact local law enforcement immediately, then report to us.
                </p>
                <p className="text-left">
                  We are committed to maintaining a safe and positive community. Thank you for helping us achieve this goal.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Guidelines
