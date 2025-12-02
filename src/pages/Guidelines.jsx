import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Ban } from 'lucide-react'

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
  const guidelines = [
    {
      icon: Heart,
      title: 'Be Respectful',
      description: 'Treat all users with kindness and respect. Harassment, bullying, or hate speech will not be tolerated.',
    },
    {
      icon: Shield,
      title: 'Keep It Safe',
      description: 'Do not share personal information, engage in illegal activities, or create content that could harm others.',
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Foster positive interactions and help create a welcoming environment for all creators and viewers.',
    },
    {
      icon: Ban,
      title: 'No Spam or Scams',
      description: 'Do not spam, promote scams, or engage in fraudulent activities. Authentic content only.',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
                Community Guidelines
              </h1>
              <p className="text-gray-600 mb-8">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Chamakz, we're committed to creating a safe, positive, and inclusive community for all users. 
                These guidelines help ensure that everyone can enjoy our platform while respecting each other's 
                rights and dignity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {guidelines.map((guideline, idx) => {
                const Icon = guideline.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-xl p-6 shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{guideline.title}</h3>
                    <p className="text-gray-600">{guideline.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Prohibited Content</h2>
                <p className="text-gray-700 mb-4">The following types of content are strictly prohibited:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Violence, graphic content, or content that promotes harm</li>
                  <li>Sexually explicit content or nudity</li>
                  <li>Hate speech, discrimination, or harassment</li>
                  <li>Illegal activities or content that violates laws</li>
                  <li>Spam, scams, or fraudulent content</li>
                  <li>Copyright infringement or unauthorized content</li>
                  <li>Personal information of others without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Content Moderation</h2>
                <p className="text-gray-700 mb-4">
                  We use AI-powered moderation and human review to ensure content complies with our guidelines. 
                  Violations may result in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Content removal</li>
                  <li>Temporary account suspension</li>
                  <li>Permanent account ban for severe violations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Reporting Violations</h2>
                <p className="text-gray-700 mb-4">
                  If you encounter content or behavior that violates our guidelines, please report it immediately. 
                  We take all reports seriously and will investigate promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Age Restrictions</h2>
                <p className="text-gray-700">
                  Chamakz is intended for users aged 13 and above. Users under 18 should have parental supervision. 
                  We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions about these guidelines or need to report a violation, please contact us at:{' '}
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

export default Guidelines

