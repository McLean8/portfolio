import React, { useMemo } from 'react'

const GlowText = ({ text, className = '', intensity = 'medium' }) => {
  // Use constant mapping to avoid recreating object on each render
  const intensityClassMap = {
    light: 'glow-light',
    medium: 'glow-medium',
    strong: 'glow-strong',
    white: 'glow-white',
  }

  // Calculate values once per component instance
  const intensityClass = intensityClassMap[intensity] || intensityClassMap.medium

  // Only recalculate when text changes
  const characterSpans = useMemo(() => {
    // Early optimization: empty text or single character
    if (!text || text.length <= 1) {
      return text === ' ' ? '\u00A0' : text
    }

    return text.split('').map((char, index) => (
      <span
        key={index}
        className='glow-char'
        style={{
          animationDelay: `${index * 0.05}s`,
        }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }, [text])

  return <span className={`glow-text ${intensityClass} ${className}`}>{characterSpans}</span>
}

// Optimize with React.memo and custom comparison
export default React.memo(GlowText, (prevProps, nextProps) => {
  return prevProps.text === nextProps.text && prevProps.intensity === nextProps.intensity && prevProps.className === nextProps.className
})
