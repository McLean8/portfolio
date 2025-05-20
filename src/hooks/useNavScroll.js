import { useState, useEffect, useRef, useMemo, useCallback } from 'react'

/**
 * Custom hook for managing navbar scroll-related states.
 * Tracks scroll position to set 'scrolled' state and 'activeSection' based on element positions.
 * @param {Array} navItems - Array of navigation item objects, used to identify sections.
 */
const useNavScroll = navItems => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const rafRef = useRef(null)
  const ticking = useRef(false)
  const lastScrollY = useRef(0)

  // Memoize section IDs to avoid recalculating on every render
  const sectionIds = useMemo(() => {
    return navItems.filter(item => item.type === 'scroll').map(item => (item.name === 'Technologies' ? 'skills' : item.name.toLowerCase()))
  }, [navItems])

  // Memoize section elements to avoid querying DOM repeatedly
  const sections = useMemo(() => {
    if (typeof document === 'undefined') return []
    return sectionIds.map(id => document.getElementById(id)).filter(Boolean)
  }, [sectionIds])

  // Combined scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    lastScrollY.current = window.scrollY

    if (!ticking.current) {
      ticking.current = true

      rafRef.current = requestAnimationFrame(() => {
        // Handle scrolled state
        const isScrolled = lastScrollY.current > 50
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled)
        }

        // Handle active section
        if (lastScrollY.current === 0) {
          setActiveSection('home')
        } else {
          const scrollPosition = lastScrollY.current + 100
          let currentSectionId = 'home'

          // Loop from bottom to top to find active section
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i]
            if (section && section.offsetTop <= scrollPosition) {
              currentSectionId = section.id === 'skills' ? 'technologies' : section.id
              break
            }
          }

          if (currentSectionId !== activeSection) {
            setActiveSection(currentSectionId)
          }
        }

        ticking.current = false
      })
    }
  }, [scrolled, activeSection, sections])

  useEffect(() => {
    // Initial check
    handleScroll()

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  return { scrolled, activeSection }
}

export default useNavScroll
