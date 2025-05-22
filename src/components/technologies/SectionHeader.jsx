import React from 'react'
import PropTypes from 'prop-types'
import GlowText from '../common/GlowText'

const SectionHeader = ({ title, titleRef }) => {
  return (
    <h2 ref={titleRef} className='flex items-center font-mono text-2xl md:text-3xl lg:text-4xl text-neon-purple mb-2'>
      <span className='font-semibold'>
        <GlowText text={title} intensity='strong' />
      </span>
      <div className='h-px bg-neon-purple/30 ml-6 flex-grow'></div>
    </h2>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  titleRef: PropTypes.object,
}

export default SectionHeader
