import React from 'react'
import PropTypes from 'prop-types'

const ScrollArrow = ({ arrowRef, onClick, direction = 'down' }) => {
  const getPath = () => {
    if (direction === 'up') {
      return 'M17 11l-5-5-5 5M17 18l-5-5-5 5'
    }
    return 'M7 13l5 5 5-5M7 7l5 5 5-5'
  }

  return (
    <button ref={arrowRef} onClick={onClick} className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer bg-transparent border-0 p-0' aria-label={`Scroll ${direction}`}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#b026ff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d={getPath()} />
      </svg>
    </button>
  )
}

ScrollArrow.propTypes = {
  arrowRef: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['up', 'down']),
}

export default ScrollArrow
