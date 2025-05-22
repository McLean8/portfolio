import React from 'react'

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div onClick={scrollToTop} className='absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-neon-purple hover:text-neon-pink transition-colors duration-300 mt-6'>
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M17 11l-5-5-5 5M17 18l-5-5-5 5' />
      </svg>
    </div>
  )
}

export default ScrollToTopButton
