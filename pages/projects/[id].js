import { useRouter } from 'next/router'

const project = () => {
  const router = useRouter()

  return (
    <div>
      <p>{router.query.id}</p>
    </div>
  )
}

export default project
