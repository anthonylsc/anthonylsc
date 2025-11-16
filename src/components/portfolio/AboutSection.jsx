import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Zap } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building robust applications with modern technologies and best practices",
    },
    {
      icon: Zap,
      title: "FiveM Expertise",
      description: "Custom scripts and resources for immersive gaming experiences",
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Transforming complex problems into elegant, efficient code",
    },
  ];

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate developer exploring the intersection of technology, creativity, and human experience.
            Constantly pushing boundaries and questioning the nature of digital realities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10"
        >
          <p className="text-gray-300 text-lg leading-relaxed text-center italic">
            "In the realm of code, we shape reality. Every function, every variable, every line —
            <span className="text-cyan-400"> a choice that ripples through digital spacetime</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
}