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
    <div className='container mx-auto px-auto px-72 flex flex-col gap-5 items-start'>
      <h1 className='text-5xl text-primary'>[ {title} ]</h1>

      <div>
        <p>
          {techType}, {appType}
        </p>
        <p>
          {projectType} | {duration}
        </p>
      </div>

      <div className='imageContainer'>
        <Image src={image} alt={title} layout='fill' objectFit='contain' />
      </div>
      <p>{description}</p>
      <div className='mt-5'>{skills}</div>
      <div className='mt-5'>
        <a>{live}</a>
        <a>{source}</a>
      </div>
    </div>
  )
}

export default Project
