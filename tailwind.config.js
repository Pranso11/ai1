/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#a78bfa',
          DEFAULT: '#7c3aed',
          dark: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
}; 