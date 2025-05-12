import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlowText from './GlowText'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)

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

    // Form animation
    gsap.fromTo(
      formRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the form data to a server
      setFormSubmitting(false)
      setFormSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false)
        setFormState({
          name: '',
          email: '',
          message: '',
        })
      }, 3000)
    }, 1500)
  }

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section id='contact' ref={sectionRef} className='min-h-screen flex flex-col justify-center py-24 bg-darker relative overflow-hidden'>
      {/* Animated particles */}
      <div className='absolute w-40 h-40 rounded-full bg-neon-purple/10 blur-3xl particle-1'></div>
      <div className='absolute w-56 h-56 rounded-full bg-neon-pink/10 blur-3xl particle-2'></div>
      <div className='absolute w-32 h-32 rounded-full bg-neon-purple/20 blur-2xl particle-3'></div>

      <div className='container mx-auto px-4 md:px-12 max-w-2xl relative z-10'>
        <div className='flex flex-col gap-12'>
          {/* Section header with number */}
          <h2 ref={titleRef} className='flex items-center font-mono text-xl md:text-2xl text-neon-purple mb-2'>
            <span className='font-mono mr-4'>03.</span>
            <span className='font-semibold'>
              <GlowText text='Contact Me' intensity='strong' />
            </span>
            <div className='h-px bg-neon-purple/30 ml-6 flex-grow'></div>
          </h2>

          {/* Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className='space-y-8'>
              {formSubmitted ? (
                <div className='text-center py-8'>
                  <div className='inline-block p-3 rounded-full bg-neon-purple/20 mb-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-neon-purple' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                  </div>
                  <h3 className='text-xl text-white font-medium mb-2'>Message Sent!</h3>
                  <p className='text-light/70'>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <div className='space-y-6'>
                  <div>
                    <label htmlFor='name' className='text-xl text-light flex mb-3' style={{ border: 'none' }}>
                      Name <span className='text-neon-purple ml-1'>*</span>
                    </label>
                    <input type='text' id='name' name='name' value={formState.name} onChange={handleChange} required className='w-full py-2 px-0 bg-transparent focus:outline-none' placeholder='Your name' />
                  </div>

                  <div>
                    <label htmlFor='email' className='text-xl text-light flex mb-3' style={{ border: 'none' }}>
                      Email <span className='text-neon-purple ml-1'>*</span>
                    </label>
                    <input type='email' id='email' name='email' value={formState.email} onChange={handleChange} required className='w-full py-2 px-0 bg-transparent focus:outline-none' placeholder='Your email address' />
                  </div>

                  <div>
                    <label htmlFor='message' className='text-xl text-light flex mb-3' style={{ border: 'none' }}>
                      Message <span className='text-neon-purple ml-1'>*</span>
                    </label>
                    <textarea id='message' name='message' value={formState.message} onChange={handleChange} required rows='5' className='w-full py-2 px-0 bg-transparent focus:outline-none resize-none' placeholder='Your message'></textarea>
                  </div>

                  <div className='flex justify-center pt-8'>
                    <button type='submit' disabled={formSubmitting} className='px-16 py-3 rounded-none border border-neon-purple/60 text-white font-medium text-lg bg-neon-purple'>
                      {formSubmitting ? 'Sending...' : 'Get in touch'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className='flex justify-center mt-16 gap-8'>
        <a href='https://github.com' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='text-gray-400 hover:text-neon-purple transition-colors duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
        <a href='mailto:email@example.com' aria-label='Email' className='text-gray-400 hover:text-neon-purple transition-colors duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z' />
          </svg>
        </a>
      </div>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-neon-purple hover:text-neon-pink transition-colors duration-300'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M17 11l-5-5-5 5M17 18l-5-5-5 5' />
        </svg>
      </div>
    </section>
  )
}

export default Contact
