import React from 'react'
import PropTypes from 'prop-types'
import GlowText from '../common/GlowText'

const HeroContent = ({ titleRef, subtitleRef }) => {
  return (
    <div className='container z-10 w-full px-4 sm:px-6 md:px-8'>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 ref={titleRef} className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight mb-6 md:mb-10 w-full'>
          <div className='inline-block'>
            <GlowText text="Hey, I'm" intensity='medium' />
          </div>{' '}
          <div className='group inline-block'>
            <span className='font-mono hero-name font-bold tracking-wider group-hover:text-neon-pink transition-colors duration-300'>
              <GlowText text='Ethan McLean' intensity='strong' />
            </span>
          </div>
        </h1>

        <div ref={subtitleRef} className='text-xl sm:text-2xl md:text-3xl text-light/90 text-center mb-10 md:mb-14 max-w-full leading-relaxed flex flex-wrap justify-center'>
          <div className='inline-block px-1'>
            <GlowText text='Software Developer ' intensity='medium' />
          </div>
          <div className='inline-block px-1'>
            with{' '}
            <span className='neon-text font-semibold'>
              <GlowText text='4 years ' intensity='medium' />
            </span>
          </div>
          <div className='inline-block px-1'>
            <GlowText text='of experience ' intensity='light' />
          </div>
          <div className='inline-block px-1'>
            <GlowText text='crafting elegant ' intensity='light' />
          </div>
          <div className='inline-block px-1'>
            <GlowText text='and efficient solutions.' intensity='light' />
          </div>
        </div>
      </div>
    </div>
  )
}

HeroContent.propTypes = {
  titleRef: PropTypes.object.isRequired,
  subtitleRef: PropTypes.object.isRequired,
}

export default HeroContent
