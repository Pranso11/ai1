"use client";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3 select-none">
      <span className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>{isDark ? "DARK" : "LIGHT"}</span>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className={`relative w-16 h-8 rounded-full flex items-center px-1 transition-colors duration-300 focus:outline-none ${isDark ? "bg-gray-900" : "bg-gray-200"}`}
      >
        {/* Sun icon */}
        <svg
          className={`w-5 h-5 absolute left-2 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-primary"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        {/* Moon icon */}
        <svg
          className={`w-5 h-5 absolute right-2 transition-colors duration-300 ${isDark ? "text-primary" : "text-gray-400"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
        {/* Sliding circle */}
        <motion.div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center`}
          animate={{ x: isDark ? 32 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isDark ? (
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </motion.div>
      </button>
    </div>
  );
} 