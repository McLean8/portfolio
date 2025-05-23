// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'
import netlify from '@astrojs/netlify'

// Environment detection
const isProduction = process.env.NODE_ENV === 'production'

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable server-side rendering mode
  adapter: netlify({
    edgeMiddleware: true, // Enable Edge Functions for better performance
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ['console.log', 'console.info', 'console.debug'] : [],
        },
      },
      // Chunk optimization
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'gsap-core': ['gsap/gsap-core'],
            'gsap-plugins': ['gsap/ScrollTrigger'],
          },
        },
      },
    },
    // Optimize React in production
    define: isProduction
      ? {
          'process.env.NODE_ENV': '"production"',
          'React.createRoot': 'null', // Force legacy mode which is smaller
        }
      : {},
    envPrefix: ['RESEND_', 'CONTACT_'],
  },

  integrations: [
    react({
      include: ['src/components/**/*.jsx', 'src/components/**/*.tsx'],
    }),
  ],

  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
