"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Lee",
    role: "COO, E-commerce Brand",
    quote:
      "Pranso AI automated our order processing and support. We scaled without hiring more staff. The process was seamless and the team is world-class.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Patel",
    role: "Founder, SaaS Startup",
    quote:
      "We went from manual onboarding to a fully automated, AI-driven flow. Our churn dropped and our users are happier than ever.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Director, Healthcare Group",
    quote:
      "Patient scheduling and reminders are now 100% automated. Our staff can focus on care, not paperwork. Highly recommend Pranso AI.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Carlos Mendez",
    role: "Operations Manager, Logistics",
    quote:
      "Inventory and shipment tracking is now effortless. Pranso AI's automation saved us hours every week and reduced errors to zero.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Emily Chen",
    role: "Marketing Lead, Retail",
    quote:
      "Our marketing campaigns are now fully automated and data-driven. We saw a 30% increase in engagement within the first month!",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Ahmed Al-Farsi",
    role: "CEO, Fintech Company",
    quote:
      "Compliance and reporting used to be a nightmare. With Pranso AI, it's all handled automatically and accurately.",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Julia Novak",
    role: "HR Director, Tech Firm",
    quote:
      "Onboarding and employee support are now seamless. Our HR team can finally focus on people, not paperwork.",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "David Kim",
    role: "CTO, EdTech Startup",
    quote:
      "Integrating Pranso AI into our platform was a game changer. Our support tickets dropped by 60% and user satisfaction soared.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Liam O'Connor",
    role: "Product Manager, Mobile Apps",
    quote:
      "Pranso AI's automation let us focus on building features, not managing repetitive tasks. Our release cycle is faster than ever!",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Fatima Zahra",
    role: "Founder, Online Learning",
    quote:
      "Student support and course recommendations are now AI-powered. Our students are more engaged and our team is less stressed.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "George Smith",
    role: "Owner, Local Business",
    quote:
      "Pranso AI helped us automate bookings and reminders. Our no-show rate dropped by half!",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Sofia Rossi",
    role: "COO, Hospitality Group",
    quote:
      "Guest experience is now seamless and personalized. Automation by Pranso AI is a must-have for modern hotels.",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Scroll by one card
  const scrollByCard = (dir: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cardWidth = slider.firstElementChild?.clientWidth || 320;
    slider.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Proud Testimonials</h2>
        <p className="section-description text-center mb-12">
          Real results, real impact. Here are some of our proudest client stories.
        </p>
        <div className="relative">
          <button
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#5b21b6] text-white font-semibold px-6 py-2 shadow transition-all duration-200 hover:bg-[#7c3aed] hover:scale-105 hover:shadow-lg"
            onClick={() => scrollByCard("left")}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-thin custom-dark-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-6 min-w-full pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 sm:w-80 snap-center flex flex-col items-center text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur p-5 rounded-xl shadow-md border border-primary/10"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-primary/40 shadow"
                  />
                  <blockquote className="text-base italic mb-4 text-gray-900 dark:text-white font-semibold">
                    "{t.quote}"
                  </blockquote>
                  <div className="font-bold text-primary dark:text-primary-light">
                    {t.name}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#5b21b6] text-white font-semibold px-6 py-2 shadow transition-all duration-200 hover:bg-[#7c3aed] hover:scale-105 hover:shadow-lg"
            onClick={() => scrollByCard("right")}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

// Custom scrollbar styles
import "./custom-scrollbar.css"; 