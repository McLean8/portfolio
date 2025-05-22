import { useRef } from 'react'
import GlowText from './common/GlowText'

// Import custom hooks
import useElementAnimations from '../hooks/useElementAnimations'
import useKeywordHighlight from '../hooks/useKeywordHighlight'

// Import component parts directly
import CodeEditorIllustration from './about/CodeEditorIllustration'
import AboutContent from './about/AboutContent'

const About = () => {
  const sectionRef = useRef(null)
  const { titleRef, contentRef, imgRef, arrowRef } = useElementAnimations()
  const { paragraphRef, highlightedWords, highlightStyle } = useKeywordHighlight()

  // Handle arrow click to scroll to next section
  const scrollToNext = () => {
    const skills = document.getElementById('skills')
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='about' ref={sectionRef} className='min-h-screen flex flex-col justify-center py-16 md:py-24 bg-dark relative w-full'>
      <div className='container'>
        <div className='flex flex-col gap-6 md:gap-8 w-full'>
          {/* Section header with number */}
          <h2 ref={titleRef} className='flex items-center font-mono text-2xl md:text-3xl lg:text-4xl text-neon-purple mb-2'>
            <span className='font-semibold'>
              <GlowText text='About Me' intensity='strong' />
            </span>
            <div className='h-px bg-neon-purple/30 ml-6 flex-grow'></div>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full'>
            {/* Content */}
            <AboutContent contentRef={contentRef} paragraphRef={paragraphRef} highlightStyle={highlightStyle} highlightedWords={highlightedWords} />

            {/* Image container - Only shown on lg screens and larger */}
            <div ref={imgRef} className='md:col-span-5 order-1 md:order-2 hidden lg:flex lg:justify-center lg:items-center'>
              <div className='relative group'>
                <div className='absolute -inset-1.5 bg-neon-purple/20 rounded-md blur opacity-20 group-hover:opacity-30 transition duration-500'></div>
                <CodeEditorIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
