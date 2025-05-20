import React from 'react'
import PropTypes from 'prop-types'
import GlowText from '../common/GlowText'

const HeroContent = ({ titleRef, subtitleRef }) => {
  return (
    <div className='container mx-auto px-4 sm:px-6 z-10'>
      <div className='flex flex-col items-center justify-center max-w-5xl mx-auto'>
        <h1 ref={titleRef} className='text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight mb-10'>
          <GlowText text="Hey, I'm" intensity='medium' />{' '}
          <div className='group'>
            <span className='font-mono block sm:inline hero-name font-bold tracking-wider group-hover:text-neon-pink transition-colors duration-300'>
              <GlowText text='Ethan McLean' intensity='strong' />
            </span>
          </div>
        </h1>

        <p ref={subtitleRef} className='text-2xl md:text-3xl text-light/90 text-center mb-14 max-w-3xl mx-auto leading-relaxed'>
          <GlowText text='Software Developer' intensity='medium' /> with{' '}
          <span className='neon-text font-semibold'>
            <GlowText text='4 years' intensity='medium' />
          </span>{' '}
          <GlowText text='of experience crafting elegant and efficient solutions.' intensity='light' />
        </p>
      </div>
    </div>
  )
}

HeroContent.propTypes = {
  titleRef: PropTypes.object.isRequired,
  subtitleRef: PropTypes.object.isRequired,
}

export default HeroContent
