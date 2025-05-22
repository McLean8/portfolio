import React from 'react'
import SuccessMessage from './SuccessMessage'
import FormInput from './FormInput'

const ContactForm = ({ formState, handleChange, handleSubmit, formSubmitted, formSubmitting, formError }) => {
  if (formSubmitted) {
    return (
      <div className='w-full flex items-center justify-center'>
        <SuccessMessage />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-8 md:space-y-10 w-full' noValidate>
      <div className='space-y-8 md:space-y-10'>
        <FormInput id='name' label='Name' type='text' value={formState.name} onChange={handleChange} placeholder='Your name' required />

        <FormInput id='email' label='Email' type='email' value={formState.email} onChange={handleChange} placeholder='Your email address' required />

        <FormInput id='message' label='Message' type='textarea' value={formState.message} onChange={handleChange} placeholder='Your message' rows={5} required />

        {formError && (
          <div className='mt-4 p-4 bg-red-900/30 border border-red-500 rounded-md text-red-300' role='alert'>
            <p>Error: {formError}</p>
            <p className='text-sm mt-1'>Please make sure your information is correct or try again later.</p>
          </div>
        )}

        <div className='flex justify-center pt-8 md:pt-10'>
          <button
            type='submit'
            disabled={formSubmitting}
            className={`
              px-8 sm:px-10 md:px-14 lg:px-20
              py-4 md:py-5
              rounded-full 
              border-2 border-neon-purple/60 
              text-white font-medium 
              text-base md:text-lg 
              transition-all duration-300 
              shadow-glow 
              w-full sm:w-auto sm:min-w-[240px] md:min-w-[280px]
              ${formSubmitting ? 'bg-neon-purple/60 cursor-not-allowed' : 'bg-neon-purple hover:bg-neon-purple/90'}
            `}
            aria-busy={formSubmitting}>
            {formSubmitting ? (
              <span className='flex items-center justify-center'>
                <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Get in touch'
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
