/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)',
        'premium-gold': '0 20px 60px rgba(212, 175, 55, 0.15), 0 10px 30px rgba(212, 175, 55, 0.1)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
        'inner-premium': 'inset 0 2px 8px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        // Robinson Inc Official Brand Colors (from robinsoninc.com)
        'robinson-gold': '#D4AF37', // Primary gold/yellow accent
        'robinson-gold-dark': '#B8941F',
        'robinson-gold-light': '#E5C158',
        'robinson-gray': '#58595B', // Dark gray for text
        'robinson-gray-dark': '#3A3A3C',
        'robinson-gray-light': '#9E9E9E',
        'robinson-white': '#FFFFFF',
        'robinson-black': '#1A1A1A',
        'robinson-bg': '#F5F5F5', // Light background
        'robinson-bg-dark': '#E8E8E8',
        // Keep legacy names for compatibility but map to new colors
        'safety-orange': '#D4AF37', // Map to Robinson gold
        'safety-orange-dark': '#B8941F',
        'safety-orange-light': '#E5C158',
        'industrial-dark': '#FFFFFF', // Light theme - white backgrounds
        'industrial-gray': '#F5F5F5', // Light gray backgrounds
        'industrial-light': '#E8E8E8',
        'steel-gray': '#58595B',
        'chrome': '#9E9E9E',
        'robinson-blue': '#0047AB', // Keep for backward compatibility
        'robinson-blue-dark': '#003380',
        'robinson-blue-light': '#1a5fc9',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'count-up': 'countUp 2s ease-out',
        'spark': 'spark 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 102, 0, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 102, 0, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spark: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(255,102,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
