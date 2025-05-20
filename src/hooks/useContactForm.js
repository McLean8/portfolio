import { useState } from 'react'

const useContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setFormSubmitting(true)
    setFormError(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

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
    } catch (error) {
      setFormSubmitting(false)
      setFormError(true)
      alert(`Failed to send message: ${error.message}`)
    }
  }

  return {
    formState,
    formSubmitted,
    formSubmitting,
    formError,
    handleChange,
    handleSubmit,
  }
}

export default useContactForm
