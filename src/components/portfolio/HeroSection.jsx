import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useGsapScroll } from "../../utils/gsapInit";

export default function HeroSection() {
  const ref = useRef(null)
  useGsapScroll(ref)
  const scrollToNext = () => {
    const nextSection = document.getElementById("social");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated geometric shapes */}
      <motion.div
        className="hero-shape-1 absolute top-20 left-10 w-64 h-64 border border-cyan-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="hero-shape-2 absolute bottom-20 right-10 w-96 h-96 border border-purple-500/20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-bold mb-24 tracking-tight"
        >
          <span className="site-title bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            anthony.lsc
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer p-3"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}