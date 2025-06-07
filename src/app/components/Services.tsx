"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Workflow Automation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    desc: "Automate repetitive business tasks and connect your favorite tools for seamless operations.",
  },
  {
    title: "AI Agents & Chatbots",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15h8M9 9h.01M15 9h.01" />
      </svg>
    ),
    desc: "Deploy intelligent assistants to handle customer queries, support, and lead generation 24/7.",
  },
  {
    title: "RPA + AI Integration",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10H7z" />
      </svg>
    ),
    desc: "Combine robotic process automation with AI for powerful, scalable business solutions.",
  },
  {
    title: "Business Data Automation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
        <circle cx="12" cy="7" r="4" strokeWidth={2} />
      </svg>
    ),
    desc: "Automate data collection, cleaning, and reporting for real-time business insights.",
  },
  {
    title: "Custom GPT Bots & Assistants",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    desc: "Build tailored GPT-powered bots for your unique workflows, knowledge, and brand voice.",
  },
  {
    title: "CRM + AI Integrations",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h8v8H8z" />
      </svg>
    ),
    desc: "Supercharge your CRM with AI-driven automations, insights, and customer journeys.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-[#0d0612]/80 dark:bg-[#0d0612]/80">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-4xl sm:text-5xl font-extrabold text-primary dark:text-primary-light mb-4 drop-shadow-lg"
        >
          What We Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-description text-center mb-12 text-lg sm:text-2xl font-medium text-gray-800 dark:text-gray-100 drop-shadow"
        >
          Custom, powerful, done-for-you AI automation for every business need.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group p-6 min-h-[140px] rounded-2xl shadow-2xl 
                         bg-gradient-to-br from-indigo-200/10 via-indigo-400/10 to-indigo-800/10 
                         dark:from-indigo-700/10 dark:via-indigo-800/10 dark:to-indigo-900/10 
                         backdrop-blur-2xl border border-white/20 dark:border-white/30 
                         text-[#1a1a1a] dark:text-white transition-all duration-300 
                         hover:bg-indigo-300/20 hover:dark:bg-indigo-800/20 
                         hover:backdrop-blur-[30px] hover:scale-[1.03]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#1a1a1a] dark:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 font-normal leading-snug transition-all duration-300">
                {service.desc}
              </p>
              <a
                href="#contact"
                className="mt-auto px-6 py-2 rounded-full bg-[#5b21b6]/90 text-white font-medium text-base shadow-md 
                           transition-all duration-200 hover:bg-[#7c3aed] hover:scale-105 hover:shadow-xl"
              >
                Talk to Us
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
