import { Link } from 'react-router-dom'
import { ArrowUp, Instagram, Twitter, Facebook, Play, Apple } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Force immediate scroll to top when footer link is clicked
  const handleLinkClick = () => {
    // Immediate scroll (not smooth) to ensure it happens before route change
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  const productLinks = [
    { text: 'Features', url: '/features' },
    { text: 'How It Works', url: '/how-it-works' },
    { text: 'Download', url: '/download' },
  ]

  const companyLinks = [
    { text: 'About Us', url: '/about' },
    { text: 'Careers', url: '/careers' },
    { text: 'Contact', url: '/contact' },
  ]

  const legalLinks = [
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Terms of Service', url: '/terms' },
    { text: 'Community Guidelines', url: '/guidelines' },
    { text: 'Safety', url: '/safety' },
  ]

  return (
    <footer className="bg-white text-gray-800" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center space-x-1.5">
              <img 
                src="/images/logopink.png" 
                alt="Chamakz live video chat and dating app logo" 
                className="h-14 w-14 object-contain"
                loading="lazy"
              />
              <span className="text-2xl font-heading font-bold text-gray-900">Chamakz</span>
            </div>
            <p className="text-gray-700 text-base font-medium">
              The most exciting livestreaming platform. Connect, perform, earn and build your fanbase.
            </p>
            <div className="pt-4">
              <h3 className="text-gray-900 font-bold mb-3 text-base">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/chamakz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:text-white transition-all bg-gradient-primary/10 text-primary"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/chamakz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:text-white transition-all bg-gradient-primary/10 text-primary"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com/chamakz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:text-white transition-all bg-gradient-primary/10 text-primary"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-gray-900 font-bold mb-3 text-base">Download App</h3>
              <div className="flex flex-col gap-2">
                {/* TODO: Replace with actual App Store URL when available */}
                {/* Example: href="https://apps.apple.com/app/chamakz/id[APP_ID]" */}
                <a
                  href="https://apps.apple.com/app/chamakz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  aria-label="Download from App Store"
                >
                  <Apple size={16} />
                  App Store
                </a>
                {/* TODO: Replace with actual Google Play Store URL when available */}
                {/* Example: href="https://play.google.com/store/apps/details?id=com.chamakz.app" */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.chamakz.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0175C2] text-white rounded-lg hover:bg-[#0165A3] transition-colors text-sm font-medium"
                  aria-label="Download from Google Play"
                >
                  <Play size={16} />
                  Google Play
                </a>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.url}
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.url}
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.url}
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-primary transition-colors text-base font-medium"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-700 text-base font-medium">
            Copyright © 2024 Chamakz. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <select className="text-gray-800 text-base px-3 py-1.5 rounded border border-gray-400 font-medium">
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Telugu</option>
            </select>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center"
            >
              <ArrowUp size={20} className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


