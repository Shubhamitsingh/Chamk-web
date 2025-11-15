import { motion } from 'framer-motion'
import { Users, Target, Award, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower creators worldwide to showcase their talent, connect with audiences, and build sustainable careers through livestreaming.',
    },
    {
      icon: Users,
      title: 'Our Vision',
      description: 'To become the leading livestreaming platform that celebrates diversity, creativity, and authentic connections.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'We believe in transparency, creator empowerment, community building, and providing a safe, inclusive platform for everyone.',
    },
    {
      icon: Heart,
      title: 'Our Commitment',
      description: 'We are committed to supporting our creators, ensuring fair monetization, and building a positive, vibrant community.',
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
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
                About Chamak
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Learn more about our mission, vision, and the team behind the most exciting livestreaming platform.
              </p>
            </div>

            {/* Main Content */}
            <div className="rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Chamak is a premier livestreaming platform that empowers creators to showcase their talent, 
                  connect with audiences, and monetize their content. Founded with a vision to democratize content 
                  creation, we provide a platform where creativity meets opportunity.
                </p>
                <p>
                  Whether you're a musician, dancer, comedian, gamer, or just love to share your life, Chamak provides 
                  the tools and community to help you shine. Our platform is designed to be inclusive, accessible, and 
                  supportive of creators from all walks of life.
                </p>
                <p>
                  We believe that everyone has a story to tell and talent to share. Chamak is here to amplify your voice 
                  and help you build a community of fans who appreciate your unique content.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {values.map((value, idx) => {
                const Icon = value.icon
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
                    <h3 className="text-xl font-heading font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Why Choose Chamak */}
            <div className="rounded-2xl shadow-lg p-8 md:p-12 border border-primary-100/50">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Why Choose Chamak?
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Creator-First Approach:</strong> We prioritize our creators' 
                    success and provide them with the best tools and support to grow their audience and earnings.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Fair Monetization:</strong> Transparent earnings, instant payouts, 
                    and multiple revenue streams to help creators build sustainable careers.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Safe & Secure:</strong> AI-powered moderation and community 
                    guidelines ensure a safe, positive environment for all users.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Multi-Language Support:</strong> Connect with audiences in Hindi, 
                    English, Tamil, Telugu, and more regional languages.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Growing Community:</strong> Join millions of creators and viewers 
                    who are building meaningful connections and communities on Chamak.
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Have questions? We'd love to hear from you!
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About


