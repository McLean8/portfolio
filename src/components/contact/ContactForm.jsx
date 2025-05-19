import React from 'react'
import SuccessMessage from './SuccessMessage'
import FormInput from './FormInput'

const ContactForm = ({ formState, handleChange, handleSubmit, formSubmitted, formSubmitting }) => {
  if (formSubmitted) {
    return <SuccessMessage />
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-16'>
      <div className='space-y-12'>
        <FormInput id='name' label='Name' type='text' value={formState.name} onChange={handleChange} placeholder='Your name' required />

        <FormInput id='email' label='Email' type='email' value={formState.email} onChange={handleChange} placeholder='Your email address' required />

        <FormInput id='message' label='Message' type='textarea' value={formState.message} onChange={handleChange} placeholder='Your message' rows={5} required />

        <div className='flex justify-center pt-20 pb-8'>
          <button type='submit' disabled={formSubmitting} className='px-32 py-7 rounded-full border-2 border-neon-purple/60 text-white font-medium text-lg bg-neon-purple transition-all duration-300 shadow-glow'>
            {formSubmitting ? 'Sending...' : 'Get in touch'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
