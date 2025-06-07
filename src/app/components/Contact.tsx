"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form to your backend or service
  }

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Let's build your automation system</h2>
        <p className="section-description text-center mb-12">
          Book a free call or tell us what you need. All major CTAs lead here!
        </p>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          {/* Calendly/Typeform placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="bg-white dark:bg-gray-950 rounded-xl shadow p-8 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Book a Free Call</h3>
              <iframe
                title="Calendly"
                src="https://calendly.com/your-placeholder-link"
                className="w-full h-80 rounded-lg border-0"
                style={{ minHeight: 320 }}
              />
              <div className="text-xs text-gray-400 mt-2">
                (Replace with your real Calendly or Typeform link)
              </div>
            </div>
          </motion.div>
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-950 rounded-xl shadow p-8 space-y-6"
            >
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="business" className="block mb-1 font-medium">
                  Business
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  value={form.business}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  What do you need?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#5b21b6] text-white font-semibold px-6 py-2 shadow transition-all duration-200 hover:bg-[#7c3aed] hover:scale-105 hover:shadow-lg"
              >
                {submitted ? "Thank you! We'll be in touch." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 