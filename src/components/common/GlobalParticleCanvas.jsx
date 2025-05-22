import React, { useEffect, useRef, memo } from 'react'

const GlobalParticleCanvas = () => {
  const canvasRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let particles = []

    // Helper function to calculate particle count based on screen size
    const getParticleCount = () => Math.min(Math.floor(window.innerWidth * 0.08), 100)

    // Optimize by defining particle class outside render function
    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25

        // Optimize color creation
        const isPurple = Math.random() > 0.4
        const purpleValue = Math.random() * 155 + 100
        const r = isPurple ? purpleValue : 255
        const g = isPurple ? 0 : Math.random() * 80
        const b = isPurple ? purpleValue : Math.random() * 176
        const alpha = Math.random() * 0.3 + 0.1

        this.color = `rgba(${r}, ${g}, ${b}, ${alpha})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Handle edge cases
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resizeCanvas = () => {
      const { innerWidth, innerHeight, devicePixelRatio = 1 } = window

      // Set canvas size with device pixel ratio for sharper rendering
      canvas.width = innerWidth * devicePixelRatio
      canvas.height = innerHeight * devicePixelRatio

      // Scale context to counter the pixel ratio scaling
      ctx.scale(devicePixelRatio, devicePixelRatio)

      // Set display size
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`

      // Reinitialize particles for new dimensions
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const count = getParticleCount()

      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      // Use a semi-transparent rect for trail effect instead of clearing
      ctx.fillStyle = 'rgba(5, 5, 5, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw all particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      animationIdRef.current = requestAnimationFrame(animate)
    }

    // Set up resize listener
    window.addEventListener('resize', resizeCanvas, false)

    // Initial setup
    resizeCanvas()
    animationIdRef.current = requestAnimationFrame(animate)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full -z-10 pointer-events-none' style={{ opacity: 0.7 }} />
}

// Use memo to prevent unnecessary re-renders
export default memo(GlobalParticleCanvas)
