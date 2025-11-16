import React from "react";
import { motion } from "framer-motion";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              anthony.lsc
            </h3>
          </div>

          {/* Divider */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto" />

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © {currentYear} anthony.lsc
          </p>

          {/* Animated dots */}
          <div className="flex justify-center gap-2 pt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-32 bg-gradient-to-t from-purple-900/10 to-transparent blur-3xl pointer-events-none" />
    </footer>
  );
}