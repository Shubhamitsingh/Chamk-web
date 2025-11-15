import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-xl hover:scale-105 focus:ring-primary shadow-lg',
    secondary: 'bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-gradient-primary hover:text-white focus:ring-primary shadow-md',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 focus:ring-white shadow-lg',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button


