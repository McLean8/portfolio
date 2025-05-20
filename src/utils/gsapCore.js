// Optimized GSAP imports to reduce bundle size
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }
