import { useRouter } from 'next/router'
import Image from 'next/image'

import { projects } from '../../data'
import spinner from '../../public/spinner.gif'

const Project = () => {
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
    <div className='container mx-auto px-auto xl:px-72 flex flex-col gap-5 items-start'>
      <h1 className='text-5xl text-primary'>[ {title} ]</h1>

      <div className='flex flex-col'>
        <h1 className='text-2xl'>
          {techType}, {appType}
        </h1>
        <h1 className='text-lg flex flex-row items-center gap-2'>
          {projectType} <span className='text-3xl'>·</span> {duration}
        </h1>
        <div className='mt-3 flex gap-3'>
          {skills.map((item, index) => {
            return (
              <p
                key={index}
                className='bg-primary text-center flex items-center justify-center rounded-full py-[0.4rem] px-4 text-xs sm:text-sm'>
                {item}
              </p>
            )
          })}
        </div>
      </div>

      <div className='self-start relative w-full h-[30vh] sm:h-[50vh] 2xl:h-[35rem]'>
        <Image src={image} alt={title} layout='fill' objectFit='contain' />
      </div>
      <p>{description}</p>
      <div className='flex gap-5'>
        <a
          href={live}
          target='_blank'
          rel='noreferrer'
          className='bg-transparent border-2 border-primary hover:bg-primary hover:border-primary transition-all duration-600 duration-300 rounded-full py-[0.4rem] px-7 text-xs sm:text-sm'>
          Live
        </a>
        <a
          href={source}
          target='_blank'
          rel='noreferrer'
          className='bg-transparent border-2 border-primary hover:bg-primary hover:border-primary transition-all duration-600 duration-300 rounded-full py-[0.4rem] px-7 text-xs sm:text-sm'>
          Source
        </a>
      </div>
    </div>
  )
}

export default Project
