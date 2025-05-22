import React from 'react'

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div onClick={scrollToTop} className='flex justify-center text-neon-purple hover:text-neon-pink transition-colors duration-300 cursor-pointer'>
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M17 11l-5-5-5 5M17 18l-5-5-5 5' />
      </svg>
    </div>
  )
}

export default ScrollToTopButton
