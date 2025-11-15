import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Youtube, name: 'YouTube', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
  ]

  const productLinks = [
    { text: 'Features', url: '/features' },
    { text: 'How It Works', url: '#how-it-works' },
    { text: 'Pricing', url: '#pricing' },
    { text: 'Creators', url: '#creators' },
  ]

  const companyLinks = [
    { text: 'About Us', url: '/about' },
    { text: 'Careers', url: '/careers' },
    { text: 'Contact', url: '/contact' },
    { text: 'Blog', url: '/blog' },
  ]

  const legalLinks = [
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Terms of Service', url: '/terms' },
    { text: 'Community Guidelines', url: '/guidelines' },
    { text: 'FAQ', url: '/faq' },
  ]

  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-heading font-bold text-gray-900">Chamak</span>
            </div>
            <p className="text-gray-700 text-base font-medium">
              The most exciting livestreaming platform. Connect, perform, earn and build your fanbase.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gradient-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
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
            Copyright © 2024 Chamak. All rights reserved.
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


