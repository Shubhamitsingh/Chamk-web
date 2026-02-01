import { motion } from 'framer-motion'
import { Users, Shield, MessageCircle, TrendingUp } from 'lucide-react'

const TrustSection = () => {
  const trustMetrics = [
    {
      value: '98%',
      label: 'User Satisfaction',
      description: 'Users love our platform',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      value: '99%',
      label: 'Safe Connections',
      description: 'Verified and secure',
      icon: Shield,
      color: 'from-green-500 to-green-600'
    },
    {
      value: '24/7',
      label: 'Customer Support',
      description: 'Always here to help',
      icon: MessageCircle,
      color: 'from-purple-500 to-purple-600'
    },
    {
      value: '95%',
      label: 'Success Rate',
      description: 'Meaningful connections',
      icon: TrendingUp,
      color: 'from-pink-500 to-pink-600'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Why Choose Chamakz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer the best experience with industry-leading metrics that prove our commitment to quality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {trustMetrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
