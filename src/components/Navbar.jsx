import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import MouseTracker from './common/MouseTracker'
import GlowText from './common/GlowText'
import { useThemeManager, useNavScroll } from '../hooks'
import { DesktopNav, MobileNav } from './navbar/index.js'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { darkMode, toggleTheme } = useThemeManager()
  const navRef = useRef(null)
  const [clickedItems, setClickedItems] = useState({})

  const navItems = [
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Technologies', href: '#skills', type: 'scroll' },
    { name: 'Resume', href: '/assets/resume.pdf', type: 'pdf' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ]

  const { scrolled, activeSection } = useNavScroll(navItems)

  useEffect(() => {
    // Animation for navbar elements
    gsap.fromTo('.nav-link', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' })
    gsap.fromTo('.logo', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: 'elastic.out(1, 0.75)' })
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

    // Animate mobile menu
    if (!isMenuOpen) {
      gsap.fromTo('.mobile-nav-link', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.1 })
    }
  }

  // Function to toggle the clicked state for nav items
  const handleNavItemClick = itemName => {
    // Create a neon flash effect that disappears after 1.5 seconds
    setClickedItems(prev => ({
      ...prev,
      [itemName]: true,
    }))

    setTimeout(() => {
      setClickedItems(prev => ({
        ...prev,
        [itemName]: false,
      }))
    }, 1500)
  }

  return (
    <>
      <MouseTracker />
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/85 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(176,38,255,0.2)]' : 'bg-transparent py-5'}`}>
        <div className='container mx-auto px-4 sm:px-6'>
          <nav ref={navRef} className='flex justify-between items-center'>
            {/* Logo Section */}
            <a href='#home' className='logo flex items-center group z-10'>
              <span className='text-2xl md:text-3xl font-bold tracking-tight text-neon-purple group-hover:text-neon-pink transition-colors duration-300'>
                <GlowText text='Ethan McLean' intensity='strong' />
              </span>
            </a>

            {/* Desktop Navigation */}
            <DesktopNav navItems={navItems} activeSection={activeSection} darkMode={darkMode} toggleTheme={toggleTheme} handleNavItemClick={handleNavItemClick} clickedItems={clickedItems} />

            {/* Mobile Navigation Area (Button and Flyout Menu) */}
            <MobileNav navItems={navItems} activeSection={activeSection} darkMode={darkMode} toggleTheme={toggleTheme} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} handleNavItemClick={handleNavItemClick} clickedItems={clickedItems} setIsMenuOpen={setIsMenuOpen} />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
