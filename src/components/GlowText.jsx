import React from 'react'

const GlowText = ({ text, className = '', intensity = 'medium' }) => {
  // Split the text into individual characters
  const characters = text.split('')

  // Different intensity classes
  const intensityClasses = {
    light: 'glow-light',
    medium: 'glow-medium',
    strong: 'glow-strong',
    white: 'glow-white',
  }

  const intensityClass = intensityClasses[intensity] || intensityClasses.medium

  return (
    <span className={`glow-text ${intensityClass} ${className}`}>
      {characters.map((char, index) => (
        <span
          key={index}
          className='glow-char'
          style={{
            animationDelay: `${index * 0.05}s`,
          }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default GlowText
