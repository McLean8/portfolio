import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Custom hook for Hero section animations
 * @returns {Object} Refs for animated elements
 */
const useHeroAnimations = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const btnRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline()

    tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.2).fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.5).fromTo(btnRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.7)
  }, [])

  return {
    heroRef,
    titleRef,
    subtitleRef,
    btnRef,
    canvasRef,
  }
}

export default useHeroAnimations
