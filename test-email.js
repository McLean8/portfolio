const testData = {
  name: 'Test User',
  email: 'test@example.com',
  message: 'This is a test message from the contact form.',
}

console.log('Sending test email with data:', testData)

// Get the current server URL - if localhost:4321 is not correct, update this
const serverUrl = 'http://localhost:4321'
console.log(`Sending to server at: ${serverUrl}`)

fetch(`${serverUrl}/api/contact`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
  .then(async response => {
    console.log('Response status:', response.status)
    const text = await response.text()
    console.log('Raw response:', text)
    try {
      return JSON.parse(text)
    } catch (e) {
      console.error('Error parsing JSON response:', e)
      throw new Error('Invalid JSON response')
    }
  })
  .then(data => {
    if (data.success) {
      console.log('Email processed successfully:', data)
      console.log('In development mode, this should show logs in your terminal but not actually send emails')
      console.log('In production, this would send a real email using Resend')
    } else {
      console.error('Email processing failed:', data.error)
    }
  })
  .catch(error => console.error('Request error:', error))
