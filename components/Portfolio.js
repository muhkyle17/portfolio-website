// Import externals
import React from 'react'

// Import internals
import Projects from './Projects'

const Portfolio = () => {
  return (
    <section id='portfolio' className='min-h-[1400px]'>
      <div className='container mx-auto h-full py-12 lg:py-32'>
        <div className='flex flex-col gap-5 items-center mb-14'>
          <h1 className='text-5xl font-bold'>PORTFOLIO</h1>
          <p className='text-2xl'>My latest work</p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio
