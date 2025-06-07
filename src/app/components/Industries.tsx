"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    name: "E-commerce",
    pain: "Manual order processing, slow customer support, inventory headaches.",
    solution: "Automate orders, returns, and support with AI agents and real-time dashboards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6h10v7" /></svg>
    ),
  },
  {
    name: "Healthcare",
    pain: "Appointment scheduling chaos, paperwork overload, slow patient response.",
    solution: "AI automates scheduling, reminders, and patient queries securely.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
    ),
  },
  {
    name: "Agencies",
    pain: "Repetitive client onboarding, reporting, and campaign management.",
    solution: "Automate onboarding, reporting, and campaign workflows with custom AI bots.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    name: "SaaS",
    pain: "User onboarding friction, support tickets, and churn risk.",
    solution: "AI-driven onboarding, automated support, and churn prediction workflows.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21m6-4l.75 4M9 21h6M3 13a4 4 0 014-4h10a4 4 0 014 4v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" /></svg>
    ),
  },
  {
    name: "Real Estate",
    pain: "Lead follow-up delays, document management, and missed opportunities.",
    solution: "AI automates lead nurturing, document workflows, and client communications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" /></svg>
    ),
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);

  // Auto-advance active industry every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="industries" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Industrial Application</h2>
        <p className="section-description text-center mb-10">
          See how Pranso AI transforms different industries with automation:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {industries.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm ${
                active === i
                  ? "bg-white/10 dark:bg-white/5 text-[#1a1a1a] dark:text-white border border-white/20 dark:border-white/10 shadow-lg hover:bg-white/20 dark:hover:bg-white/10 hover:scale-105"
                  : "bg-black/5 dark:bg-white/5 text-[#374151] dark:text-gray-200 border border-transparent hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              {ind.icon}
              {ind.name}
            </button>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-5 bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
            >
              <h3 className="text-lg font-bold mb-3 text-[#1a1a1a] dark:text-white">{industries[active].name}</h3>
              <div className="space-y-2.5">
                <div className="bg-black/10 dark:bg-white/10 rounded-lg p-2.5">
                  <p className="text-xs uppercase tracking-wider text-primary/90 dark:text-primary-light/90 font-semibold mb-1">Pain Point</p>
                  <p className="text-sm text-[#374151] dark:text-gray-200 leading-relaxed">{industries[active].pain}</p>
                </div>
                <div className="bg-black/10 dark:bg-white/10 rounded-lg p-2.5">
                  <p className="text-xs uppercase tracking-wider text-primary/90 dark:text-primary-light/90 font-semibold mb-1">Our Solution</p>
                  <p className="text-sm text-[#374151] dark:text-gray-200 leading-relaxed">{industries[active].solution}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span>Book Call Now</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 