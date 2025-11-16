import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS3", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "Lua", level: 85, color: "from-indigo-500 to-purple-500" },
    { name: "React", level: 88, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 82, color: "from-green-400 to-emerald-500" },
    { name: "FiveM Development", level: 92, color: "from-pink-500 to-purple-500" },
    { name: "UI/UX Design", level: 85, color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
              </div>

              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                >
                  <motion.div
                    animate={{ x: [-20, 100, -20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10">
            <p className="text-gray-300 text-lg mb-4">
              <span className="text-purple-400 font-semibold">Always Learning</span> • Always Growing
            </p>
            <p className="text-gray-500 text-sm">
              Technology evolves, and so do I
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}