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
        <div className="w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-left"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4 text-left">
              Privacy Policy – Chamakz
            </h1>
            <p className="text-gray-600 mb-8 text-left">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700 text-left prose-headings:text-left prose-p:text-left prose-ul:text-left prose-li:text-left">
              <section className="text-left">
                <p className="mb-4 text-left">
                  <strong>CHAMAKZ TECHNOLOGIES PRIVATE LIMITED</strong> ("we", "our", "us", "Chamakz") offers personalized content and services to all users through our mobile application Chamakz ("Service", "App", "Platform"). Chamakz includes the Chamakz mobile application, website, features, and other associated services. Chamakz provides live video chat, random video calls, group video rooms, live streaming, and other social and interactive features to users.
                </p>
                <p className="mb-4 text-left">
                  When you access or use Chamakz, we may collect, use, store, and share your information as described in this Privacy Policy. This Privacy Policy helps explain our information practices.
                </p>
                <p className="mb-4 text-left">
                  <strong>By installing, using, accessing Chamakz or any of its features, you have read and accepted the terms of this Policy.</strong> You have also accepted the Chamakz Terms of Service, Community Guidelines, and other terms which are available on the Chamakz App and Website. Please make sure to read these documents carefully. By using Chamakz, you are entering into a binding contract(s) with Chamakz. Your contract with us includes this Policy, the Terms of Service, the Community Guidelines, etc. If you do not agree with and accept the above, please do not use, install, access Chamakz or any of its features.
                </p>
                <p className="mb-4 text-left">
                  <strong>If you are subject to EU GDPR, you will be required to provide your explicit consent to this Privacy Policy.</strong> Rights in addition to the below applicable to you are detailed in Part II of this Privacy Policy.
                </p>
                <p className="text-left">
                  This Policy is applicable to information provided by users while using Chamakz, and not to information made available to Chamakz from others. Should Chamakz obtain information pertaining to you from websites, apps, landing pages, third parties, etc. that may be accessed by Chamakz's users through Chamakz or otherwise, such information will be subject to the privacy and other policies and terms of the said websites, apps, landing pages, etc. This Policy shall not apply to websites, apps, landing pages, etc. or any third-party services accessed by you through Chamakz including in case such websites, apps, landing pages, etc. and/or third-party services are advertised on Chamakz.
                </p>
                <p className="mt-4 text-left">
                  You also warrant and represent that any registration information and other information that you submit or otherwise provide to Chamakz is true, accurate and complete, and you agree to keep it that way at all times.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">1. Application Scope of this Privacy Policy</h2>
                <p className="mb-4 text-left">
                  By using Chamakz, you agree that we may access, collect, store, use, and share your information as described in this Privacy Policy.
                  If you do not agree with this Privacy Policy, please do not use Chamakz.
                </p>
                <p className="mb-4 text-left">
                  This Privacy Policy forms part of the Chamakz Terms of Service. Any terms used here have the same meaning as defined in the Terms of Service.
                </p>
                <p className="mb-4 text-left">
                  We may update or revise this Privacy Policy from time to time. If material changes are made, we will notify you through the app, website, or email. By continuing to use Chamakz after changes become effective, you agree to the updated policy.
                </p>
                <p className="text-left">
                  Chamakz may contain links to third-party websites or services. This Privacy Policy does not apply to third-party services. We are not responsible for how third parties use your information.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">2. Information You Provide and We Collect</h2>
                <p className="mb-4 text-left">
                  To provide Chamakz services, we may access, collect, store, and use the following information:
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.1 Information Collected with a Prompt</h3>
                
                <p className="mb-4 text-left">
                  In order to use Chamakz, we may need you to authenticate your account using your Google Account, Apple ID, or other third-party authentication methods, and we will be collecting your email address and name. We will also ask you to provide certain information including:
                </p>
                
                <p className="font-semibold mb-2 text-left">Account Information:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Name, username, email address</li>
                  <li>Gender, date of birth, age</li>
                  <li>City/area, location, regional preferences</li>
                  <li>Profile photo and any photos/videos you upload</li>
                  <li>Social media account information (if linked)</li>
                  <li>Telephone number (optional)</li>
                  <li>Content/category preferences</li>
                  <li>Language preferences</li>
                  <li>Areas of interest</li>
                  <li>Any tags, bio, or details you add to your profile</li>
                </ul>
                
                <p className="font-semibold mb-2 text-left">Location Information:</p>
                <p className="mb-4 text-left">
                  We ask you for location information and regional preferences to customize your experience by showing you relevant content. Chamakz may collect and store the current and past location of your device if you permit. You have full control over whether to allow or not allow Chamakz to collect this information by making changes to your device's settings. If Chamakz is unable to access your location information, Chamakz may become inaccessible or not function as intended.
                </p>
                
                <p className="font-semibold mb-2 text-left">Customer Support Information:</p>
                <p className="mb-4 text-left">
                  You may also provide us with information related to your use of Chamakz, including copies of your messages/posts, and how to contact you so that we can provide you with customer support. For example, you may send us an email with information relating to our app performance, or other issues.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.2 Information Collected Without a Prompt</h3>
                
                <p className="font-semibold mb-2 text-left">Device Information:</p>
                <p className="mb-3 text-left">We may collect the below with respect to any device through which Chamakz is used or accessed:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong>Device Identifiers:</strong> Unique device identifiers, device ID, advertising identifiers</li>
                  <li><strong>IP Address:</strong> Your Internet Protocol address</li>
                  <li><strong>Operating System:</strong> iOS, Android, or other operating system</li>
                  <li><strong>Operating System Version:</strong> Version of your operating system</li>
                  <li><strong>Device Make and Model:</strong> Manufacturer and model of your device</li>
                  <li><strong>Display Features:</strong> Screen resolution, display size</li>
                  <li><strong>Network Provider/Wi-Fi or ISP:</strong> Mobile carrier, Wi-Fi network information</li>
                  <li><strong>Battery Level and Usage:</strong> To optimize app performance</li>
                  <li><strong>Memory Usage:</strong> Device memory and storage information</li>
                  <li><strong>Other Apps or Services:</strong> Information about other apps installed or used through the device</li>
                  <li><strong>Content Type and Non-Personal Information:</strong> Related to ads and content</li>
                  <li><strong>Device Capability and Bandwidth:</strong> Network speed and connection quality</li>
                </ul>
                
                <p className="font-semibold mb-2 text-left">Usage and Log Information:</p>
                <p className="mb-3 text-left">We collect service-related, diagnostic, and performance information including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>How you use Chamakz (features used, time spent, interactions)</li>
                  <li>How you interact with others using Chamakz</li>
                  <li>Content preferences and consumption patterns</li>
                  <li>User activity, likes, dislikes, and in-app interactions</li>
                  <li>Page views and interaction statistics</li>
                  <li>Log files and diagnostics</li>
                  <li>Crash information and error reports</li>
                  <li>Website and performance logs</li>
                  <li>Geographical usage data</li>
                  <li>App settings and preferences</li>
                </ul>
                
                <p className="font-semibold mb-2 text-left">Media Access:</p>
                <p className="mb-4 text-left">
                  Chamakz may access your device's camera, microphone, photo and/or video library, and audio gallery. This access is required for features such as video calls, live streaming, profile photos, and content creation. We only access media that you explicitly choose to share or upload.
                </p>
                
                <p className="font-semibold mb-2 text-left">Tracking Information:</p>
                <p className="mb-4 text-left">
                  Chamakz may also collect tracking information including cookies, web beacons, pixels, DART, and similar tracking technologies. These help us understand how you use our services and improve your experience.
                </p>
                
                <p className="font-semibold mb-2 text-left">Third-Party Information:</p>
                <p className="mb-4 text-left">
                  Chamakz may also collect information provided by third parties who may disclose to Chamakz personal or non-personal information collected by them. Chamakz has no control over or responsibility in respect of third-party information practices or information collection methods.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.3 Sensitive Personal Information</h3>
                <p className="mb-4 text-left">
                  To enable certain features (e.g., live streaming, video calling, AR filters), we may request access to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong>Microphone</strong> – for audio input during calls and live streaming.</li>
                  <li><strong>Camera</strong> – for profile photos, real-time video, and content creation.</li>
                  <li><strong>Location</strong> – to show your region for personalized content and recommendations.</li>
                  <li><strong>Photo/Video Library</strong> – to allow you to upload and share media content.</li>
                </ul>
                <p className="mb-4 text-left">
                  We access these only with your explicit permission. You can revoke these permissions at any time through your device settings, though this may limit certain features of Chamakz.
                </p>
                <p className="mb-4 text-left">
                  We do not use sensitive personal information for marketing without your explicit consent.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.4 Face Data and Biometric Information (iOS Users)</h3>
                <p className="mb-4 text-left">
                  <strong>Collection of Face Data:</strong> Information to identify face and facial expressions may be collected when using AR filters and video effects.
                </p>
                <p className="mb-4 text-left">
                  <strong>Usage of Face Data:</strong> To make Chamakz app work well for our users, we offer tools that apply filters and video effects fitting the contours of user's face, modifying the size and shape of facial features and following facial movements. We may use TrueDepth APIs (iOS) to create AR effects within the App.
                </p>
                <p className="mb-4 text-left">
                  <strong>Disclosure and Sharing:</strong> This data is used to create filters and video effects within the App. The only use of this information is to provide valuable user features. <strong>None of the information collected by face data or TrueDepth API ever leaves the user's device.</strong> We do not share this data with third parties.
                </p>
                <p className="mb-4 text-left">
                  <strong>Retention:</strong> We do not store any Facial Recognition Data. Also, none of the information collected by Face Data ever leaves the user's device. However, data like user registration data, videos recorded by users, and user's profile photos are stored on our servers.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.5 Information We Do Not Collect</h3>
                <p className="mb-4 text-left">
                  We do not collect any Sensitive Personal Data or information such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Password related to other services</li>
                  <li>Financial information such as bank account, credit card, debit card, or other payment instrument details (payment processing is handled by secure third-party payment gateways)</li>
                  <li>Physical, physiological and mental health condition</li>
                  <li>Sexual orientation</li>
                  <li>Medical records and history</li>
                  <li>Biometric information (except face data for AR effects as described above, which never leaves your device)</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">2.6 Children's Information</h3>
                <p className="mb-4 text-left">
                  Chamakz is not intended for users under 18 years of age. We do not knowingly collect personal data from anyone under 18. If we discover such data, we will delete it immediately. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">3. How We Use Your Information</h2>
                <p className="mb-4 text-left">
                  We may use all the information we have to help us operate, provide, improve, understand, customize, support, and market Chamakz.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.1 Our Services</h3>
                <p className="mb-4 text-left">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li><strong>Operate and Provide Services:</strong> To provide and operate Chamakz services (current and future features), including video calls, live streaming, group rooms, and messaging.</li>
                  <li><strong>Customer Support:</strong> To respond to inquiries and provide customer support when you contact us.</li>
                  <li><strong>Improve and Customize:</strong> To improve, fix, and customize Chamakz by using the said information. We understand how users use Chamakz, and analyze and use the information that we have to evaluate and improve Chamakz, research, develop, and test new services and features, and conduct troubleshooting activities.</li>
                  <li><strong>Personalization:</strong> To improve and personalize your app experience, including content recommendations based on your interests, location, preferences, and usage patterns.</li>
                  <li><strong>Content Display:</strong> Displaying content based on interest, location, offers, etc.</li>
                  <li><strong>Advertising and Marketing:</strong> Displaying or providing access to promotions, advertisements, offers, etc. which may be based on your interests and also ad-targeting, ad-placement, and ad-measurement.</li>
                  <li><strong>Location-Based Features:</strong> Displaying location-specific news, weather-related information, and regional content.</li>
                  <li><strong>Performance Optimization:</strong> Improving search results, content loading, performance, etc.</li>
                  <li><strong>Communications:</strong> Send you communications including by email, push notifications, and in-app messages.</li>
                </ul>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.2 Safety and Security</h3>
                <p className="mb-4 text-left">We also use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Try and ensure safety and security of our users and their information</li>
                  <li>Verify accounts and activity</li>
                  <li>Promote safety and security on and off Chamakz</li>
                  <li>Investigate suspicious activity or violations of our policies, terms, etc.</li>
                  <li>Try and ensure that Chamakz is being used legally</li>
                  <li>Maintain safety and prevent misuse</li>
                  <li>Verify identity and prevent fraud/illegal activity</li>
                  <li>Enforce our Terms of Service and policies</li>
                  <li>Analyze usage trends and app performance</li>
                </ul>
                
                <p className="mb-4 text-left">
                  Any messages, photos, videos, or content you share in Chamakz may be stored on our servers. If you share them publicly or with other users, we may not be able to remove them once distributed, as other users may have saved or shared them.
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.3 Transfer & Storage of Information</h3>
                <p className="mb-4 text-left">
                  Our servers may operate in multiple countries. Your information may be stored or processed outside your jurisdiction, including in countries that may have different data protection laws than your country of residence.
                </p>
                <p className="mb-4 text-left">
                  By using Chamakz, you consent to this data transfer. Where you are from a European Economic Area ("EEA"), British or Swiss based country, we would like to let you know, your personal data is processed in a country outside the EEA, England, Switzerland by one of below safeguards:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>We adopt Standard Contractual Clauses approved by the European Commission and other relevant departments.</li>
                  <li>We are based on the decisions made by the European Commission and other relevant departments on whether other countries/regions have adequate data protection levels.</li>
                  <li>We adopt the equivalent mechanism stipulated in the laws applicable to data transmission to the United States and other relevant countries/regions.</li>
                </ul>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.4 Sharing of Information</h3>
                <p className="font-semibold mb-2 text-left">A. Sharing within Chamakz</p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Public profile information is visible to any user.</li>
                  <li>Your online status or activity may be visible to others.</li>
                </ul>

                <p className="font-semibold mb-2 text-left">B. Sharing with Third-Party Partners</p>
                <p className="mb-4 text-left">You agree that we may share your information with:</p>
                
                <p className="mb-2 text-left"><strong>Analytics Partners</strong></p>
                <p className="mb-4 text-left">Shared in aggregated or anonymous form for research and performance analysis. We may share information about you with third-party service providers who perform services on our behalf, including to measure and optimize the performance of ads and deliver more relevant ads, including on third-party websites and apps.</p>
                
                <p className="mb-2 text-left"><strong>Service Providers</strong></p>
                <p className="mb-4 text-left">Companies that help us operate our services (hosting, analytics, communication tools, payment processing, customer support). They may access your data only to perform tasks on our behalf and are contractually obligated to protect your information.</p>
                
                <p className="mb-2 text-left"><strong>Business Partners and Affiliates</strong></p>
                <p className="mb-4 text-left">We may share public information like your name, username, profile pictures, and any content posted by you (subject to your personal settings) with our business partners, affiliates, and investors.</p>
                
                <p className="mb-2 text-left"><strong>Fraud Prevention</strong></p>
                <p className="mb-4 text-left">We may share information about you, such as device and usage information, to help us and others prevent fraud.</p>
                
                <p className="mb-2 text-left"><strong>Law Enforcement</strong></p>
                <p className="mb-4 text-left">If required by law, legal processes, or to protect our users or platform.</p>
                
                <p className="mb-2 text-left"><strong>New Owners (Business Transfer)</strong></p>
                <p className="mb-4 text-left">If Chamakz is acquired, merged, or reorganized, your data may be transferred to the new operator.</p>
                
                <p className="mb-4 text-left">
                  <strong>We never sell personal information to third parties.</strong>
                </p>

                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.5 Security Measures</h3>
                <p className="mb-4 text-left">
                  We undertake reasonable security measures to protect your information in accordance with industry standards. We use administrative, technical, and physical safeguards to protect your data. However, no system is 100% secure, and we cannot guarantee absolute security. Events beyond our control can also occur. If a data breach occurs, we will notify you as required by applicable law.
                </p>
                <p className="mb-4 text-left">
                  When sharing information with third parties, we ensure they follow confidentiality and security obligations through contractual agreements.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.6 Assignment, Change of Control, and Transfer</h3>
                <p className="mb-4 text-left">
                  All of our rights and obligations under this Policy, the Terms of Service, and the Community Guidelines are freely assignable by us to any of our affiliates or any others, in connection with a merger, acquisition, restructuring, or sale of assets, or by operation of law or otherwise. We may transfer your information to any of our affiliates, any successor entities, or new management, etc.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">3.7 Law and Protection</h3>
                <p className="mb-4 text-left">
                  We may collect, use, preserve, and share your information if we believe that it may be reasonably necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>Respond pursuant to applicable law or regulations, to legal process, or to government requests</li>
                  <li>Comply with any valid legal process, governmental request, or applicable law, rule, or regulation</li>
                  <li>Investigate, remedy, or enforce potential violations of this Policy, the Terms of Service, and Community Guidelines</li>
                  <li>Protect the rights, property, or safety of us, our users, or others</li>
                  <li>Detect and resolve any fraud or security concerns or technical issues</li>
                  <li>Meet other legal requirements</li>
                </ul>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">4. Accessing & Managing Your Information</h2>
                <p className="mb-4 text-left">
                  If you would like to manage, change, limit, or delete your information, we allow you to do that through the settings feature available on Chamakz. You can change your settings to manage certain information available to other users.
                </p>
                <p className="mb-4 text-left">
                  You may access and edit your profile any time through the app settings. You can manage your contacts, groups, and broadcast lists, or use our block feature to manage the users with whom you communicate or who can communicate with you.
                </p>
                <p className="mb-4 text-left">
                  If you believe information on your Chamakz profile is incorrect, you may request correction by contacting us at info@chamakz.app. We will take reasonable steps to update or rectify your information.
                </p>
                <p className="mb-4 text-left">If you delete your account:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-left">
                  <li>You will lose access to your data, messages, and history.</li>
                  <li>Some content may remain visible if shared with other users or posted publicly.</li>
                  <li>We may retain data as required by law (fraud prevention, disputes, legal compliance, safety and security purposes).</li>
                  <li>We store data for as long as it is necessary to provide products and services to you and others. Information associated with your account will be kept until your account is deleted, unless we no longer need the data to provide the products and services or until we are legally required to do so.</li>
                </ul>
                <p className="mb-4 text-left">
                  Requests that are technically impossible or legally restricted may not be fulfilled. We will inform you if we cannot fulfill your request and the reasons why.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">4.1 Right to Opt Out</h3>
                <p className="mb-4 text-left">
                  You can opt out from our use of data from cookies and similar technologies that track your behavior on the sites of others for ad targeting and other ad-related purposes. You can also opt out of marketing communications. We will ask you to opt-in before we use GPS or other tools to identify your precise location.
                </p>
                <p className="mb-4 text-left">
                  However, you will continue to receive important emails relating to your account. You can email us at info@chamakz.app with your registered email address to unsubscribe from marketing communications.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">5. Updates to Our Policy</h2>
                <p className="mb-4 text-left">
                  We may amend or update this Policy from time to time. We keep our Privacy Policy under regular review and place any updates on this web page. We will provide you notice of amendments to this Policy, as appropriate, and update the "Last Updated" date at the top of this Policy.
                </p>
                <p className="mb-4 text-left">
                  Your continued use of Chamakz confirms your acceptance of this Policy, as amended. If you do not agree with or accept this Policy, as amended, you must stop using Chamakz. Please review our Privacy Policy from time to time.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">6. Contact Us</h2>
                <p className="mb-4 text-left">
                  If you have questions about this Privacy Policy, the information we hold on you, privacy matters, or you would like to exercise one of your data protection rights, please do not hesitate to contact us at:
                </p>
                <p className="mb-4 text-left">
                  📩 Email:{' '}
                  <a href="mailto:info@chamakz.app" className="text-primary hover:underline font-semibold">
                    info@chamakz.app
                  </a>
                </p>
                <p className="mb-4 text-left">
                  If Chamakz could not respond to your question, you may refer your complaint to the applicable regulator or data protection authority in your jurisdiction.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">7. Governing Law and Jurisdiction</h2>
                <p className="mb-4 text-left">
                  The validity, construction and enforceability of the Terms of Service, Community Guidelines, and this Privacy Policy shall be governed and construed in accordance with the laws of India.
                </p>
                <p className="mb-4 text-left">
                  Either party may refer such dispute for final resolution by arbitration under the Arbitration and Conciliation Act 1996. The Tribunal shall consist of three (3) arbitrators. Each party shall appoint 1 (one) arbitrator and the two arbitrators shall appoint the third arbitrator. The arbitration proceedings shall be held at Bangalore. The language to be used in the arbitral proceedings shall be English.
                </p>
                <p className="text-left">
                  Subject to the above, the Courts at Bangalore shall have exclusive jurisdiction.
                </p>
              </section>

              <section className="text-left">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4 text-left">Part II: Your Rights Under EU GDPR Law</h2>
                <p className="mb-4 text-left">
                  <strong>This section is in addition to the above and applies if you are subject to EU GDPR.</strong> In case of any conflict, the policies below shall be applicable if you are subject to EU GDPR.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 mt-6 mb-3 text-left">What are your rights under EU GDPR Law to the information we collect?</h3>
                
                <h4 className="text-lg font-heading font-bold text-gray-900 mt-4 mb-2 text-left">Access to Your Data</h4>
                <p className="mb-4 text-left">
                  You have the right to access your personal data including the content you upload. You can access your information by logging into your account. You can email us at info@chamakz.app with your registered email address. Please provide us a month to respond with the information and two months if the request is too complicated to fulfill within a month.
                </p>
                
                <h4 className="text-lg font-heading font-bold text-gray-900 mt-4 mb-2 text-left">Withdrawal of Consent</h4>
                <p className="mb-4 text-left">
                  You also have the right to withdraw your consent at any time and request us to stop processing your data. However, withdrawing your consent will not affect the processing or use of your information prior to fulfilling your consent withdrawal request. You can email us at info@chamakz.app with your registered email address.
                </p>
                
                <h4 className="text-lg font-heading font-bold text-gray-900 mt-4 mb-2 text-left">Request for Deletion</h4>
                <p className="mb-4 text-left">
                  You can email us at info@chamakz.app with your registered email address and request deletion of your data. We store data for as long as it is necessary to provide products and services to you and others. Information associated with your account will be kept until your account is deleted, unless we no longer need the data to provide the products and services or until we are legally required to do so.
                </p>
                
                <h4 className="text-lg font-heading font-bold text-gray-900 mt-4 mb-2 text-left">Request to Correct Your Data</h4>
                <p className="mb-4 text-left">
                  In case you find any of your information to be inaccurate or incorrect in any way, you can write to us at info@chamakz.app with your registered email and we will take reasonable steps to update or rectify your information.
                </p>
                
                <h4 className="text-lg font-heading font-bold text-gray-900 mt-4 mb-2 text-left">Complaints and Grievances</h4>
                <p className="mb-4 text-left">
                  With respect to collection and use of your personal data, you have the right to complain to the local Data Protection Authority. You can email us at info@chamakz.app with your registered email address.
                </p>
                
                <h4 className="text-lg font-heading font-bold text-gray-900 mt-4 mb-2 text-left">Third-Party Links</h4>
                <p className="mb-4 text-left">
                  We are not responsible for any content nor any consequences either directly or indirectly arising out of clicking on any third-party link you may come across posted by other users. We may share your information with approved third parties in order to provide our services through the Chamakz App.
                </p>
                
                <h4 className="text-lg font-heading font-bold text-gray-900 mt-4 mb-2 text-left">Data Transfers</h4>
                <p className="mb-4 text-left">
                  We may transfer personal information to countries other than the country in which the data was originally collected. Such transfers are subject to the safeguards mentioned in Section 3.3 above.
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

