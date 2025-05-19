import React from 'react'
import PropTypes from 'prop-types'

/**
 * Animated scroll button that directs users to scroll to a specific section
 */
const ScrollButton = ({ btnRef }) => {
  const scrollToAbout = () => {
    const about = document.getElementById('about')
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={btnRef} className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
      <button onClick={scrollToAbout} className='text-light/50 hover:text-neon-purple transition-colors duration-300' aria-label='Scroll to about section'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3' />
        </svg>
      </button>
    </div>
  )
}

ScrollButton.propTypes = {
  btnRef: PropTypes.object,
}

export default ScrollButton
