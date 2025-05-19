import React from 'react'

/**
 * A visual illustration of a code editor
 */
const CodeEditorIllustration = () => (
  <div className='relative max-w-xs border-2 border-neon-purple/30 rounded-md overflow-hidden'>
    <div className='absolute inset-0 bg-neon-purple/10 group-hover:bg-neon-purple/5 transition duration-300'></div>

    <div className='bg-darker p-6 w-full min-h-[400px] flex flex-col'>
      {/* Code editor header */}
      <div className='flex items-center mb-4'>
        <div className='flex space-x-2'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
        </div>
        <div className='ml-4 px-3 py-1 rounded bg-dark text-xs text-neon-purple/80 font-mono'>index.js</div>
      </div>

      {/* Code content */}
      <div className='font-mono text-xs leading-relaxed text-left flex-1'>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>1</span>
          <span className='text-blue-400'>import</span>
          <span className='text-white'>&nbsp;React&nbsp;</span>
          <span className='text-blue-400'>from</span>
          <span className='text-green-300'>&nbsp;'react'</span>
          <span className='text-white'>;</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>2</span>
          <span className='text-white'></span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>3</span>
          <span className='text-purple-400'>const</span>
          <span className='text-yellow-300'>&nbsp;Portfolio</span>
          <span className='text-white'>&nbsp;= ()&nbsp;</span>
          <span className='text-purple-400'>=&gt;</span>
          <span className='text-white'>&nbsp;{`{`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>4</span>
          <span className='text-white pl-4'>
            <span className='text-purple-400'>return</span>
            <span className='text-white'>&nbsp;(</span>
          </span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>5</span>
          <span className='text-white pl-8'>{`<`}</span>
          <span className='text-red-500'>div</span>
          <span className='text-white'>{`>`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>6</span>
          <span className='text-white pl-12'>{`<`}</span>
          <span className='text-red-500'>h1</span>
          <span className='text-white'>{`>`}</span>
          <span className='text-neon-purple'>Clean&nbsp;Code</span>
          <span className='text-white'>{`</`}</span>
          <span className='text-red-500'>h1</span>
          <span className='text-white'>{`>`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>7</span>
          <span className='text-white pl-12'>{`<`}</span>
          <span className='text-red-500'>p</span>
          <span className='text-white'>{`>`}</span>
          <span className='text-gray-300'>Beautiful&nbsp;Interfaces</span>
          <span className='text-white'>{`</`}</span>
          <span className='text-red-500'>p</span>
          <span className='text-white'>{`>`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>8</span>
          <span className='text-white pl-12'>{`<`}</span>
          <span className='text-red-500'>p</span>
          <span className='text-white'>{`>`}</span>
          <span className='text-gray-300'>Responsive&nbsp;Design</span>
          <span className='text-white'>{`</`}</span>
          <span className='text-red-500'>p</span>
          <span className='text-white'>{`>`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>9</span>
          <span className='text-white pl-12'>{`<`}</span>
          <span className='text-red-500'>button</span>
          <span className='text-amber-300'>&nbsp;className</span>
          <span className='text-white'>=</span>
          <span className='text-green-300'>"neon-glow"</span>
          <span className='text-white'>{`>`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>10</span>
          <span className='text-white pl-16'>Explore&nbsp;Projects</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>11</span>
          <span className='text-white pl-12'>{`</`}</span>
          <span className='text-red-500'>button</span>
          <span className='text-white'>{`>`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>12</span>
          <span className='text-white pl-8'>{`</`}</span>
          <span className='text-red-500'>div</span>
          <span className='text-white'>{`>`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>13</span>
          <span className='text-white pl-4'>);</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>14</span>
          <span className='text-white'>{`};`}</span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>15</span>
          <span className='text-white'></span>
        </div>
        <div className='flex'>
          <span className='text-gray-500 w-6 select-none'>16</span>
          <span className='text-blue-400'>export</span>
          <span className='text-blue-400'>&nbsp;default</span>
          <span className='text-yellow-300'>&nbsp;Portfolio</span>
          <span className='text-white'>;</span>
        </div>
      </div>

      {/* Cursor effect */}
      <div className='h-4 w-2 bg-neon-purple/70 animate-pulse absolute top-[205px] left-[143px]'></div>
    </div>

    {/* Overlay effect */}
    <div className='absolute inset-0 bg-gradient-to-br from-transparent to-darker/30 pointer-events-none'></div>
  </div>
)

export default CodeEditorIllustration
