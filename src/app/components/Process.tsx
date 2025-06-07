"use client";
import { motion } from "framer-motion";
import React from "react";

const steps = [
  {
    title: "Discovery Call",
    desc: "We learn about your business, goals, and automation needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Audit",
    desc: "We analyze your current workflows and tech stack for automation opportunities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Design",
    desc: "We architect a custom automation solution tailored to your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Delivery",
    desc: "We build, test, and deploy your automation system with full support.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Support",
    desc: "Ongoing optimization, monitoring, and white-glove support.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Process</h2>
        <p className="section-description text-center mb-16">
          Our proven, white-glove approach ensures your automation is custom, powerful, and seamless.
        </p>
        <div className="relative flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center w-full lg:w-48 z-10 min-h-[200px]">
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center mb-6 shadow-lg"
                initial={{ scale: 0.8, opacity: 0.7 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-center text-primary dark:text-white">
                  {step.icon}
                </div>
              </motion.div>
              <div className="h-full flex flex-col items-center">
                <h3 className="text-xl font-extrabold mb-3 text-[#1a1a1a] dark:text-white transition-colors duration-300 whitespace-nowrap">{step.title}</h3>
                <p className="text-sm font-medium text-[#374151] dark:text-gray-200 transition-colors duration-300 leading-snug max-w-[200px]">{step.desc}</p>
              </div>
              
              {/* Shorter and thicker arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-8 top-1/2 transform translate-x-1/2" style={{ marginTop: '-32px' }}>
                  <svg className="w-16 h-8 text-black/30 dark:text-white/30" fill="none" viewBox="0 0 64 32">
                    <line x1="0" y1="16" x2="52" y2="16" stroke="currentColor" strokeWidth="3" />
                    <path d="M52 16L44 10L44 22L52 16Z" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 