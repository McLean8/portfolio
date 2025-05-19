import React from 'react'
import PropTypes from 'prop-types'

/**
 * A bouncing scroll arrow that directs users to scroll down
 */
const ScrollArrow = ({ arrowRef, onClick }) => (
  <div ref={arrowRef} onClick={onClick} className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer' aria-label='Scroll to next section'>
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#b026ff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M7 13l5 5 5-5M7 7l5 5 5-5' />
    </svg>
  </div>
)

ScrollArrow.propTypes = {
  arrowRef: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ScrollArrow
