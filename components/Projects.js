// Import externals
import React from 'react'

// Import internals
import Project from './Project'
import { projects } from '../data'

const Projects = () => {
  return (
    <div className='gap-12 lg:justify-between flex flex-wrap justify-center items-center'>
      {projects.map((item, index) => {
        return (
          <Project
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            skills={item.skills}
            live={item.live}
            source={item.source}
          />
        )
      })}
    </div>
  )
}

export default Projects
