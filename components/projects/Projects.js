import React from 'react'

// import ProjectOldDisplay from '../Project-Old-Display'
import ProjectCard from './ProjectCard'
import { projects, projectsShortened } from '../../data'

const Projects = ({ shortened }) => {
  return (
    <div className='flex flex-wrap gap-10 justify-around lg:justify-between xl:justify-center items-baseline'>
      {(shortened ? projectsShortened : projects).map((item, index) => {
        console.log(item, 'item')
        return (
          <ProjectCard
            key={index}
            title={item.title}
            projectRoute={item.projectRoute}
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
