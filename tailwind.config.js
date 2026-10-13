/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salon: {
          dark: '#101010',
          darker: '#0a0a0a',
          surface: '#171717',
          card: '#1c1c1c',
          cardHover: '#242424',
          border: '#2a2825',
          borderLight: '#3d3a35',
          gold: '#D6B477',
          goldLight: '#E8CE9E',
          goldDark: '#B39151',
          goldMuted: '#9B8152',
          ivory: '#F4F0E8',
          ivoryMuted: '#C5C1B8',
          grey: '#8E8A85',
          greyDark: '#4A4744',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widestExtra: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
