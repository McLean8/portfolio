import { useEffect, useState, useRef } from 'react'

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const positionRef = useRef({ x: 0, y: 0 })
  const requestRef = useRef(null)
  const isMoving = useRef(false)

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = e => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      isMoving.current = true
    }

    // Update state in animation frame
    const animateGradient = () => {
      if (isMoving.current) {
        // Check for significant movement
        const dx = Math.abs(positionRef.current.x - position.x)
        const dy = Math.abs(positionRef.current.y - position.y)

        if (dx > 5 || dy > 5) {
          setPosition(positionRef.current)
        }
        isMoving.current = false
      }
      requestRef.current = requestAnimationFrame(animateGradient)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    requestRef.current = requestAnimationFrame(animateGradient)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
  }, [position])

  return (
    <div
      className='pointer-events-none fixed inset-0 z-30'
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(176, 38, 255, 0.15), transparent 80%)`,
        transition: 'background 0.2s linear',
      }}
    />
  )
}

export default MouseTracker
