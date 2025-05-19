import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Custom hook for handling all animations in the Technologies section
 * @returns {Object} References and animation functions
 */
const useTechAnimations = technologies => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const arrowRef = useRef(null)
  const techRefs = useRef([])

  // Setup refs for each tech item
  useEffect(() => {
    techRefs.current = Array(technologies.reduce((total, tech) => total + tech.items.length, 0))
      .fill()
      .map(() => React.createRef())
  }, [technologies])

  useEffect(() => {
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

    // Container animation
    gsap.fromTo(
      containerRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    )

    // Arrow bounce animation
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // Setup intersection observer for tech cards with staggered reveal
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          const delay = parseInt(element.dataset.index) * 0.1

          // Apply animations with staggered delay
          gsap.fromTo(
            element,
            {
              y: 20,
              opacity: 0,
              scale: 0.95,
              rotate: -2,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.6,
              delay: delay,
              ease: 'power3.out',
              onComplete: () => {
                // Add a subtle pulse effect to make it more interesting
                gsap.to(element, {
                  boxShadow: '0 0 20px rgba(176, 38, 255, 0.4)',
                  duration: 1.5,
                  repeat: 1,
                  yoyo: true,
                })
              },
            }
          )

          // Stop observing once animated
          observer.unobserve(element)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    // Start observing each tech card
    const techCards = document.querySelectorAll('.tech-card')
    techCards.forEach(card => observer.observe(card))

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      techCards.forEach(card => observer.unobserve(card))
    }
  }, [])

  // Handle arrow click to scroll to next section
  const scrollToNext = () => {
    const contact = document.getElementById('contact')
    if (contact) {
      // Create a flashy arrow animation before scrolling
      gsap
        .timeline()
        .to(arrowRef.current, {
          y: -10,
          scale: 1.2,
          opacity: 0.8,
          duration: 0.2,
          ease: 'power2.in',
        })
        .to(arrowRef.current, {
          y: 30,
          scale: 0.5,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            contact.scrollIntoView({ behavior: 'smooth' })
          },
        })
    }
  }

  return {
    sectionRef,
    titleRef,
    containerRef,
    arrowRef,
    techRefs,
    scrollToNext,
  }
}

export default useTechAnimations
