import { useRouter } from 'next/router'
import Image from 'next/image'

import { projects } from '../../data'
import spinner from '../../public/spinner.gif'

const Project = () => {
  const router = useRouter()

  const projectInfo = projects.find(project => project.projectRoute === router.query.id)
  const { title, techType, appType, image, description, skills, live, source } = projectInfo || {}

  if (projectInfo === undefined)
    return (
      <div className='flex items-center justify-center h-full'>
        <Image src={spinner} alt='Spinner' width={500} height={500} />
      </div>
    )

  return (
    <div className='container mx-auto px-auto px-48'>
      <h1 className='text-4xl'>{title}</h1>

      <Image
        src={image}
        alt={title}
        width='650'
        height='380'
        layout='intrinsic'
        className='rounded-t-2xl'
        priority
      />
      <p>{description}</p>
      <div>{skills}</div>
      <div>
        <a>{live}</a>
        <a>{source}</a>
      </div>
    </div>
  )
}

export default Project
