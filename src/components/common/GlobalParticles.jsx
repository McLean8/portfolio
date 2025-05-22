import React from 'react'

const GlobalParticles = () => {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      <div className='absolute w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-neon-purple/10 blur-3xl animate-float top-1/4 left-1/4'></div>
      <div className='absolute w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full bg-neon-pink/10 blur-3xl animate-float-delayed top-3/4 right-1/4'></div>
      <div className='absolute w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-neon-purple/20 blur-2xl animate-float-slow bottom-1/4 right-1/4'></div>
      <div className='absolute hidden lg:block w-36 h-36 rounded-full bg-neon-purple/15 blur-2xl animate-float-reverse top-1/2 left-1/3'></div>
      <div className='absolute hidden md:block w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-neon-pink/15 blur-xl animate-pulse-slow bottom-1/3 right-1/3'></div>
    </div>
  )
}

export default GlobalParticles
