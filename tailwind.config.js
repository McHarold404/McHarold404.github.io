/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme - Red & Black
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          card: '#1f1f1f',
          primary: '#dc2626', // red-600
          'primary-dark': '#991b1b', // red-800
          'primary-light': '#ef4444', // red-500
          text: '#f5f5f5',
          'text-secondary': '#a3a3a3',
        },
        // Light theme - Red & White
        light: {
          bg: '#ffffff',
          surface: '#f9fafb',
          card: '#ffffff',
          primary: '#dc2626', // red-600
          'primary-dark': '#991b1b', // red-800
          'primary-light': '#ef4444', // red-500
          text: '#1f2937',
          'text-secondary': '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
