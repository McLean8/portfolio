import { Body, Container, Head, Html, Preview, Text, Section } from '@react-email/components'
import * as React from 'react'

export const ContactEmail = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Text style={heading}>New Contact Form Submission</Text>
          <Text style={text}>Name: {name}</Text>
          <Text style={text}>Email: {email}</Text>
          <Text style={text}>Message:</Text>
          <Text style={message}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: '#050505',
  color: '#e2e2e2',
  fontFamily: 'Poppins, sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
}

const section = {
  backgroundColor: '#0a0a0a',
  borderRadius: '8px',
  padding: '20px',
  marginTop: '20px',
}

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#b026ff',
  marginBottom: '20px',
}

const text = {
  fontSize: '16px',
  marginBottom: '10px',
}

const message = {
  fontSize: '16px',
  backgroundColor: '#050505',
  padding: '15px',
  borderRadius: '4px',
  marginTop: '10px',
}

export default ContactEmail
