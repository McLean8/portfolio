import React from 'react'
import GlowText from './common/GlowText'
import useContactForm from '../hooks/useContactForm'
import useContactAnimations from '../hooks/useContactAnimations'
import ContactForm from './contact/ContactForm'
import SocialLinks from './contact/SocialLinks'
import ScrollToTopButton from './common/ScrollToTopButton'

const Contact = () => {
  const { sectionRef, titleRef, formRef } = useContactAnimations()
  const { formState, handleChange, handleSubmit, formSubmitted, formSubmitting, formError } = useContactForm()

  return (
    <section id='contact' ref={sectionRef} className='min-h-screen flex flex-col justify-center py-16 md:py-24 bg-dark relative w-full'>
      <div className='container'>
        <div className='flex flex-col gap-8 md:gap-12 w-full'>
          {/* Section header */}
          <h2 ref={titleRef} className='flex items-center font-mono text-2xl md:text-3xl lg:text-4xl text-neon-purple mb-2'>
            <span className='font-semibold'>
              <GlowText text='Contact Me' intensity='strong' />
            </span>
            <div className='h-px bg-neon-purple/30 ml-6 flex-grow'></div>
          </h2>

          {/* Form */}
          <div ref={formRef} className='w-full'>
            <ContactForm formState={formState} handleChange={handleChange} handleSubmit={handleSubmit} formSubmitted={formSubmitted} formSubmitting={formSubmitting} formError={formError} />
          </div>

          {/* Social links */}
          <SocialLinks />

          {/* Scroll to top button */}
          <div className='relative w-full mt-8'>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
