import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react'

const Careers = () => {
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

  const benefits = [
    {
      icon: Briefcase,
      title: 'Growth Opportunities',
      description: 'Work on cutting-edge technology and grow your career with us',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Join a diverse and talented team of passionate professionals',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Salary',
      description: 'We offer competitive compensation packages and benefits',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy work-life balance',
    },
  ]

  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Bangalore, India',
      type: 'Full-time',
    },
    {
      title: 'Content Moderator',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
                Join Our Team
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're building the future of livestreaming. Come be a part of our journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
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
                    <h3 className="text-xl font-heading font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Open Positions</h2>
              
              {openPositions.map((position, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <a
                      href="mailto:info@chamakz.app?subject=Application for Position"
                      className="px-6 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all text-center"
                    >
                      Apply Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">
                Don't see a position that matches your skills? We're always looking for talented people.
              </p>
              <a
                href="mailto:info@chamakz.app"
                className="text-primary hover:underline font-semibold"
              >
                Send us your resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers

