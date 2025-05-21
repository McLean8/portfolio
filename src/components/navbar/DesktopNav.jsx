import React, { useState } from 'react'
import GlowText from '../common/GlowText'

const DesktopNav = ({ navItems, activeSection, darkMode, toggleTheme, handleNavItemClick, clickedItems }) => {
  const [hoverDesktopTheme, setHoverDesktopTheme] = useState(false)

  return (
    <div className='hidden md:flex items-center gap-6 justify-center'>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.type === 'pdf' ? '_blank' : undefined}
          rel={item.type === 'pdf' ? 'noopener noreferrer' : undefined}
          onClick={() => handleNavItemClick(item.name, item.type, item.href)}
          className={`nav-link relative text-xl font-medium transition-all duration-300 outline-none
            ${activeSection === item.name.toLowerCase() || (item.name === 'Technologies' && activeSection === 'technologies') ? 'text-neon-purple text-shadow-md' : 'text-light/90 hover:text-white'}
          `}>
          <span className='transition-all duration-300'>
            <GlowText text={item.name} intensity={clickedItems[item.name] ? 'strong' : 'white'} className={clickedItems[item.name] ? 'text-neon-purple animate-pulse' : 'text-white'} />
          </span>
        </a>
      ))}

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setHoverDesktopTheme(true)}
        onMouseLeave={() => setHoverDesktopTheme(false)}
        className='ml-6 flex items-center justify-center transition-all duration-300 outline-none group relative'
        style={{
          backgroundColor: 'transparent',
          transform: hoverDesktopTheme ? 'scale(1.1)' : 'scale(1)',
        }}
        aria-label='Toggle theme'>
        <div className='relative w-12 h-12 flex items-center justify-center overflow-hidden'>
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
  )
}

export default DesktopNav
