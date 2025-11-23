import { motion } from 'framer-motion'
import { Download as DownloadIcon, Smartphone, Check, Play, Apple } from 'lucide-react'
import Button from '../components/Button'

const Download = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Download Hero */}
      <section className="pt-0 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-2">
              Download Chamakz Today
            </h1>
            <p className="text-xl text-white/90">
              Available on Android and iOS
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Options */}
      <section className="pt-2 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Android */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 text-center space-y-4"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-heading font-bold">Android</h2>
              <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                <Play size={20} />
                Google Play Store
              </Button>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-gray-700">Android 6.0 and above</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-gray-700">Latest version: 2.5.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-gray-700">Free to download</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
                  <span className="text-4xl">📱</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Scan QR Code</p>
              </div>
            </motion.div>

            {/* iOS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 text-center space-y-4"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-heading font-bold">iOS</h2>
              <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                <Apple size={20} />
                Apple App Store
              </Button>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-gray-700">iOS 12.0 and above</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-gray-700">Latest version: 2.5.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-primary" size={20} />
                  <span className="text-gray-700">Free to download</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
                  <span className="text-4xl">📱</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Scan QR Code</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="pt-2 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: 'Download the app',
                description: 'Click the button above to download Chamakz from your app store',
                icon: DownloadIcon,
              },
              {
                step: 2,
                title: 'Create account',
                description: 'Sign up with your phone number or email address in seconds',
                icon: Smartphone,
              },
              {
                step: 3,
                title: 'Start streaming',
                description: 'Tap the go-live button and share your talent with the world',
                icon: Play,
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={40} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Download

