const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#E2E8F0',
        accent: '#10B981',
        'accent-hover': '#059669',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      keyframes: {
        'ai-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 #4ade80', backgroundColor: '#bbf7d0' },
          '50%': { boxShadow: '0 0 8px 4px #4ade80', backgroundColor: '#86efac' },
        },
      },
      animation: {
        'ai-glow': 'ai-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

