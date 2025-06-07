"use client";
import { motion } from "framer-motion";
import React from "react";

// Simple star/particle generator
function Stars() {
  const [stars, setStars] = React.useState<any[]>([]);
  React.useEffect(() => {
    const generated = Array.from({ length: 60 }).map(() => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.7 + 0.2,
      y: [0, Math.random() * 10 - 5, 0],
      x: [0, Math.random() * 10 - 5, 0],
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 2,
    }));
    setStars(generated);
  }, []);
  if (!stars.length) return null;
  return (
    <>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/70 rounded-full"
          style={{
            width: star.width,
            height: star.height,
            top: star.top,
            left: star.left,
            opacity: star.opacity,
          }}
          animate={{
            y: star.y,
            x: star.x,
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-[#0d0612] transition-colors duration-300">
      {/* Animated stars/particles */}
      <Stars />
      {/* Animated glowing circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-br from-[#ede9fe] via-[#a78bfa33] to-[#f3f4f6] dark:from-[#a78bfa33] dark:via-[#7c3aed22] dark:to-[#0a0826] blur-3xl opacity-80 pointer-events-none transition-colors duration-300"
        animate={{ scale: [1, 1.07, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      {/* Animated aura ring */}
      <motion.svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 transition-colors duration-300"
        width="700" height="700" viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0.7, scale: 0.98 }}
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.02, 0.98] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <circle
          cx="350" cy="350" r="320"
          stroke="#a78bfa"
          strokeWidth="3"
          strokeOpacity="0.5"
          filter="url(#glow)"
        />
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </motion.svg>
      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mt-12 mb-6"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ede9fe] text-[#3b2f78] text-sm font-semibold shadow-lg dark:bg-[#6d28d9]/60 dark:text-white transition-colors duration-300">
          <svg className="w-4 h-4 text-[#6366f1] dark:text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          #1 AI Implementation Agency
        </span>
      </motion.div>
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-[#1a1a1a] dark:text-white drop-shadow-lg transition-colors duration-300"
        >
          Transform Your Business<br />
          <span className="text-[#6366f1] dark:text-[#a78bfa]">with AI Automation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl text-[#374151] dark:text-gray-200 mb-8 max-w-2xl transition-colors duration-300"
        >
          Custom AI solutions that streamline operations and boost efficiency. See it in action with a free demo.
        </motion.p>
        <div className="flex gap-4 mb-10">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full bg-[#6366f1] text-white font-semibold text-lg shadow-xl transition-all duration-200 hover:bg-[#4f46e5] hover:shadow-2xl"
          >
            Get Demo
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur border border-[#6366f1]/20 text-[#1a1a1a] dark:text-white font-semibold text-lg shadow-xl transition-all duration-200 hover:bg-white/20 hover:shadow-2xl"
          >
            Learn More
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-3 text-[#374151] dark:text-gray-200 text-base transition-colors duration-300"
        >
          <svg className="w-5 h-5 text-[#6366f1] dark:text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>200+ AI Solutions Delivered</span>
        </motion.div>
      </div>
    </section>
  );
} 