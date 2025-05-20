import { useState, useEffect } from 'react'

/**
 * Custom hook for managing theme (dark/light mode).
 * Initializes from localStorage and persists changes.
 * Applies theme class to the documentElement.
 */
const useThemeManager = (defaultTheme = true) => {
  // defaultTheme true = dark
  const [darkMode, setDarkMode] = useState(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      setDarkMode(defaultTheme)
    }
  }, [defaultTheme])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return { darkMode, toggleTheme }
}

export default useThemeManager
