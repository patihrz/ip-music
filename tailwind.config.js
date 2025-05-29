/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3A7BD5',
        'brand-teal': '#00D9E8',
        'neutral-dark': '#0B0F19',
        'neutral-medium': '#1F2937',
        'neutral-border': '#374151',
        'text-on-dark': '#E5E7EB',
        'text-on-dark-secondary': '#9CA3AF',
        'accent-cyan': '#67E8F9',
        'accent-cyan-hover': '#22D3EE',
        'glow-color': '#00D9E8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        pulseDot: {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1.0)' },
        },
        heroGlow: {
          // Glow lebih terang: opacity ditingkatkan, spread radius (angka ke-4) juga bisa sedikit ditingkatkan
          '0%, 100%': { boxShadow: '0 0 35px 10px rgba(0, 217, 232, 0.6), 0 0 60px 25px rgba(0, 217, 232, 0.25)' },
          '50%': { boxShadow: '0 0 60px 20px rgba(0, 217, 232, 0.75), 0 0 90px 30px rgba(0, 217, 232, 0.35)' },
        },
        logoBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-in forwards',
        pulseDot1: 'pulseDot 1.4s infinite ease-in-out both',
        pulseDot2: 'pulseDot 1.4s infinite ease-in-out 0.2s both',
        pulseDot3: 'pulseDot 1.4s infinite ease-in-out 0.4s both',
        heroGlow: 'heroGlow 4s ease-in-out infinite', // Durasi bisa disesuaikan
        logoBounce: 'logoBounce 3.5s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};