import React from 'react'
import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

export default function Loading(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] to-[#12121a]">
      <div className="text-center">
        <motion.div animate={{ rotate: [0, 12, 0] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg">
          <Rocket className="w-10 h-10 text-white" />
        </motion.div>
        <p className="mt-6 text-gray-300">Loading...</p>
      </div>
    </div>
  )
}
