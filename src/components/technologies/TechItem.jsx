import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ tech, index }) => {
  return (
    <div
      className='tech-card relative bg-darker p-4 rounded-md border border-neon-purple/20 flex items-center justify-center 
      transition-all duration-500 ease-in-out
      hover:border-neon-purple group 
      hover:shadow-[0_0_20px_rgba(176,38,255,0.25)] 
      hover:scale-[1.02] hover:translate-y-[-2px]'
      data-index={index}>
      {/* Glowing border effect on hover */}
      <div className='absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 transition-opacity duration-500 ease-in-out'></div>

      <p className='text-lg text-center text-white transition-all duration-500 ease-in-out'>
        <span
          className='relative px-2 py-1 inline-block 
        transition-all duration-300 ease-in-out 
        hover:text-neon-purple group-hover:text-neon-purple/90 
        hover:shadow-[0_0_0_1px_rgba(176,38,255,0.2)] 
        hover:bg-neon-purple/5
        hover:rounded-md'>
          {tech}
        </span>
      </p>
    </div>
  )
}

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default TechItem
