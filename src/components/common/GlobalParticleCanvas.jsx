import React, { useEffect, useRef } from 'react'

const GlobalParticleCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let animationId = null

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
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        // Use the neon-purple and neon-pink color palette
        const purpleValue = Math.random() * 155 + 100 // Range from 100-255 for purple
        const isPurple = Math.random() > 0.4 // 60% chance for purple, 40% for pink
        const r = isPurple ? purpleValue : 255
        const g = isPurple ? 0 : Math.random() * 80
        const b = isPurple ? purpleValue : Math.random() * 176
        this.color = `rgba(${r}, ${g}, ${b}, ${Math.random() * 0.3 + 0.1})`
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
      // Adjust particle density based on screen size
      const numberOfParticles = Math.min(Math.floor(window.innerWidth * 0.08), 120)

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add slight transparency to create trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      animationId = requestAnimationFrame(animate)
    }

    initParticles()
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full -z-10 pointer-events-none' style={{ opacity: 0.7 }} />
}

export default GlobalParticleCanvas
