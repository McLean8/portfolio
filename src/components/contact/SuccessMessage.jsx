import React from 'react'

const SuccessMessage = () => {
  return (
    <div className='text-center py-8 animate-fade-in'>
      <div className='inline-block p-3 rounded-full bg-neon-purple/20 mb-4 animate-bounce'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-neon-purple' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
        </svg>
      </div>
      <h3 className='text-2xl text-white font-medium mb-3'>Message Sent Successfully!</h3>
      <p className='text-light/70 mb-4'>Thank you for reaching out. I'll get back to you as soon as possible.</p>
    </div>
  )
}

export default SuccessMessage
