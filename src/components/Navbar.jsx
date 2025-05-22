import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import MouseTracker from './common/MouseTracker'
import GlowText from './common/GlowText'
import useThemeManager from '../hooks/useThemeManager'
import useNavScroll from '../hooks/useNavScroll'

const Navbar = () => {
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
    // Animation for navbar elements - simplified for better performance
    gsap.fromTo('.nav-link', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 })
    gsap.fromTo('.logo', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8 })
  }, [])

  // Function to handle nav item clicks
  const handleNavItemClick = itemName => {
    setClickedItems(prev => ({ ...prev, [itemName]: true }))

    setTimeout(() => {
      setClickedItems(prev => ({ ...prev, [itemName]: false }))
    }, 1000)
  }

  return (
    <div className='navbar-wrapper'>
      <MouseTracker />
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darker/85 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(176,38,255,0.2)]' : 'bg-transparent py-5'}`}>
        <div className='container'>
          <nav ref={navRef} className='responsive-nav'>
            {/* Logo Section */}
            <a href='#home' className='logo flex items-center group z-10'>
              <span className='text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-neon-purple group-hover:text-neon-pink transition-colors duration-300'>
                <GlowText text='Ethan McLean' intensity='strong' />
              </span>
            </a>

            {/* Navigation Items */}
            <div className='nav-links'>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.type === 'pdf' ? '_blank' : undefined}
                  rel={item.type === 'pdf' ? 'noopener noreferrer' : undefined}
                  onClick={() => handleNavItemClick(item.name)}
                  className={`nav-link text-base md:text-lg font-medium transition-all duration-300 px-2 md:px-3
                    ${activeSection === item.name.toLowerCase() || (item.name === 'Technologies' && activeSection === 'technologies') ? 'text-neon-purple text-shadow-md' : 'text-light/90 hover:text-white'}
                  `}>
                  <GlowText text={item.name} intensity={clickedItems[item.name] ? 'strong' : 'white'} className={clickedItems[item.name] ? 'text-neon-purple animate-pulse' : 'text-white'} />
                </a>
              ))}

              {/* Theme Toggle Button */}
              <button onClick={toggleTheme} className='theme-toggle ml-2 md:ml-4 flex items-center justify-center transition-all duration-300' aria-label='Toggle theme'>
                <div className='relative w-8 h-8 md:w-9 md:h-9 flex items-center justify-center'>
                  {darkMode ? (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-yellow-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                  ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                    </svg>
                  )}
                </div>
                <span className='sr-only'>{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Add custom CSS using regular style tag instead of styled-jsx */}
      <style>
        {`
          .responsive-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            position: relative;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          @media screen and (max-width: 768px) {
            .responsive-nav {
              flex-direction: column;
              gap: 1rem;
              padding-top: 0.5rem;
            }

            .nav-links {
              width: 100%;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1.5rem;
            }

            .nav-link {
              padding: 0.5rem 0;
            }

            .theme-toggle {
              margin-left: 1rem;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Navbar
