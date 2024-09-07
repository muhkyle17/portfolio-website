import { useState, useEffect } from 'react'
import axios from 'axios'

// import ProjectOldDisplay from '../Project-Old-Display'
import ProjectCard from './ProjectCard'
import { projects } from '../../data'
import Loader from '../common/Loader'

const Projects = ({ shortened, notionProjects }) => {
  const shortenedProjects = notionProjects?.slice(0, 3)

  if (notionProjects?.length === 0) {
    return (
      <div className='flex px-4 h-[70vh] w-full items-center justify-center'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='flex flex-wrap gap-10 justify-around lg:justify-between xl:justify-center items-baseline'>
      {(shortened ? shortenedProjects : notionProjects)?.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project?.title?.title[0]?.plain_text || ''}
            projectRoute={project?.projectRoute?.rich_text[0]?.plain_text || ''}
            image={
              projects.filter(item => item.title === project?.title?.title?.[0]?.plain_text)[0]
                ?.image?.src
            }
            techType={project?.techType?.rich_text[0]?.plain_text || ''}
            appType={project?.appType?.rich_text[0]?.plain_text || ''}
            description={project?.description?.rich_text[0]?.plain_text || ''}
            skills={project?.skills?.multi_select?.map(skill => skill.name) || []}
            live={project?.live?.rich_text[0]?.plain_text || ''}
            source={project?.source?.rich_text[0]?.plain_text || ''}
          />
        )
      })}
    </div>
  )
}

export default Projects
