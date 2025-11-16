import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ParticleBackground from "../components/portfolio/ParticleBackground";
import HeroSection from "../components/portfolio/HeroSection";
import SocialLinksSection from "../components/portfolio/SocialLinksSection";
import PhilosophySection from "../components/portfolio/PhilosophySection";
import FooterSection from "../components/portfolio/FooterSection";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden bg-[#0a0a0f]">
      <ParticleBackground />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-900/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-900/10 blur-[120px]" />
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="relative z-10">
        <HeroSection />
        <SocialLinksSection />
        <PhilosophySection />
        <FooterSection />
      </div>
    </div>
  );
}