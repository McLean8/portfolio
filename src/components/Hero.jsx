import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import LetterHover from './LetterHover'
import GlowText from './GlowText'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const btnRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline()

    tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.2).fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.5).fromTo(btnRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.7)

    // Particle animation
    const canvas = canvasRef.current
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
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section ref={heroRef} id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full -z-10'></canvas>

      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-darker to-dark/70 -z-5'></div>

      <div className='container mx-auto px-4 sm:px-6 z-10'>
        <div className='flex flex-col items-center justify-center max-w-5xl mx-auto'>
          <h1 ref={titleRef} className='text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight mb-10'>
            <GlowText text="Hey, I'm" intensity='medium' />{' '}
            <div className='group'>
              <span className='font-mono block sm:inline hero-name font-bold tracking-wider group-hover:text-neon-pink transition-colors duration-300'>
                <GlowText text='Ethan McLean' intensity='strong' />
              </span>
            </div>
          </h1>

          <p ref={subtitleRef} className='text-2xl md:text-3xl text-light/90 text-center mb-14 max-w-3xl mx-auto leading-relaxed'>
            <GlowText text='Software Developer' intensity='medium' /> with{' '}
            <span className='neon-text font-semibold'>
              <GlowText text='4 years' intensity='medium' />
            </span>{' '}
            <GlowText text='of experience crafting elegant and efficient solutions.' intensity='light' />
          </p>
        </div>
      </div>

      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <a href='#about' className='text-light/50 hover:text-neon-purple transition-colors duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3' />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
