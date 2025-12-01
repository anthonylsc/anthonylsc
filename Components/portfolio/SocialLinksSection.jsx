import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, MessageSquare, Github, Mail, ExternalLink } from "lucide-react";

export default function SocialLinksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      gradient: "from-purple-500 via-pink-500 to-orange-500",
      url: "https://www.instagram.com/anthony.lscr/",
      handle: "anthony.lscr",
    },
    {
      name: "Discord",
      icon: MessageSquare,
      gradient: "from-indigo-500 to-purple-600",
      url: "https://discordapp.com/users/723303933715546182",
      handle: "anthony.lsc",
    },
    {
      name: "GitHub",
      icon: Github,
      gradient: "from-gray-600 to-gray-800",
      url: "https://github.com/anthonylsc",
      handle: "anthonylsc",
    },
    {
      name: "Email",
      icon: Mail,
      gradient: "from-green-400 to-emerald-500",
      url: "mailto:anthonylsc888@gmail.com",
      handle: "anthonylsc888@gmail.com",
    },
  ];

  return (
    <section id="social" ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden"
          >
            <motion.div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500`} initial={false} />
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="flex items-center gap-4 relative z-10">
              <img src="https://i.goopics.net/21n0w9.png" alt="rShop logo" className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white">rShop</h3>
                <p className="text-sm text-gray-300">FiveM Shop</p>
                <div className="mt-3 flex gap-3">
                  <a href="https://rshop.tebex.io/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 hover:scale-[1.02] transform transition-all shadow-lg text-white text-sm font-medium">Visiter le site</a>
                  <a href="https://discord.gg/twxHb8cNu9" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-white/10 text-white text-sm hover:bg-white/5 hover:scale-[1.02] transform transition-all">Rejoindre le Discord</a>
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.12 * index, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-colors duration-300 overflow-hidden"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                initial={false}
              />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${social.gradient} shadow-lg`}>
                    <social.icon className="w-7 h-7 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {social.name}
                </h3>
                <p className="text-gray-400 text-sm font-mono">{social.handle}</p>
              </div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}