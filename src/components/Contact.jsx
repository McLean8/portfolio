import React from 'react'
import GlowText from './GlowText'
import useContactForm from '../hooks/useContactForm'
import useContactAnimations from '../hooks/useContactAnimations'
import ContactForm from './contact/ContactForm'
import SocialLinks from './contact/SocialLinks'
import ScrollToTopButton from './common/ScrollToTopButton'
import BackgroundParticles from './common/BackgroundParticles'

const Contact = () => {
  const { sectionRef, titleRef, formRef } = useContactAnimations()
  const { formState, handleChange, handleSubmit, formSubmitted, formSubmitting } = useContactForm()

  return (
    <section id='contact' ref={sectionRef} className='min-h-screen flex flex-col justify-center py-40 bg-darker relative overflow-hidden'>
      <BackgroundParticles />

      <div className='container mx-auto px-6 md:px-12 max-w-3xl relative z-10'>
        <div className='flex flex-col gap-16'>
          {/* Section header with number */}
          <h2 ref={titleRef} className='flex items-center font-mono text-xl md:text-2xl text-neon-purple mb-2'>
            <span className='font-semibold'>
              <GlowText text='Contact Me' intensity='strong' />
            </span>
            <div className='h-px bg-neon-purple/30 ml-6 flex-grow'></div>
          </h2>

          {/* Form */}
          <div ref={formRef}>
            <ContactForm formState={formState} handleChange={handleChange} handleSubmit={handleSubmit} formSubmitted={formSubmitted} formSubmitting={formSubmitting} />
          </div>
        </div>
      </div>

      <SocialLinks />
      <ScrollToTopButton />
    </section>
  )
}

export default Contact
