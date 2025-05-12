import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LetterHover from './LetterHover'
import GlowText from './GlowText'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imgRef = useRef(null)
  const arrowRef = useRef(null)

  // Create a single ref for the paragraph containing the keywords
  const paragraphRef = useRef(null)

  // Create refs for words that will be highlighted
  const passionateRef = useRef(null)
  const responsiveRef = useRef(null)
  const userFriendlyRef = useRef(null)
  const performanceRef = useRef(null)
  const cleanRef = useRef(null)

  // State to track highlighted words
  const [highlightedWords, setHighlightedWords] = useState({
    passionate: false,
    responsive: false,
    userFriendly: false,
    performance: false,
    clean: false,
  })

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

    // Content animation
    gsap.fromTo(
      contentRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      }
    )

    // Image animation
    gsap.fromTo(
      imgRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: imgRef.current,
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

    // Setup a single intersection observer for the paragraph
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px',
      threshold: 0.5,
    }

    // Order of keywords to highlight sequentially
    const highlightSequence = ['passionate', 'responsive', 'userFriendly', 'performance', 'clean']

    // Delay between each highlight (in ms)
    const highlightDelay = 800

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the sequential highlighting when paragraph is visible
          highlightSequence.forEach((word, index) => {
            setTimeout(() => {
              setHighlightedWords(prev => ({
                ...prev,
                [word]: true,
              }))
            }, index * highlightDelay)
          })

          // Stop observing once triggered
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Start observing the paragraph
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current)
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())

      // Cleanup observer
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current)
      }
    }
  }, [])

  // Handle arrow click to scroll to next section
  const scrollToNext = () => {
    const skills = document.getElementById('skills')
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Style for highlighted text
  const highlightStyle = {
    color: 'var(--neon-purple)',
    textShadow: '0 0 10px var(--neon-purple), 0 0 20px var(--neon-purple)',
    transition: 'all 0.5s ease-in-out',
  }

  return (
    <section id='about' ref={sectionRef} className='min-h-screen flex flex-col justify-center py-24 bg-dark relative'>
      <div className='container mx-auto px-4 md:px-12 max-w-5xl'>
        <div className='flex flex-col gap-8'>
          {/* Section header with number */}
          <h2 ref={titleRef} className='flex items-center font-mono text-xl md:text-2xl text-neon-purple mb-2'>
            <span className='font-mono mr-4'>01.</span>
            <span className='font-semibold'>
              <GlowText text='About Me' intensity='strong' />
            </span>
            <div className='h-px bg-neon-purple/30 ml-6 flex-grow'></div>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-start'>
            {/* Content */}
            <div ref={contentRef} className='md:col-span-7 order-2 md:order-1'>
              <div ref={paragraphRef} className='font-mono space-y-5 text-light/75'>
                <p className='text-base leading-relaxed'>
                  I'm a <span>passionate and versatile full-stack developer</span> who loves creating{' '}
                  <span ref={responsiveRef} style={highlightedWords.responsive ? highlightStyle : {}} className='transition-all duration-500'>
                    responsive, high-quality
                  </span>{' '}
                  websites and web apps that look great and just work.
                </p>

                <p className='text-base leading-relaxed'>
                  I focus on building{' '}
                  <span ref={userFriendlyRef} style={highlightedWords.userFriendly ? highlightStyle : {}} className='transition-all duration-500'>
                    pixel-perfect, user-friendly interfaces
                  </span>{' '}
                  with a strong eye for <span>design and performance</span>. Whether it's a sleek marketing site or a full-scale application, I enjoy bringing ideas to life with{' '}
                  <span ref={cleanRef} style={highlightedWords.clean ? highlightStyle : {}} className='transition-all duration-500'>
                    clean, modern code
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Image container */}
            <div ref={imgRef} className='md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end'>
              <div className='relative group'>
                <div className='absolute -inset-1.5 bg-neon-purple/20 rounded-md blur opacity-20 group-hover:opacity-30 transition duration-500'></div>
                <div className='relative max-w-xs border-2 border-neon-purple/30 rounded-md overflow-hidden'>
                  <div className='absolute inset-0 bg-neon-purple/10 group-hover:bg-neon-purple/5 transition duration-300'></div>

                  {/* Code editor themed illustration */}
                  <div className='bg-darker p-6 w-full min-h-[400px] flex flex-col'>
                    {/* Code editor header */}
                    <div className='flex items-center mb-4'>
                      <div className='flex space-x-2'>
                        <div className='w-3 h-3 rounded-full bg-red-500'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                        <div className='w-3 h-3 rounded-full bg-green-500'></div>
                      </div>
                      <div className='ml-4 px-3 py-1 rounded bg-dark text-xs text-neon-purple/80 font-mono'>index.js</div>
                    </div>

                    {/* Code content */}
                    <div className='font-mono text-xs leading-relaxed text-left flex-1'>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>1</span>
                        <span className='text-blue-400'>import</span>
                        <span className='text-white'>&nbsp;React&nbsp;</span>
                        <span className='text-blue-400'>from</span>
                        <span className='text-green-300'>&nbsp;'react'</span>
                        <span className='text-white'>;</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>2</span>
                        <span className='text-white'></span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>3</span>
                        <span className='text-purple-400'>const</span>
                        <span className='text-yellow-300'>&nbsp;Portfolio</span>
                        <span className='text-white'>&nbsp;= ()&nbsp;</span>
                        <span className='text-purple-400'>=&gt;</span>
                        <span className='text-white'>&nbsp;{`{`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>4</span>
                        <span className='text-white pl-4'>
                          <span className='text-purple-400'>return</span>
                          <span className='text-white'>&nbsp;(</span>
                        </span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>5</span>
                        <span className='text-white pl-8'>{`<`}</span>
                        <span className='text-neon-pink'>div</span>
                        <span className='text-white'>{`>`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>6</span>
                        <span className='text-white pl-12'>{`<`}</span>
                        <span className='text-neon-pink'>h1</span>
                        <span className='text-white'>{`>`}</span>
                        <span className='text-neon-purple'>Clean&nbsp;Code</span>
                        <span className='text-white'>{`</`}</span>
                        <span className='text-neon-pink'>h1</span>
                        <span className='text-white'>{`>`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>7</span>
                        <span className='text-white pl-12'>{`<`}</span>
                        <span className='text-neon-pink'>p</span>
                        <span className='text-white'>{`>`}</span>
                        <span className='text-gray-300'>Beautiful&nbsp;Interfaces</span>
                        <span className='text-white'>{`</`}</span>
                        <span className='text-neon-pink'>p</span>
                        <span className='text-white'>{`>`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>8</span>
                        <span className='text-white pl-12'>{`<`}</span>
                        <span className='text-neon-pink'>p</span>
                        <span className='text-white'>{`>`}</span>
                        <span className='text-gray-300'>Responsive&nbsp;Design</span>
                        <span className='text-white'>{`</`}</span>
                        <span className='text-neon-pink'>p</span>
                        <span className='text-white'>{`>`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>9</span>
                        <span className='text-white pl-12'>{`<`}</span>
                        <span className='text-neon-pink'>button</span>
                        <span className='text-amber-300'>&nbsp;className</span>
                        <span className='text-white'>=</span>
                        <span className='text-green-300'>"neon-glow"</span>
                        <span className='text-white'>{`>`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>10</span>
                        <span className='text-white pl-16 text-gray-300'>Explore&nbsp;Projects</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>11</span>
                        <span className='text-white pl-12'>{`</`}</span>
                        <span className='text-neon-pink'>button</span>
                        <span className='text-white'>{`>`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>12</span>
                        <span className='text-white pl-8'>{`</`}</span>
                        <span className='text-neon-pink'>div</span>
                        <span className='text-white'>{`>`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>13</span>
                        <span className='text-white pl-4'>);</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>14</span>
                        <span className='text-white'>{`};`}</span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>15</span>
                        <span className='text-white'></span>
                      </div>
                      <div className='flex'>
                        <span className='text-gray-500 w-6 select-none'>16</span>
                        <span className='text-blue-400'>export</span>
                        <span className='text-blue-400'>&nbsp;default</span>
                        <span className='text-yellow-300'>&nbsp;Portfolio</span>
                        <span className='text-white'>;</span>
                      </div>
                    </div>

                    {/* Cursor effect */}
                    <div className='h-4 w-2 bg-neon-purple/70 animate-pulse absolute top-[205px] left-[143px]'></div>
                  </div>

                  {/* Overlay effect */}
                  <div className='absolute inset-0 bg-gradient-to-br from-transparent to-darker/30 pointer-events-none'></div>
                </div>
              </div>
            </div>
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

export default About
