// Import externals
import React from 'react'

// Import internals
import Project from '../Project'
import { projects, projectsShortened } from '../../data'

const Projects = ({ shortened }) => {
  return (
    <div className='gap-12 lg:justify-between flex flex-wrap justify-center items-baseline'>
      {(shortened ? projectsShortened : projects).map((item, index) => {
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
