import { useRouter } from 'next/router'

const Project = () => {
  const router = useRouter()

  return (
    <div>
      <p>{router.query.id}</p>
    </div>
  )
}

export default Project
