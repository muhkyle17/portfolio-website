import { useEffect, useState } from 'react'
const axios = require('axios')
import { useRouter } from 'next/router'
import Image from 'next/image'

import { projects } from '../../data'
import spinner from '../../public/spinner.gif'

const Project = () => {
  const [projects2, setProjects] = useState([]) // !TEMP
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

  const projectInfo2 = projects2?.find(
    project => project?.projectRoute?.rich_text[0]?.plain_text === router.query.id
  )

  const {
    // techType: techType2,
    // appType: appType2,
    // projectType: projectType2,
    // duration: duration2,
    // image: image2,
    // description: description2,
    // skills: skills2,
    // live: live2,
    // source: source2,
  } = projectInfo2 || {}

  console.log(projectInfo2, 'projectInfo2') // !TEMP
  const title2 = projectInfo2?.title?.title[0]?.plain_text || ''
  const appType2 = projectInfo2?.appType?.rich_text[0]?.plain_text || ''
  const techType2 = projectInfo2?.techType?.rich_text[0]?.plain_text || ''
  const projectType2 = projectInfo2?.projectType?.rich_text[0]?.plain_text || ''
  const duration2 = projectInfo2?.duration?.rich_text[0]?.plain_text || ''
  const image2 = projectInfo2?.image?.files[0]?.file.url || ''
  const description2 = projectInfo2?.description?.rich_text[0]?.plain_text || ''
  const skills2 = projectInfo2?.skills?.multi_select?.map(skill => skill.name)
  const live2 = projectInfo2?.live?.rich_text[0]?.plain_text || ''
  const source2 = projectInfo2?.source?.rich_text[0]?.plain_text || ''
  console.log(live2, 'live2')

  if (projectInfo2 === undefined)
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
      <h1 className='text-4xl sm:text-5xl text-primary'>[ {title2} ]</h1>

      <div className='flex flex-col'>
        <h1 className='text-2xl'>
          {techType2}, {appType2}
        </h1>
        <div className='text-lg flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2'>
          <h1>{projectType2}</h1>
          <p className='text-3xl hidden sm:block'>·</p>
          <h1>{duration2}</h1>
        </div>
        <div className='mt-3 flex flex-wrap gap-3'>
          {skills2.map((item, index) => {
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
          <Image src={image} alt={title2} layout='fill' objectFit='cover' />
        </div>
      </div>

      <p>{description2}</p>
      <div className='flex gap-3 self-center sm:gap-5'>
        {live2 && (
          <a
            href={live2}
            target='_blank'
            rel='noreferrer'
            className='bg-primary border-2 border-primary hover:bg-transparent hover:border-primary transition-all duration-500 rounded-full py-[0.4rem] px-7 text-xs sm:text-sm'>
            Live
          </a>
        )}
        {source2 && (
          <a
            href={source2}
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
