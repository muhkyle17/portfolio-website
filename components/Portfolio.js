// Import externals
import React from 'react'

// Import internals
import Projects from './common/Projects'

const Portfolio = () => {
  return (
    <section className='min-h-fit'>
      <div className='container mx-auto h-full py-12 px-12 lg:py-6'>
        <div className='flex flex-col gap-4 items-center mb-12'>
          <h1 className='text-5xl font-semibold'>Projects</h1>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio
