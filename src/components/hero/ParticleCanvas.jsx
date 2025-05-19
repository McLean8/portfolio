import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * A canvas component that renders animated particles for the hero background
 */
const ParticleCanvas = ({ canvasRef }) => {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(${Math.random() * 100 + 100}, 0, ${Math.random() * 155 + 100}, ${Math.random() * 0.5 + 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const numberOfParticles = Math.min(Math.floor(window.innerWidth * 0.1), 150)

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      requestAnimationFrame(animate)
    }

    initParticles()
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [canvasRef])

  return <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full -z-10'></canvas>
}

ParticleCanvas.propTypes = {
  canvasRef: PropTypes.object.isRequired,
}

export default ParticleCanvas
