import React from 'react'
import { useTechAnimations } from '../hooks'
import ScrollArrow from './common/ScrollArrow'

// Import components and data directly
import TechCategory from './technologies/TechCategory'
import SectionHeader from './technologies/SectionHeader'
import { technologies } from './technologies/techData'

/**
 * Technologies section displaying skills and tech stack
 */
const Technologies = () => {
  const { sectionRef, titleRef, containerRef, arrowRef, scrollToNext } = useTechAnimations(technologies)

  return (
    <section id='skills' ref={sectionRef} className='min-h-screen flex flex-col justify-center py-24 bg-dark relative'>
      {/* Page transition overlay */}
      <div className='page-transition-overlay fixed inset-0 bg-gradient-to-b from-neon-purple/30 to-darker pointer-events-none z-50 opacity-0 transform translate-y-full'></div>

      <div className='container mx-auto px-4 md:px-12 max-w-5xl'>
        <div className='flex flex-col gap-12'>
          {/* Section header */}
          <SectionHeader title='Technologies' titleRef={titleRef} />

          {/* Tech stack container */}
          <div ref={containerRef} className='grid gap-12'>
            {technologies.map((techGroup, groupIndex) => (
              <TechCategory key={groupIndex} category={techGroup.category} items={techGroup.items} startIndex={groupIndex * 10} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <ScrollArrow arrowRef={arrowRef} onClick={scrollToNext} direction='down' />
    </section>
  )
}

export default Technologies
