import { useEffect, useRef } from 'react'
import { gsap } from '../utils/gsapCore'

/**
 * Custom hook for minimal but effective animations in the Technologies section
 */
const useTechAnimations = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    // Import ScrollTrigger dynamically
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      // Register plugin
      gsap.registerPlugin(ScrollTrigger)

      // Create a single timeline for better performance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      })

      // Add animations to timeline
      tl.fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }).fromTo(
        containerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3' // Slight overlap for better visual effect
      )

      // Simple arrow animation
      const arrowAnim = gsap.to(arrowRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Use intersection observer API directly - more efficient than individual animations
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const element = entry.target
                gsap.to(element, {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.5,
                  ease: 'power2.out',
                  clearProps: 'transform', // Clean up after animation
                })
                observer.unobserve(element)
              }
            })
          },
          { threshold: 0.2 }
        )

        // Apply initial styles and observe
        document.querySelectorAll('.tech-card').forEach((card, index) => {
          gsap.set(card, { opacity: 0, y: 20, scale: 0.95 })
          observer.observe(card)
        })

        return () => {
          // Clean up
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
          tl.kill()
          arrowAnim.kill()
          document.querySelectorAll('.tech-card').forEach(card => observer.unobserve(card))
        }
      }

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        tl.kill()
        arrowAnim.kill()
      }
    })
  }, [])

  // Simple scroll function
  const scrollToNext = () => {
    if (typeof window === 'undefined') return
    const contact = document.getElementById('contact')
    contact?.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    sectionRef,
    titleRef,
    containerRef,
    arrowRef,
    scrollToNext,
  }
}

export default useTechAnimations
