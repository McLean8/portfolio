import React from 'react'
import PropTypes from 'prop-types'

const AboutContent = ({ contentRef, paragraphRef, highlightStyle, highlightedWords }) => (
  <div ref={contentRef} className='md:col-span-12 lg:col-span-7 order-2 md:order-1'>
    <div ref={paragraphRef} className='font-mono space-y-4 md:space-y-5 text-light/75 max-w-prose mx-auto md:mx-0'>
      <p className='text-sm sm:text-base leading-relaxed md:leading-loose'>
        Throughout my career, I have gained comprehensive full-stack web development experience, from <span style={highlightStyle}>frontend</span> and <span style={highlightStyle}>UX/design</span> to <span style={highlightStyle}>backend</span> (using various languages), databases, DevOps, and testing. While my primary skills lie in <span style={highlightStyle}>JavaScript</span> and <span style={highlightStyle}>React/NodeJS</span>, I am a highly adaptable developer, comfortable tackling new challenges and technologies to meet project demands.
      </p>
      <p className='text-sm sm:text-base leading-relaxed md:leading-loose'>
        I excel at collaborating with diverse teams including stakeholders, UX, product owners, and technical teams—to deliver high-quality applications and websites. My focus is on creating <span style={highlightStyle}>pixel-perfect</span>, <span style={highlightStyle}>user-centric</span> interfaces and writing simple, <span style={highlightedWords.clean ? highlightStyle : {}}>clean</span>, and <span style={highlightStyle}>testable code</span> that is easily understood by others.
      </p>
    </div>
  </div>
)

AboutContent.propTypes = {
  contentRef: PropTypes.object.isRequired,
  paragraphRef: PropTypes.object.isRequired,
  highlightStyle: PropTypes.object.isRequired,
  highlightedWords: PropTypes.object.isRequired,
}

export default AboutContent
