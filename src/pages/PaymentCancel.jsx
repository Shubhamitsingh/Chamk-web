import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { XCircle, Home, ArrowLeft, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const PaymentCancel = () => {
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
        title="Payment Cancelled | Chamakz"
        description="Your payment was cancelled. You can try again anytime."
        keywords="payment cancelled, payment failed, chamakz payment"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Cancel Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2
              }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center shadow-2xl">
                  <XCircle className="text-red-500" size={64} strokeWidth={2.5} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center"
                >
                  <XCircle className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>

            {/* Cancel Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Payment Cancelled
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Your payment was not processed
              </p>
              <p className="text-lg text-gray-500">
                No charges were made to your account. You can try again anytime.
              </p>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                What happened?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Payment was cancelled</h3>
                    <p className="text-gray-600">
                      You chose to cancel the payment process or closed the payment window.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No charges made</h3>
                    <p className="text-gray-600">
                      Your account was not charged. You can safely try again when you're ready.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="text-green-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Try again anytime</h3>
                    <p className="text-gray-600">
                      You can complete your purchase at any time. Your items are saved in your cart.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                <ArrowLeft size={20} />
                Try Again
              </motion.button>
              
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-semibold hover:bg-gradient-primary hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  <Home size={20} />
                  Go to Home
                </motion.button>
              </Link>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-500 text-sm mb-2">
                Having trouble with payment? <Link to="/contact" className="text-primary hover:underline font-medium">Contact our support team</Link>
              </p>
              <p className="text-gray-400 text-xs">
                If you believe this is an error, please contact us immediately.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentCancel
