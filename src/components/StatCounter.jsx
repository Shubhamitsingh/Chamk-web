import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const StatCounter = ({ number, label, icon: Icon }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const target = parseInt(number.replace(/\D/g, ''))
    const suffix = number.replace(/\d/g, '')
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, number])

  const displayNumber = number.includes('★') 
    ? number 
    : `${count.toLocaleString()}${number.replace(/\d/g, '')}`

  return (
    <div ref={ref} className="text-center">
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Icon className="text-white" size={32} />
          </div>
        </div>
      )}
      <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
        {displayNumber}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

export default StatCounter

