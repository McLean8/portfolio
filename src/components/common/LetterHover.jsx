import React from 'react'

const LetterHover = ({ text, className = '', letterClassName = '' }) => {
  // Split the text into individual letters
  const letters = text.split('')

  return (
    <span className={`letter-hover ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`letter-hover-single ${letterClassName}`}
          style={{
            display: 'inline-block',
            transition: 'all 0.15s ease',
          }}>
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  )
}

export default LetterHover
