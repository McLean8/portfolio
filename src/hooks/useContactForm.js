import { useState } from 'react'

const useContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(null)
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
    setFormError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })

      // Handle non-JSON or invalid JSON responses
      let data
      try {
        const text = await response.text()
        data = text ? JSON.parse(text) : {}
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError)
        throw new Error('Server returned invalid response format')
      }

      if (!response.ok) {
        // Extract the detailed error message
        const errorMessage = data.error || `Server error: ${response.status}`
        throw new Error(errorMessage)
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
      console.error('Contact form submission error:', error)
      setFormSubmitting(false)
      setFormError(error.message || 'Failed to send message. Please try again later.')
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
