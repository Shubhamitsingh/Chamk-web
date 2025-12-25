import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Download', path: '/download' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-lg'
          : 'shadow-sm'
      }`}
      role="banner"
    >
      <nav className="container mx-auto pl-1 sm:pl-2 lg:pl-3 pr-2 sm:pr-4 lg:pr-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1.5">
              <img 
                src="/images/logopink.png" 
                alt="Chamakz live video chat and dating app logo" 
                className="h-14 w-14 object-contain"
                loading="eager"
              />
              <span className="text-2xl font-heading font-bold text-gradient">
                Chamakz
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-4 lg:space-x-5" role="menubar">
              {navLinks.map((link) => (
                <li key={link.path} role="none">
                  <Link
                    to={link.path}
                    className={`relative font-medium transition-colors px-3 py-2 ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    role="menuitem"
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Download Button */}
          <div className="hidden md:block">
            <Link
              to="/download"
              className="px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              aria-label="Download Chamakz app"
            >
              Download
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-800"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-medium ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-gray-700'
                  }`}
                  role="menuitem"
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-semibold"
                role="menuitem"
                aria-label="Download Chamakz app"
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

