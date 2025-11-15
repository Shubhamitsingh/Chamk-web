import { motion } from 'framer-motion'
import { Video, DollarSign, Users, MessageCircle, BarChart3, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Live Streaming',
      description: 'Experience seamless HD quality streaming with multi-camera support and screen sharing capabilities. Our advanced streaming technology ensures minimal latency and crystal-clear video quality, so your audience never misses a moment. Whether you\'re performing live music, hosting a Q&A, or sharing your daily life, Chamak provides the perfect platform to connect with your fans in real-time.',
      subFeatures: ['HD Quality', 'Multi-camera support', 'Screen sharing'],
      icon: Video,
      imagePosition: 'left',
    },
    {
      id: 2,
      title: 'Virtual Gifting & Monetization',
      description: 'Turn your passion into profit with our comprehensive virtual gifting system. Fans can send you virtual gifts during your streams, which you can convert into real earnings. With multiple gift options ranging from hearts to premium gifts, transparent earnings tracking, and instant payouts, Chamak makes it easy for creators to monetize their content and build a sustainable income.',
      subFeatures: ['Multiple gift options', 'Instant payouts', 'Transparent earnings'],
      icon: DollarSign,
      imagePosition: 'right',
    },
    {
      id: 3,
      title: 'Community Building',
      description: 'Build a loyal fanbase with our comprehensive community features. Connect with followers through our follower system, create exclusive fan clubs, and organize community events. Engage with your audience beyond live streams with posts, stories, and direct messaging. Watch your community grow as you share your talent and personality with the world.',
      subFeatures: ['Follower system', 'Fan clubs', 'Community events'],
      icon: Users,
      imagePosition: 'left',
    },
    {
      id: 4,
      title: 'Chat & Interactions',
      description: 'Keep your audience engaged with real-time chat, reactions, and interactive features. Respond to comments live, see reactions in real-time, and create polls and quizzes to make your streams more interactive. Our AI-powered moderation ensures a safe and positive environment for everyone, so you can focus on creating great content.',
      subFeatures: ['Real-time chat', 'Reactions', 'Polls & quizzes'],
      icon: MessageCircle,
      imagePosition: 'right',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Track your growth and performance with detailed analytics. Monitor viewer insights, track revenue, and analyze performance metrics to understand what content resonates with your audience. Use data-driven insights to optimize your streaming schedule, content strategy, and engagement tactics to maximize your reach and earnings.',
      subFeatures: ['Viewer insights', 'Revenue tracking', 'Performance metrics'],
      icon: BarChart3,
      imagePosition: 'left',
    },
    {
      id: 6,
      title: 'Multi-Language Support',
      description: 'Reach global audiences with support for 10+ languages including Hindi, English, Tamil, Telugu, Bengali, and more. Create content in your preferred language and connect with local communities. Our platform makes it easy to discover content in your language and build a diverse, inclusive community of creators and viewers.',
      subFeatures: ['10+ languages', 'Regional content', 'Local communities'],
      icon: Globe,
      imagePosition: 'right',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Features Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
              Everything You Need to Stream
            </h1>
            <p className="text-xl text-white/90">
              Powerful features to help you grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const isEven = idx % 2 === 0

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`mb-20 last:mb-0 flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="w-20 h-20 bg-gradient-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={40} />
                  </div>
                  <h2 className="text-4xl font-heading font-bold text-gradient mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.subFeatures.map((subFeature, subIdx) => (
                      <li key={subIdx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                        <span className="text-gray-700 font-medium">{subFeature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
                    <div className="relative rounded-3xl p-8 aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-lg">
                          <Icon className="text-white" size={64} />
                        </div>
                        <p className="text-gray-600 font-medium">Feature Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Ready to Start Streaming?
            </h2>
            <p className="text-xl text-white/90">
              Download Chamak and start your journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/download"
                className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Download Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Features

