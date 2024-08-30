import { useEffect, useState } from 'react'
const axios = require('axios')
import { useRouter } from 'next/router'
import Image from 'next/image'

import { projects } from '../../data'
import spinner from '../../public/spinner.gif'

const Project = () => {
  const [projects2, setProjects] = useState([])
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('/api/notion/projects')
        setProjects(data.projects)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProjects()
  }, [])

  const router = useRouter()
  const projectInfo = projects.find(project => project.projectRoute === router.query.id)
  const {
    title,
    techType,
    appType,
    projectType,
    duration,
    image,
    description,
    skills,
    live,
    source,
  } = projectInfo || {}

  if (projectInfo === undefined)
    return (
      <div className='flex items-center justify-center h-full'>
        <Image src={spinner} alt='Spinner' width={500} height={500} />
      </div>
    )

  return (
    <div className='container mx-auto px-4 xl:px-72 flex flex-col gap-2 sm:gap-5 items-start'>
      <button
        type='button'
        onClick={() => router.push('/projects')}
        className='self-start flex items-center gap-2 transition-all duration-500 hover:gap-3 hover:text-primary text-lg'>
        <span className='text-2xl mb-2'>&#10229;</span>Back
      </button>
      <h1 className='text-4xl sm:text-5xl text-primary'>[ {title} ]</h1>

      <div className='flex flex-col'>
        <h1 className='text-2xl'>
          {techType}, {appType}
        </h1>
        <div className='text-lg flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2'>
          <h1>{projectType}</h1>
          <p className='text-3xl hidden sm:block'>·</p>
          <h1>{duration}</h1>
        </div>
        <div className='mt-3 flex flex-wrap gap-3'>
          {skills.map((item, index) => {
            return (
              <p
                key={index}
                className='bg-transparent border-2 border-primary  text-center flex items-center justify-center rounded-full py-[0.4rem] px-4 text-xs sm:text-sm'>
                {item}
              </p>
            )
          })}
        </div>
      </div>

      <div className='relative w-full lg:w-[75%] xl:w-full'>
        <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
          <Image src={image} alt={title} layout='fill' objectFit='cover' />
        </div>
      </div>

      <p>{description}</p>
      <div className='flex gap-3 self-center sm:gap-5'>
        {live && (
          <a
            href={live}
            target='_blank'
            rel='noreferrer'
            className='bg-primary border-2 border-primary hover:bg-transparent hover:border-primary transition-all duration-500 rounded-full py-[0.4rem] px-7 text-xs sm:text-sm'>
            Live
          </a>
        )}
        {source && (
          <a
            href={source}
            target='_blank'
            rel='noreferrer'
            className='bg-primary border-2 border-primary hover:bg-transparent hover:border-primary transition-all duration-500 rounded-full py-[0.4rem] px-7 text-xs sm:text-sm'>
            Source
          </a>
        )}
      </div>
    </div>
  )
}

export default Project
