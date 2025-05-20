import { useEffect, useRef } from 'react'
import { gsap } from '../utils/gsapCore'

/**
 * Custom hook for scroll-triggered animations
 * @returns {Object} Refs for animated elements
 */
const useElementAnimations = () => {
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imgRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    // Import ScrollTrigger dynamically
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      // Register plugin
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        imgRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.to(arrowRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Clean up function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    })
  }, [])

  return { titleRef, contentRef, imgRef, arrowRef }
}

export default useElementAnimations
