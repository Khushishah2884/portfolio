/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
      },
      animation: {
        'float':       'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 1.5s infinite',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'fade-up':     'fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':     'fadeIn 0.4s ease-out forwards',
        'blink':       'blink 1.2s step-end infinite',
        'slide-down':  'slideDown 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
        'ping-slow':   'ping 2s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(99,102,241,0.2)' },
          '50%':     { boxShadow: '0 0 50px rgba(139,92,246,0.45)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
        smooth: 'cubic-bezier(0.16,1,0.3,1)',
      },
      boxShadow: {
        'glow-sm': '0 0 16px rgba(99,102,241,0.2)',
        'glow':    '0 0 40px rgba(99,102,241,0.25)',
        'glow-lg': '0 0 80px rgba(99,102,241,0.3)',
        'card':    '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05)',
        'card-hover': '0 12px 40px -8px rgba(99,102,241,0.18)',
      },
    },
  },
  plugins: [],
};
