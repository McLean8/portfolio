import React, { useState } from 'react'
import GlowText from '../common/GlowText'

const MobileNav = ({ navItems, activeSection, darkMode, toggleTheme, isMenuOpen, toggleMenu, handleNavItemClick, clickedItems, setIsMenuOpen }) => {
  const [hoverMobileTheme, setHoverMobileTheme] = useState(false)

  return (
    <>
      {/* Mobile Navigation Button Area */}
      <div className='md:hidden flex items-center'>
        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          onMouseEnter={() => setHoverMobileTheme(true)}
          onMouseLeave={() => setHoverMobileTheme(false)}
          className='mr-4 flex items-center justify-center transition-all duration-300 focus:outline-none group relative'
          style={{
            backgroundColor: 'transparent',
            transform: hoverMobileTheme ? 'scale(1.1)' : 'scale(1)',
          }}
          aria-label='Toggle theme'>
          <div className='relative w-10 h-10 flex items-center justify-center overflow-hidden'>
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
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className='flex items-center justify-center transition-all duration-300 focus:outline-none' aria-label='Toggle menu' aria-expanded={isMenuOpen}>
          <div className='relative w-10 h-10 flex items-center justify-center'>
            <div className={`absolute transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}>
              <div className='w-6 h-0.5 bg-light/90'></div>
            </div>
            <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
              <div className='w-6 h-0.5 bg-light/90'></div>
            </div>
            <div className={`absolute transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}>
              <div className='w-6 h-0.5 bg-light/90'></div>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
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
                setIsMenuOpen(false) // Close menu on item click
              }}
              className={`mobile-nav-link my-2 py-3 px-4 rounded-xl flex items-center transition-all duration-300 outline-none
                ${activeSection === item.name.toLowerCase() || (item.name === 'Technologies' && activeSection === 'technologies') ? 'text-neon-purple font-medium text-shadow-md' : 'text-light/80 hover:text-white'}
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
    </>
  )
}

export default MobileNav
