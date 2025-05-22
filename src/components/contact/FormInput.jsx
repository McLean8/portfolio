import React, { useState } from 'react'

const FormInput = ({ id, label, type, value, onChange, placeholder, required, rows }) => {
  const [error, setError] = useState('')
  const [touched, setTouched] = useState(false)

  const validateInput = value => {
    if (required && !value) {
      return 'This field is required'
    }
    if (type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address'
    }
    return ''
  }

  const handleChange = e => {
    const newValue = e.target.value
    setError(validateInput(newValue))
    onChange(e)
  }

  const handleBlur = () => {
    setTouched(true)
    setError(validateInput(value))
  }

  const commonProps = {
    id,
    name: id,
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    required,
    className: `w-full py-3 px-0 bg-transparent focus:outline-none text-base transition-all duration-300 ${error && touched ? 'border-red-500' : ''}`,
    placeholder,
  }

  return (
    <div className='w-full'>
      <label htmlFor={id} className='text-base sm:text-lg text-light flex mb-2 md:mb-3' style={{ border: 'none' }}>
        {label} {required && <span className='text-neon-purple ml-1'>*</span>}
      </label>

      {type === 'textarea' ? <textarea {...commonProps} rows={rows || 5} className={`${commonProps.className} resize-none min-h-[120px] w-full`} /> : <input {...commonProps} type={type} className={`${commonProps.className} w-full`} />}

      {error && touched && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </div>
  )
}

export default FormInput
