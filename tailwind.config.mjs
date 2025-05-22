/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'neon-purple': '#b026ff',
        'neon-pink': '#ff26b0',
        dark: '#0a0a0a',
        darker: '#050505',
        light: '#e2e2e2',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 5px theme(colors.neon-purple), 0 0 20px theme(colors.neon-purple)',
        'neon-hover': '0 0 10px theme(colors.neon-purple), 0 0 30px theme(colors.neon-purple)',
        'neon-pink': '0 0 5px theme(colors.neon-pink), 0 0 20px theme(colors.neon-pink)',
        glow: '0 0 15px rgba(176, 38, 255, 0.5)',
        'glow-sm': '0 0 8px rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'reverse-spin': 'reverse-spin 10s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '20px 20px',
      },
      ringWidth: {
        DEFAULT: '0', // Remove default ring width
      },
      textShadow: {
        sm: '0 0 2px rgba(255,255,255,0.3)',
        DEFAULT: '0 0 4px rgba(255,255,255,0.4)',
        md: '0 0 8px rgba(176,38,255,0.5)',
        lg: '0 0 12px rgba(176,38,255,0.7)',
      },
      transitionDelay: {
        300: '300ms',
        600: '600ms',
      },
      perspective: {
        1000: '1000px',
      },
      rotate: {
        'y-5': 'rotateY(5deg)',
        'y-10': 'rotateY(10deg)',
        'x-10': 'rotateX(10deg)',
      },
      transformOrigin: {
        bottom: 'bottom',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 0 2px rgba(255,255,255,0.3)',
        },
        '.text-shadow': {
          textShadow: '0 0 4px rgba(255,255,255,0.4)',
        },
        '.text-shadow-md': {
          textShadow: '0 0 8px rgba(176,38,255,0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 0 12px rgba(176,38,255,0.7)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-5': {
          transform: 'rotateY(5deg)',
        },
        '.rotate-y-10': {
          transform: 'rotateY(10deg)',
        },
        '.rotate-x-10': {
          transform: 'rotateX(10deg)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
