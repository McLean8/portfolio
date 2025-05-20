// Optimized GSAP imports to reduce bundle size
import { gsap } from 'gsap'

// Safely import ScrollTrigger with server-side rendering protection
let ScrollTrigger

// Only load ScrollTrigger on the client side
if (typeof window !== 'undefined') {
  // Dynamic import to prevent server-side issues
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.ScrollTrigger
    // Register plugins only on client side
    gsap.registerPlugin(ScrollTrigger)
  })
}

export { gsap, ScrollTrigger }
