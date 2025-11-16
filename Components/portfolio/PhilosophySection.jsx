import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Globe, Eye } from "lucide-react";

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const thoughts = [
    {
      icon: Eye,
      quote: "La réalité n'est qu'une illusion, certes très persistante.",
      author: "Albert Einstein",
    },
    {
      icon: Globe,
      quote: "L'univers n'est pas seulement plus étrange que nous le supposons, il est plus étrange que nous pouvons le supposer.",
      author: "J.B.S. Haldane",
    },
    {
      icon: Sparkles,
      quote: "Nous sommes tous dans le caniveau, mais certains d'entre nous regardent les étoiles.",
      author: "Oscar Wilde",
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8">
          {thoughts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 w-fit"
                  >
                    <item.icon className="w-8 h-8 text-purple-400" />
                  </motion.div>

                  <p className="text-gray-300 text-lg leading-relaxed italic flex-grow mb-6">
                    "{item.quote}"
                  </p>

                  <p className="text-gray-500 text-sm">— {item.author}</p>

                  <div className="mt-6 h-1 w-full bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 blur-3xl" />
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <p className="text-2xl md:text-3xl text-gray-200 font-light text-center leading-relaxed">
              "Dans l'immensité du cosmos,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                nous sommes des étoiles prenant conscience d'elles-mêmes
              </span>
              ."
            </p>
            <p className="text-gray-500 text-center mt-6">— Carl Sagan</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}