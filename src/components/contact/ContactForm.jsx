import React from 'react'
import SuccessMessage from './SuccessMessage'
import FormInput from './FormInput'

const ContactForm = ({ formState, handleChange, handleSubmit, formSubmitted, formSubmitting, formError }) => {
  if (formSubmitted) {
    return <SuccessMessage />
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-16'>
      <div className='space-y-12'>
        <FormInput id='name' label='Name' type='text' value={formState.name} onChange={handleChange} placeholder='Your name' required />

        <FormInput id='email' label='Email' type='email' value={formState.email} onChange={handleChange} placeholder='Your email address' required />

        <FormInput id='message' label='Message' type='textarea' value={formState.message} onChange={handleChange} placeholder='Your message' rows={5} required />

        {formError && (
          <div className='mt-4 p-4 bg-red-900/30 border border-red-500 rounded-md text-red-300'>
            <p>Error: {formError}</p>
            <p className='text-sm mt-1'>Please make sure your information is correct or try again later.</p>
          </div>
        )}

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
