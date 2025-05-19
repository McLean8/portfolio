import React from 'react'

const FormInput = ({ id, label, type, value, onChange, placeholder, required, rows }) => {
  const commonProps = {
    id,
    name: id,
    value,
    onChange,
    required,
    className: 'w-full py-2 px-0 bg-transparent focus:outline-none',
    placeholder,
  }

  return (
    <div>
      <label htmlFor={id} className='text-xl text-light flex mb-4' style={{ border: 'none' }}>
        {label} {required && <span className='text-neon-purple ml-1'>*</span>}
      </label>

      {type === 'textarea' ? <textarea {...commonProps} rows={rows || 5} className={`${commonProps.className} resize-none`} /> : <input {...commonProps} type={type} />}
    </div>
  )
}

export default FormInput
