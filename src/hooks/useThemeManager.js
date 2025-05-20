import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * Custom hook for managing theme (dark/light mode) with minimal DOM operations
 * and efficient state management
 */
const useThemeManager = (defaultTheme = true) => {
  // Track if this is first mount to avoid unnecessary DOM operations
  const isFirstMount = useRef(true)

  // Initialize state from localStorage only once on mount with lazy initialization
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme

    const savedTheme = localStorage.getItem('theme')
    // Only use localStorage value if it exists
    return savedTheme ? savedTheme === 'dark' : defaultTheme
  })

  // Apply theme effect - run only when darkMode changes
  useEffect(() => {
    // Skip the first render since the HTML might already have the correct class
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }

    // Apply theme class only if needed
    const hasLightClass = document.documentElement.classList.contains('light-mode')

    if (darkMode && hasLightClass) {
      document.documentElement.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    } else if (!darkMode && !hasLightClass) {
      document.documentElement.classList.add('light-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  // Memoize toggle function with useCallback to avoid recreating it
  const toggleTheme = useCallback(() => {
    setDarkMode(prevMode => {
      const newMode = !prevMode
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode
    })
  }, [])

  return { darkMode, toggleTheme }
}

export default useThemeManager
