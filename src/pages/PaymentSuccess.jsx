import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Home, Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const PaymentSuccess = () => {
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
        title="Payment Successful | Chamakz"
        description="Your payment has been processed successfully. Thank you for your purchase!"
        keywords="payment success, payment confirmed, chamakz payment"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Success Icon */}
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
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl">
                  <CheckCircle className="text-white" size={64} strokeWidth={2.5} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
                Payment Successful!
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Thank you for your purchase
              </p>
              <p className="text-lg text-gray-500">
                Your payment has been processed successfully. You will receive a confirmation email shortly.
              </p>
            </motion.div>

            {/* Payment Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Payment Details
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Transaction ID</span>
                  <span className="text-gray-900 font-semibold">
                    {new URLSearchParams(window.location.search).get('transaction_id') || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Amount Paid</span>
                  <span className="text-gray-900 font-semibold text-xl text-primary">
                    {new URLSearchParams(window.location.search).get('amount') || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Payment Method</span>
                  <span className="text-gray-900 font-semibold">
                    {new URLSearchParams(window.location.search).get('payment_method') || 'Online Payment'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 font-medium">Date & Time</span>
                  <span className="text-gray-900 font-semibold">
                    {new Date().toLocaleString()}
                  </span>
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
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  <Home size={20} />
                  Go to Home
                </motion.button>
              </Link>
              
              <Link to="/download">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-semibold hover:bg-gradient-primary hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  <Download size={20} />
                  Download App
                  <ArrowRight size={18} />
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
              <p className="text-gray-500 text-sm">
                Need help? <Link to="/contact" className="text-primary hover:underline font-medium">Contact our support team</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentSuccess
