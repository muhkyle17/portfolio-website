import { useState, useEffect } from 'react'
import axios from 'axios'

// import ProjectOldDisplay from '../Project-Old-Display'
import ProjectCard from './ProjectCard'
import { projects, projectsShortened } from '../../data'

const Projects = ({ shortened }) => {
  const [notionProjects, setNotionProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('/api/notion/projects')
        setNotionProjects(data.projects)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProjects()
  }, [])

  console.log(notionProjects, 'notionProjects')

  const shortenedProjects = notionProjects.slice(0, 3)

  return (
    <div className='flex flex-wrap gap-10 justify-around lg:justify-between xl:justify-center items-baseline'>
      {(shortened ? shortenedProjects : notionProjects)?.map((project, index) => {
        const image = projects.filter(
          item => item.title === project?.title?.title?.[0]?.plain_text
        )[0]?.image?.src

        return (
          <ProjectCard
            key={index}
            title={project?.title?.title[0]?.plain_text || ''}
            projectRoute={project?.projectRoute?.rich_text[0]?.plain_text || ''}
            image={image}
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
