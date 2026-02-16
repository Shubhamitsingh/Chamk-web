import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Page Not Found | Chamakz – New Friends Live Chat"
        description="The page you're looking for doesn't exist. Return to Chamakz homepage."
        noindex={true}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2
              }}
              className="mb-8"
            >
              <div className="text-9xl md:text-[12rem] font-heading font-bold text-gradient opacity-20">
                404
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Page Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Oops! The page you're looking for doesn't exist.
              </p>
              <p className="text-lg text-gray-500">
                The page may have been moved, deleted, or the URL might be incorrect.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg"
                >
                  <Home size={20} />
                  Go to Homepage
                </motion.button>
              </Link>
              
              <motion.button
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-semibold hover:bg-gradient-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <ArrowLeft size={20} />
                Go Back
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Popular Pages
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Features', path: '/features' },
                  { name: 'Download', path: '/download' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gradient-primary hover:text-white transition-all duration-300 font-medium text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
