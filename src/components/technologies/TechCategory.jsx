import React from 'react'
import PropTypes from 'prop-types'
import GlowText from '../common/GlowText'
import TechItem from './TechItem'

const TechCategory = ({ category, items, startIndex }) => {
  return (
    <div className='grid gap-6'>
      <h3 className='text-2xl text-neon-pink font-semibold'>
        <GlowText text={category} intensity='medium' />
      </h3>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {items.map((tech, techIndex) => {
          const globalIndex = startIndex + techIndex
          return <TechItem key={techIndex} tech={tech} index={globalIndex} />
        })}
      </div>
    </div>
  )
}

TechCategory.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  startIndex: PropTypes.number.isRequired,
}

export default TechCategory
