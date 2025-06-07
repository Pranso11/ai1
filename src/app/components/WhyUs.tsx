"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const faqs = [
  {
    question: "What makes your AI fulfillment service different?",
    answer:
      "Our AI fulfillment service is tailored to each client, offering end-to-end automation, rapid delivery, and ongoing support. We leverage the latest AI technologies to ensure your business achieves maximum efficiency and ROI.",
  },
  {
    question: "How does the AI fulfillment process work?",
    answer:
      "We start with a discovery call to understand your needs, then design, build, and deploy custom AI solutions. Our process is transparent, collaborative, and focused on delivering measurable results.",
  },
  {
    question: "What kind of AI projects can you fulfill?",
    answer:
      "We handle a wide range of AI projects, including workflow automation, predictive analytics, natural language processing, and more. If you have a unique challenge, we can build a solution for it.",
  },
  {
    question: "How long does fulfillment take?",
    answer:
      "Project timelines vary based on complexity, but most solutions are delivered within 2-6 weeks. We prioritize speed without sacrificing quality.",
  },
  {
    question: "Can I request revisions or modifications after delivery?",
    answer:
      "Absolutely! We offer post-delivery support and are happy to make revisions or enhancements to ensure your solution continues to meet your needs.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="whyus" className="section">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-left mb-3 text-[#1a1a1a] dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#374151] dark:text-gray-300">
            Common questions about our AI solutions and services
          </p>
        </div>
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-md overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 hover:border-white/20"
            >
              <div className="relative">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-heading text-base sm:text-lg text-[#1a1a1a] dark:text-white transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.span 
                    className="ml-4 flex items-center justify-center w-6 h-6 rounded-md bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-300"
                    animate={{ 
                      scale: open === i ? 1.1 : 1,
                      backgroundColor: open === i ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.05)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary dark:text-white"
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </motion.svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-5">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="relative"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 dark:bg-white/20" />
                          <p className="pl-4 text-base leading-relaxed text-[#374151] dark:text-gray-300">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 