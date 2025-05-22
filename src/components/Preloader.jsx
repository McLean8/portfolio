import { useEffect, useState, useRef } from 'react'
import GlowText from './common/GlowText'

const Preloader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0)
  const requestRef = useRef(null)
  const startTimeRef = useRef(null)
  const animDuration = 2500

  useEffect(() => {
    const animate = timestamp => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current

      // Calculate progress
      const nextProgress = Math.min(Math.floor((elapsed / animDuration) * 100), 100)

      if (nextProgress !== progress) {
        setProgress(nextProgress)
      }

      if (nextProgress < 100) {
        requestRef.current = requestAnimationFrame(animate)
      } else {
        finishLoading?.()
      }
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [finishLoading, progress])

  return (
    <div className='fixed inset-0 bg-darker z-50 flex flex-col items-center justify-center'>
      {/* Logo */}
      <div className='mb-12 relative'>
        {/* Base */}
        <div className='text-6xl md:text-8xl font-bold font-mono tracking-wider' style={{ color: '#222222' }}>
          EM
        </div>

        {/* Filling overlay */}
        <div
          className='text-6xl md:text-8xl font-bold font-mono tracking-wider absolute top-0 left-0 overflow-hidden'
          style={{
            color: '#b026ff',
            width: `${progress}%`,
            transition: 'width 0.1s linear',
            textShadow: `0 0 15px rgba(176, 38, 255, ${(progress / 100) * 0.8})`,
          }}>
          EM
        </div>
      </div>

      {/* Loading text */}
      <div className='mb-8 text-2xl text-white'>
        <GlowText text={progress < 100 ? 'Loading...' : 'Ready!'} intensity='white' className={progress === 100 ? 'animate-pulse' : ''} />
      </div>

      {/* Progress bar */}
      <div className='w-80 md:w-96 flex flex-col items-center'>
        <div className='w-full h-2 bg-dark/80 rounded-full overflow-hidden mb-4'>
          <div
            className='h-full bg-neon-purple'
            style={{
              width: `${progress}%`,
              transition: 'width 0.1s linear',
            }}
          />
        </div>

        {/* Percentage */}
        <div className='text-white text-xl font-mono'>
          <GlowText text={`${progress}%`} intensity='white' />
        </div>
      </div>
    </div>
  )
}

export default Preloader
