"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "FAQs", href: "#whyus" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0d0612] backdrop-blur border-b border-[#e5e7eb] dark:border-[#232347] transition-colors duration-300"
    >
      <div className="container relative flex items-center h-16">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center justify-start pl-4">
          <Link href="/" className="text-3xl font-extrabold text-[#6366f1] dark:text-primary-light tracking-tight transition-colors duration-300">
            Pranso AI
          </Link>
        </div>
        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-[#1a1a1a] dark:text-gray-200 hover:text-[#6366f1] dark:hover:text-primary-light transition-colors font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Right: Theme Toggle */}
        <div className="flex-1 flex items-center justify-end pr-4">
          <div className="scale-125">
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded text-gray-700 dark:text-gray-200"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-[#0d0612] border-t border-[#e5e7eb] dark:border-[#232347] transition-colors duration-300"
          >
            <div className="flex flex-col px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 py-2 hover:text-primary dark:hover:text-primary-light transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-6 py-2 rounded-full bg-[#5b21b6] text-white font-semibold shadow transition-all duration-200 hover:bg-[#7c3aed] hover:scale-105 hover:shadow-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 