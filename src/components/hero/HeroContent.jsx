import React from 'react'
import PropTypes from 'prop-types'
import GlowText from '../common/GlowText'

const HeroContent = ({ titleRef, subtitleRef }) => {
  return (
    <div className='container z-10 w-full'>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 ref={titleRef} className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight mb-6 md:mb-10 w-full'>
          <GlowText text="Hey, I'm" intensity='medium' />{' '}
          <div className='group'>
            <span className='font-mono block sm:inline hero-name font-bold tracking-wider group-hover:text-neon-pink transition-colors duration-300'>
              <GlowText text='Ethan McLean' intensity='strong' />
            </span>
          </div>
        </h1>

        <p ref={subtitleRef} className='text-xl sm:text-2xl md:text-3xl text-light/90 text-center mb-10 md:mb-14 w-full px-4 leading-relaxed'>
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
