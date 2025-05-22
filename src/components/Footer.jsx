import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import GlowText from './common/GlowText'
import useThemeManager from '../hooks/useThemeManager'

const Footer = () => {
  const footerRef = useRef(null)
  const { darkMode } = useThemeManager()

  useEffect(() => {
    const element = footerRef.current
    let tween

    // Import ScrollTrigger
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      // Register plugin
      gsap.registerPlugin(ScrollTrigger)

      if (element) {
        // Animation
        tween = gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: element,
              start: 'top bottom-=30px',
              once: true,
            },
          }
        )
      }
    })

    // Cleanup
    return () => {
      if (tween) {
        tween.kill()
      }
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={footerRef} className={`${darkMode ? 'bg-darker' : 'bg-white'} py-8 relative overflow-hidden w-full`}>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full'>
          <div className='mb-6 md:mb-0 md:w-1/4'>
            <span className='text-2xl md:text-3xl font-bold tracking-tight text-neon-purple group-hover:text-neon-pink transition-colors duration-300'>
              <GlowText text='EM' intensity='strong' />
            </span>
          </div>

          <div className='mb-6 md:mb-0 md:w-2/4 text-center'>
            <p className='text-light/60 text-sm hover:text-light/80 transition-colors duration-300 ease-in-out'>&copy; {currentYear} Ethan McLean. All rights reserved.</p>
          </div>

          <div className='mb-6 md:mb-0 md:w-1/4 md:text-right'>
            <p className='text-light/60 text-sm hover:text-light/80 transition-colors duration-300 ease-in-out'>Projects coming soon...</p>
          </div>
        </div>
      </div>

      {/* Background effect */}
      {darkMode && <div className='absolute bottom-0 left-0 w-full h-10 bg-gradient-to-r from-neon-purple/20 via-neon-pink/20 to-neon-purple/20 animate-pulse-slow'></div>}
    </footer>
  )
}

export default Footer
