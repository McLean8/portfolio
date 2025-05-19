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
      setDarkMode(defaultTheme) // Ensure initial state is set if nothing in localStorage
    }
  }, [defaultTheme])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light-mode')
      // Ensure dark mode is explicitly set or default by removing light-mode
      // Optionally: document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light-mode')
      // Optionally: document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return { darkMode, toggleTheme }
}

export default useThemeManager
