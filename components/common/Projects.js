import React from 'react'

// import ProjectOldDisplay from '../Project-Old-Display'
import Project from '../Project'
import { projects, projectsShortened } from '../../data'

const Projects = ({ shortened }) => {
  return (
    <div className='flex flex-wrap gap-4 justify-center xl:justify-between items-baseline'>
      {(shortened ? projectsShortened : projects).map((item, index) => {
        return (
          <Project
            key={index}
            title={item.title}
            image={item.image}
            techType={item.techType}
            appType={item.appType}
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
