import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlowText from './GlowText'

gsap.registerPlugin(ScrollTrigger)

const Technologies = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const arrowRef = useRef(null)
  const techRefs = useRef([])

  // Technologies grouped by category
  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'SQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Figma', 'Webpack'],
    },
  ]

  // Setup refs for each tech item
  useEffect(() => {
    techRefs.current = Array(technologies.reduce((total, tech) => total + tech.items.length, 0))
      .fill()
      .map(() => React.createRef())
  }, [])

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    )

    // Container animation
    gsap.fromTo(
      containerRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    )

    // Arrow bounce animation
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // Setup intersection observer for tech cards with staggered reveal
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          const delay = parseInt(element.dataset.index) * 0.1

          // Apply animations with staggered delay
          gsap.fromTo(
            element,
            {
              y: 20,
              opacity: 0,
              scale: 0.95,
              rotate: -2,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.6,
              delay: delay,
              ease: 'power3.out',
              onComplete: () => {
                // Add a subtle pulse effect to make it more interesting
                gsap.to(element, {
                  boxShadow: '0 0 20px rgba(176, 38, 255, 0.4)',
                  duration: 1.5,
                  repeat: 1,
                  yoyo: true,
                })
              },
            }
          )

          // Stop observing once animated
          observer.unobserve(element)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    // Start observing each tech card
    const techCards = document.querySelectorAll('.tech-card')
    techCards.forEach(card => observer.observe(card))

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      techCards.forEach(card => observer.unobserve(card))
    }
  }, [])

  // Handle arrow click to scroll to next section
  const scrollToNext = () => {
    const contact = document.getElementById('contact')
    if (contact) {
      // Create a flashy arrow animation before scrolling
      gsap
        .timeline()
        .to(arrowRef.current, {
          y: -10,
          scale: 1.2,
          opacity: 0.8,
          duration: 0.2,
          ease: 'power2.in',
        })
        .to(arrowRef.current, {
          y: 30,
          scale: 0.5,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            contact.scrollIntoView({ behavior: 'smooth' })
          },
        })
    }
  }

  return (
    <section id='skills' ref={sectionRef} className='min-h-screen flex flex-col justify-center py-24 bg-dark relative'>
      {/* Page transition overlay */}
      <div className='page-transition-overlay fixed inset-0 bg-gradient-to-b from-neon-purple/30 to-darker pointer-events-none z-50 opacity-0 transform translate-y-full'></div>

      <div className='container mx-auto px-4 md:px-12 max-w-5xl'>
        <div className='flex flex-col gap-12'>
          {/* Section header with number */}
          <h2 ref={titleRef} className='flex items-center font-mono text-xl md:text-2xl text-neon-purple mb-2'>
            <span className='font-mono mr-4'>02.</span>
            <span className='font-semibold'>
              <GlowText text='Technologies' intensity='strong' />
            </span>
            <div className='h-px bg-neon-purple/30 ml-6 flex-grow'></div>
          </h2>

          {/* Tech stack container */}
          <div ref={containerRef} className='grid gap-12'>
            {technologies.map((techGroup, groupIndex) => (
              <div key={groupIndex} className='grid gap-6'>
                <h3 className='text-2xl text-neon-pink font-semibold'>
                  <GlowText text={techGroup.category} intensity='medium' />
                </h3>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                  {techGroup.items.map((tech, techIndex) => {
                    const globalIndex = groupIndex * 10 + techIndex
                    return (
                      <div
                        key={techIndex}
                        className='tech-card relative bg-darker p-4 rounded-md border border-neon-purple/20 flex items-center justify-center 
                        transition-all duration-500 ease-in-out
                        hover:border-neon-purple group 
                        hover:shadow-[0_0_20px_rgba(176,38,255,0.25)] 
                        hover:scale-[1.02] hover:translate-y-[-2px]'
                        data-index={globalIndex}>
                        {/* Glowing border effect on hover */}
                        <div className='absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 transition-opacity duration-500 ease-in-out'></div>

                        <p className='text-lg text-center text-white transition-all duration-500 ease-in-out'>
                          <span
                            className='relative px-2 py-1 inline-block 
                          transition-all duration-300 ease-in-out 
                          hover:text-neon-purple group-hover:text-neon-purple/90 
                          hover:shadow-[0_0_0_1px_rgba(176,38,255,0.2)] 
                          hover:bg-neon-purple/5
                          hover:rounded-md'>
                            {tech}
                          </span>
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div ref={arrowRef} onClick={scrollToNext} className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#b026ff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M7 13l5 5 5-5M7 7l5 5 5-5' />
        </svg>
      </div>
    </section>
  )
}

export default Technologies
