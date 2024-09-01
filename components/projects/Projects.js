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

  return (
    <div className='flex flex-wrap gap-10 justify-around lg:justify-between xl:justify-center items-baseline'>
      {(shortened ? projectsShortened : projects).map((item, index) => {
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
