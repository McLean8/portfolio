import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlowText from './GlowText'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    const element = footerRef.current
    let tween // To store the GSAP animation instance for cleanup

    if (element) {
      // Footer animation
      tween = gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=30px', // Trigger when top of footer is 30px from viewport bottom
            once: true, // Animate only once when it enters the viewport
            // For your local debugging, you can add: markers: true,
          },
        }
      )
    }

    // Cleanup function for GSAP animation and ScrollTrigger
    return () => {
      if (tween) {
        tween.kill() // This kills the animation and its associated ScrollTrigger
      }
    }
  }, []) // Empty dependency array ensures this runs once on mount and cleans up on unmount

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={footerRef} className='bg-darker py-8 relative overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <span className='text-2xl md:text-3xl font-bold tracking-tight text-neon-purple group-hover:text-neon-pink transition-colors duration-300'>
              <GlowText text='EM' intensity='strong' />
            </span>
          </div>

          <div className='mb-6 md:mb-0 text-center'>
            <p className='text-light/60 text-sm hover:text-light/80 transition-colors duration-300 ease-in-out'>&copy; {currentYear} Ethan McLean. All rights reserved.</p>
          </div>

          <div className='mb-6 md:mb-0'>
            <p className='text-light/60 text-sm hover:text-light/80 transition-colors duration-300 ease-in-out'>Projects coming soon...</p>
          </div>
        </div>
      </div>

      {/* Animated background effect */}
      <div className='absolute bottom-0 left-0 w-full h-10 bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-purple/20 animate-pulse-slow'></div>
    </footer>
  )
}

export default Footer
