import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className='container mx-auto px-28 gap-5 flex flex-wrap justify-center items-center bg-teal-600//'>
      <Project bgColor={'bg-red-400'} />
      <Project bgColor={'bg-green-400'} />
      <Project bgColor={'bg-blue-400'} />
      <Project bgColor={'bg-orange-400'} />
      <Project bgColor={'bg-teal-400'} />
    </div>
  )
}

export default Projects
