import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for sequentially highlighting keywords
 * @returns {Object} Ref, state and style for highlighted words
 */
const useKeywordHighlight = () => {
  const paragraphRef = useRef(null)
  const [highlightedWords, setHighlightedWords] = useState({
    passionate: false,
    responsive: false,
    userFriendly: false,
    performance: false,
    clean: false,
  })

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px',
      threshold: 0.5,
    }

    // Order of keywords to highlight sequentially
    const highlightSequence = ['passionate', 'responsive', 'userFriendly', 'performance', 'clean']
    const highlightDelay = 800

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          highlightSequence.forEach((word, index) => {
            setTimeout(() => {
              setHighlightedWords(prev => ({
                ...prev,
                [word]: true,
              }))
            }, index * highlightDelay)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current)
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current)
      }
    }
  }, [])

  // Style for highlighted text
  const highlightStyle = {
    color: 'var(--neon-purple)',
    textShadow: '0 0 10px var(--neon-purple), 0 0 20px var(--neon-purple)',
    transition: 'all 0.5s ease-in-out',
  }

  return { paragraphRef, highlightedWords, highlightStyle }
}

export default useKeywordHighlight
