import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import MouseTracker from './MouseTracker'
import GlowText from './GlowText'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(true)
  const navRef = useRef(null)

  // State to track clicked nav items
  const [clickedItems, setClickedItems] = useState({})

  const navItems = [
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Technologies', href: '#skills', type: 'scroll' },
    { name: 'Resume', href: '/assets/resume.pdf', type: 'pdf' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ]

  useEffect(() => {
    // Initialize theme from localStorage or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setDarkMode(false)
    } else {
      // Default to dark mode if no preference is saved
      setDarkMode(true)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section based on scroll position
      const sections = navItems
        .filter(item => item.type === 'scroll')
        .map(item => {
          // Map 'Technologies' to 'skills' ID
          const id = item.name === 'Technologies' ? 'skills' : item.name.toLowerCase()
          return document.getElementById(id)
        })
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && scrollPosition >= section.offsetTop) {
          // Handle 'Technologies' section which has ID 'skills'
          if (section.id === 'skills') {
            setActiveSection('technologies')
          } else {
            setActiveSection(section.id)
          }
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Animation for navbar elements
    gsap.fromTo('.nav-link', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' })

    gsap.fromTo('.logo', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: 'elastic.out(1, 0.75)' })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Apply theme changes when darkMode state changes
    document.documentElement.classList.toggle('light-mode', !darkMode)

    // Save theme preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

    // Animate mobile menu
    if (!isMenuOpen) {
      gsap.fromTo('.mobile-nav-link', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.1 })
    }
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  // Function to toggle the clicked state for nav items
  const handleNavItemClick = (itemName, itemType, itemHref) => {
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

    // If it's a PDF, don't do anything else (the link will handle it)
    // For scroll types, we'll let the href handle it
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
            <div className='hidden md:flex items-center gap-6 justify-center'>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.type === 'pdf' ? '_blank' : undefined}
                  rel={item.type === 'pdf' ? 'noopener noreferrer' : undefined}
                  onClick={() => handleNavItemClick(item.name, item.type, item.href)}
                  className={`nav-link relative text-xl font-medium transition-all duration-300 outline-none hover:text-shadow-sm
                    ${activeSection === item.name.toLowerCase() || (item.name === 'Technologies' && activeSection === 'technologies') ? 'text-neon-purple text-shadow-md' : 'text-light/90 hover:text-white hover:text-shadow-sm'}
                  `}>
                  <span className='transition-all duration-300 hover:text-shadow-md'>
                    <GlowText text={item.name} intensity={clickedItems[item.name] ? 'strong' : 'white'} className={clickedItems[item.name] ? 'text-neon-purple animate-pulse' : 'text-white'} />
                  </span>
                </a>
              ))}

              {/* Theme Toggle Button */}
              <button onClick={toggleTheme} className='ml-6 w-12 h-12 rounded-full bg-darker/40 border border-neon-purple/20 backdrop-blur-md flex items-center justify-center hover:bg-darker/60 transition-all duration-500 hover:scale-110 outline-none group relative' aria-label='Toggle theme'>
                <div className='relative w-full h-full flex items-center justify-center overflow-hidden'>
                  <div className={`absolute transition-all duration-500 transform ${darkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-yellow-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                  </div>
                  <div className={`absolute transition-all duration-500 transform ${!darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                    </svg>
                  </div>
                </div>
                <span className='sr-only'>{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                <span className='absolute top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-light/70 whitespace-nowrap'>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className='md:hidden flex items-center'>
              {/* Mobile Theme Toggle */}
              <button onClick={toggleTheme} className='mr-4 w-10 h-10 rounded-md bg-darker/40 border border-neon-purple/20 backdrop-blur-md flex items-center justify-center hover:bg-darker/60 transition-all duration-500 hover:scale-110 focus:outline-none group relative' aria-label='Toggle theme'>
                <div className='relative w-full h-full flex items-center justify-center overflow-hidden'>
                  <div className={`absolute transition-all duration-500 transform ${darkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-yellow-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                  </div>
                  <div className={`absolute transition-all duration-500 transform ${!darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                    </svg>
                  </div>
                </div>
                <span className='sr-only'>{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                <span className='absolute right-0 top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-light/70 whitespace-nowrap bg-darker/80 px-2 py-1 rounded'>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              {/* Menu Toggle Button */}
              <button className='flex items-center justify-center w-10 h-10 rounded-md bg-darker/40 border border-neon-purple/20 backdrop-blur-md outline-none hover:bg-darker/60 transition-colors duration-300' onClick={toggleMenu} aria-label='Toggle menu'>
                <div className='w-5 h-5 relative'>
                  <span className={`absolute block w-5 h-0.5 bg-light transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0.5'}`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-light transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-2'}`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-light transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-3.5'}`}></span>
                </div>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-[65px] left-3 right-3 bg-darker/90 backdrop-blur-lg rounded-2xl border border-neon-purple/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out overflow-hidden 
            ${isMenuOpen ? 'max-h-[400px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
          `}>
          <div className='px-4 py-6 flex flex-col'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.type === 'pdf' ? '_blank' : undefined}
                rel={item.type === 'pdf' ? 'noopener noreferrer' : undefined}
                onClick={() => {
                  handleNavItemClick(item.name, item.type, item.href)
                  setIsMenuOpen(false)
                }}
                className={`mobile-nav-link my-2 py-3 px-4 rounded-xl flex items-center transition-all duration-300 outline-none
                  ${activeSection === item.name.toLowerCase() || (item.name === 'Technologies' && activeSection === 'technologies') ? 'text-neon-purple font-medium text-shadow-md' : 'text-light/80 hover:text-white hover:text-shadow-sm'}
                `}>
                <span className='text-xl font-medium transition-all duration-300'>
                  <GlowText text={item.name} intensity={clickedItems[item.name] ? 'strong' : 'white'} className={clickedItems[item.name] ? 'text-neon-purple animate-pulse' : 'text-white'} />
                  {item.type === 'pdf' && (
                    <span className='ml-1 text-xs align-top'>
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 inline-block' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </span>
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
