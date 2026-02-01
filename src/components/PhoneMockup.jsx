import { motion } from 'framer-motion'
import { Search, Heart, Home, User, MessageCircle, Calendar, Edit } from 'lucide-react'

const PhoneMockup = () => {
  return (
    <div className="relative order-1 lg:order-2 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="relative flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {/* Left Phone - Messages Screen */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
            {/* Phone Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-purple-400/30 rounded-[2.5rem] blur-2xl"></div>
            
            {/* Phone Frame */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border-2 border-gray-300">
              <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-white flex items-center justify-between px-3 text-[8px] font-semibold text-gray-900 z-10">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1.5 border border-gray-900 rounded-sm"></div>
                    <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                  </div>
                </div>

                {/* Messages Screen Content */}
                <div className="pt-6 pb-12 h-full overflow-y-auto bg-gray-50">
                  {/* Header */}
                  <div className="px-4 pb-3 bg-white">
                    <h2 className="text-sm font-bold text-gray-900 mb-2">Message</h2>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-xs text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Stories/Avatars */}
                  <div className="px-4 py-3 bg-white border-b border-gray-100">
                    <div className="flex gap-2 overflow-x-auto">
                      {['ES', 'VK', 'JJ', 'LS', 'ZZ'].map((initials, idx) => (
                        <div key={idx} className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">
                            {initials}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Messages List */}
                  <div className="px-4 py-2 bg-white">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Messages (7)</p>
                    <div className="space-y-3">
                      {[
                        { name: 'Rebecca V', msg: 'Hello, Nice to meet you!', time: '20.12' },
                        { name: 'Vanessa Kim', msg: 'thanks for your time.', time: '20.01' },
                        { name: 'Junior Jane', msg: 'Send invitation', time: '19.12' },
                        { name: 'Lisa Samba', msg: 'yes this is same for...', time: '19.10' },
                        { name: 'Zoel Zota', msg: 'okay i waiting for you....', time: '19.12' },
                      ].map((chat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-300 to-purple-300 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="text-xs font-semibold text-gray-900 truncate">{chat.name}</span>
                              <span className="text-[10px] text-gray-400">{chat.time}</span>
                            </div>
                            <p className="text-[10px] text-gray-600 truncate">{chat.msg}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around py-2">
                  <Home className="text-gray-400" size={18} />
                  <Search className="text-gray-400" size={18} />
                  <div className="relative">
                    <MessageCircle className="text-primary" size={20} />
                    <Heart className="absolute -top-1 -right-1 text-primary" size={12} fill="currentColor" />
                  </div>
                  <User className="text-gray-400" size={18} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Phone - Profile Setup Screen */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10"
        >
          <div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
            {/* Phone Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-[2.5rem] blur-2xl"></div>
            
            {/* Phone Frame */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border-2 border-gray-700">
              <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-white flex items-center justify-between px-3 text-[8px] font-semibold text-gray-900 z-10">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1.5 border border-gray-900 rounded-sm"></div>
                    <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                  </div>
                </div>

                {/* Profile Setup Content */}
                <div className="pt-6 pb-8 h-full overflow-y-auto bg-white">
                  {/* Header Graphic */}
                  <div className="px-6 py-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-400 via-purple-400 to-pink-400 flex items-center justify-center mb-6">
                      <div className="flex flex-col items-center gap-1">
                        <Heart className="text-white" size={20} fill="currentColor" />
                        <User className="text-white" size={16} />
                        <Calendar className="text-white" size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="px-6 mb-6">
                    <h2 className="text-lg font-bold text-gray-900 text-center">Tell us a bit about you</h2>
                  </div>

                  {/* Input Fields */}
                  <div className="px-6 space-y-4">
                    {/* Username */}
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1 block">Username</label>
                      <div className="relative">
                        <input
                          type="text"
                          value="Hello@Zachry.com"
                          className="w-full pl-3 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                          readOnly
                        />
                        <Edit className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                      </div>
                    </div>

                    {/* Birth Year */}
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-1 block">Birth Year</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="th year"
                          className="w-full pl-3 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                      </div>
                    </div>

                    {/* Gender Selection */}
                    <div>
                      <label className="text-xs font-semibold text-gray-700 mb-2 block">Gender</label>
                      <div className="flex gap-3 justify-center">
                        <button className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                          <User className="text-primary" size={18} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-md">
                          <User className="text-white" size={18} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-300 flex items-center justify-center">
                          <User className="text-purple-500" size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="px-6 mt-8">
                    <button className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Concentric Circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-purple-200/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-pink-200/20 rounded-full"></div>
        
        {/* Profile Picture Circles */}
        <div className="absolute top-10 right-10 w-12 h-12 bg-gradient-to-br from-primary-300 to-purple-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-10 h-10 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-5 w-8 h-8 bg-gradient-to-br from-pink-300 to-primary-300 rounded-full opacity-60"></div>
      </div>
    </div>
  )
}

export default PhoneMockup
