import { useRouter } from 'next/router'
import Image from 'next/image'

import { projects } from '../../data'

const Project = () => {
  const router = useRouter()

  const projectInfo = projects.find(project => project.projectRoute === router.query.id)
  const { title, techType, appType, image, description, skills, live, source } = projectInfo

  return (
    <div>
      <h1>{title}</h1>
      <Image src={image} alt='Project Image' />
    </div>
  )
}

export default Project
