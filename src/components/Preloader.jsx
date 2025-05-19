import { useEffect, useState } from 'react'
import GlowText from './common/GlowText'

const Preloader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval
    let timeout

    // Simple counter from 0 to 100
    const startCounter = () => {
      let count = 0
      interval = setInterval(() => {
        count += 1
        setProgress(count)

        if (count >= 100) {
          clearInterval(interval)
          // Add a small delay at 100% before calling finishLoading
          setTimeout(() => {
            if (typeof finishLoading === 'function') {
              finishLoading()
            }
          }, 800) // Longer delay to appreciate the completed animation
        }
      }, 30) // Increment every 30ms (takes ~3 seconds to reach 100%)
    }

    // Start counter immediately
    startCounter()

    // Failsafe: if anything goes wrong, finish loading after 5 seconds
    timeout = setTimeout(() => {
      if (typeof finishLoading === 'function') {
        finishLoading()
      }
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [finishLoading])

  // Logo fill colors
  const emptyColor = '#222222' // Dark gray/empty color
  const fillColor = '#b026ff' // Neon purple/filled color

  return (
    <div className='fixed inset-0 bg-darker z-50 flex flex-col items-center justify-center overflow-hidden'>
      {/* Background glow effect */}
      <div
        className='absolute inset-0 opacity-30'
        style={{
          background: `radial-gradient(circle at center, rgba(176, 38, 255, 0.15), transparent 70%)`,
        }}
      />

      {/* Logo with fill effect */}
      <div className='mb-12 relative'>
        {/* Base logo (empty/unfilled) */}
        <div className='text-6xl md:text-8xl font-bold font-mono tracking-wider' style={{ color: emptyColor }}>
          EM<span className='text-neon-pink'></span>
        </div>

        {/* Filling logo overlay */}
        <div
          className='text-6xl md:text-8xl font-bold font-mono tracking-wider absolute top-0 left-0 overflow-hidden'
          style={{
            color: fillColor,
            width: `${progress}%`,
            transition: 'width 0.15s ease-out',
            textShadow: `0 0 15px rgba(176, 38, 255, ${(progress / 100) * 0.8})`,
          }}>
          EM<span className='text-neon-pink'></span>
        </div>
      </div>

      {/* Loading text */}
      <div className='mb-8 text-2xl text-white'>
        <GlowText text={progress < 100 ? 'Loading...' : 'Ready!'} intensity='white' className={progress === 100 ? 'animate-pulse' : ''} />
      </div>

      {/* Progress bar */}
      <div className='w-80 md:w-96 flex flex-col items-center'>
        <div className='w-full h-2 bg-dark/80 rounded-full overflow-hidden mb-4 relative'>
          <div
            className='h-full bg-neon-purple'
            style={{
              width: `${progress}%`,
              transition: 'width 0.15s ease-out',
              boxShadow: `0 0 10px rgba(176, 38, 255, ${(progress / 100) * 0.8})`,
            }}
          />

          {/* Glow overlay for progress bar */}
          <div
            className='absolute top-0 left-0 h-full pointer-events-none'
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, transparent, rgba(176, 38, 255, 0.6))',
              filter: 'blur(4px)',
              opacity: 0.6,
              transition: 'width 0.15s ease-out',
            }}
          />
        </div>

        {/* Percentage counter */}
        <div className='text-white text-xl font-mono'>
          <GlowText text={`${progress}%`} intensity='white' />
        </div>
      </div>
    </div>
  )
}

export default Preloader
