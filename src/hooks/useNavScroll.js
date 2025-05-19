import { useState, useEffect } from 'react'

/**
 * Custom hook for managing navbar scroll-related states.
 * Tracks scroll position to set 'scrolled' state and 'activeSection' based on element positions.
 * @param {Array} navItems - Array of navigation item objects, used to identify sections.
 */
const useNavScroll = navItems => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handlePageScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handlePageScroll)
    handlePageScroll() // Initial check for scrolled state
    return () => window.removeEventListener('scroll', handlePageScroll)
  }, [])

  useEffect(() => {
    const handleActiveSectionUpdate = () => {
      // If at the very top, set active section to 'home'
      if (window.scrollY === 0) {
        setActiveSection('home')
        return
      }

      const sections = navItems
        .filter(item => item.type === 'scroll')
        .map(item => {
          const id = item.name === 'Technologies' ? 'skills' : item.name.toLowerCase()
          return document.getElementById(id)
        })
        .filter(Boolean) // Remove any nulls if elements weren't found

      const scrollPosition = window.scrollY + 100 // Adjusted for better active state feeling
      let currentSectionId = 'home' // Default to home

      // Iterate from bottom to top of sections in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= scrollPosition) {
          currentSectionId = section.id === 'skills' ? 'technologies' : section.id
          break // Found the current active section
        }
      }
      setActiveSection(currentSectionId)
    }

    window.addEventListener('scroll', handleActiveSectionUpdate)
    handleActiveSectionUpdate() // Initial call to set active section on load

    return () => window.removeEventListener('scroll', handleActiveSectionUpdate)
  }, [navItems]) // Re-run if navItems change

  return { scrolled, activeSection }
}

export default useNavScroll
