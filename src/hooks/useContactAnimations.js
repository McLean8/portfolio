import { useEffect, useRef } from 'react'
import { gsap } from '../utils/gsapCore'

const useContactAnimations = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return

    // Import ScrollTrigger dynamically
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      // Register plugin
      gsap.registerPlugin(ScrollTrigger)

      // Title animation
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

      // Form animation
      gsap.fromTo(
        formRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      )

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    })
  }, [])

  return { sectionRef, titleRef, formRef }
}

export default useContactAnimations
