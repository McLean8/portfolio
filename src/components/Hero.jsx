import React from 'react'
import useHeroAnimations from '../hooks/useHeroAnimations'
import ParticleCanvas from './hero/ParticleCanvas'
import HeroContent from './hero/HeroContent'
import ScrollButton from './hero/ScrollButton'

const Hero = () => {
  const { heroRef, titleRef, subtitleRef, btnRef, canvasRef } = useHeroAnimations()

  return (
    <section ref={heroRef} id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Particle background */}
      <ParticleCanvas canvasRef={canvasRef} />

      {/* Background overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-darker -z-5'></div>

      {/* Content */}
      <HeroContent titleRef={titleRef} subtitleRef={subtitleRef} />

      {/* Scroll button */}
      <ScrollButton btnRef={btnRef} />
    </section>
  )
}

export default Hero
