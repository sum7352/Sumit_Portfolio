import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3b82f6',
          dark: '#10b981',
        },
      },
      backgroundImage: {
        // Light: light blue gradient
        'gradient-light': 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 35%, #93c5fd 70%, #60a5fa 100%)',
        // Dark: dark blue to green gradient
        'gradient-dark': 'linear-gradient(135deg, #0b1020 0%, #0f172a 35%, #0e7490 70%, #065f46 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59,130,246,0.35)',
        'glow-dark': '0 0 40px rgba(16,185,129,0.35)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config


