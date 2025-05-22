import React from 'react'
import useThemeManager from '../../hooks/useThemeManager'

const CodeEditorIllustration = () => {
  const { darkMode } = useThemeManager()

  return (
    <div className='relative max-w-xs border-2 border-neon-purple/30 rounded-md overflow-hidden'>
      {/* Main container */}
      <div className={`p-6 w-full min-h-[400px] flex flex-col`}>
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
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>import</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>&nbsp;React&nbsp;</span>
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>from</span>
            <span className={`${darkMode ? 'text-green-300' : 'text-green-600'}`}>&nbsp;'react'</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>;</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>2</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}></span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>3</span>
            <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>const</span>
            <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>&nbsp;Portfolio</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>&nbsp;= ()&nbsp;</span>
            <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>=&gt;</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>&nbsp;{`{`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>4</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-4`}>
              <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>return</span>
              <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>&nbsp;(</span>
            </span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>5</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-8`}>{`<`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>div</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>6</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-12`}>{`<`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>h1</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
            <span className='text-neon-purple'>Clean&nbsp;Code</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`</`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>h1</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>7</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-12`}>{`<`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>p</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
            <span className='text-neon-purple'>Beautiful&nbsp;Interfaces</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`</`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>p</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>8</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-12`}>{`<`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>p</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
            <span className='text-neon-purple'>Responsive&nbsp;Design</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`</`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>p</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>9</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-12`}>{`<`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>button</span>
            <span className={`${darkMode ? 'text-amber-300' : 'text-amber-600'}`}>&nbsp;className</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>=</span>
            <span className={`${darkMode ? 'text-green-300' : 'text-green-600'}`}>"neon-glow"</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>10</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-16`}>Explore&nbsp;Projects</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>11</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-12`}>{`</`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>button</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>12</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-8`}>{`</`}</span>
            <span className={`${darkMode ? 'text-red-500' : 'text-red-600'}`}>div</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`>`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>13</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'} pl-4`}>);</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>14</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>{`};`}</span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>15</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}></span>
          </div>
          <div className='flex'>
            <span className='text-gray-500 w-6 select-none'>16</span>
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>export</span>
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>&nbsp;default</span>
            <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>&nbsp;Portfolio</span>
            <span className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>;</span>
          </div>
        </div>

        {/* Cursor effect */}
        <div className='h-4 w-2 bg-neon-purple/70 animate-pulse absolute top-[205px] left-[143px]'></div>
      </div>

      {/* Overlay effect */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-transparent to-darker/30' : 'bg-gradient-to-br from-transparent to-white/10'} pointer-events-none`}></div>
    </div>
  )
}

export default CodeEditorIllustration
