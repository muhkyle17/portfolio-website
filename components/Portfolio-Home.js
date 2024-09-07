import { useRouter } from 'next/router'

import Projects from '../components/projects/Projects'

const PortfolioHome = ({ notionProjects }) => {
  const router = useRouter()

  return (
    <section className='min-h-fit bg-tertiary py-8'>
      <div className='container mx-auto flex flex-col gap-7 h-full py-12 px-12 lg:py-6'>
        <div className='flex flex-col gap-9 items-center'>
          <h1 className='text-5xl font-semibold text-center'>Recent Projects</h1>
          <Projects shortened notionProjects={notionProjects} />
        </div>
        <button
          type='button'
          onClick={() => router.push('/projects')}
          className='self-center lg:self-end flex items-center gap-2 transition-all duration-500 hover:gap-3 hover:text-primary text-lg'>
          See more work <span className='mb-2 text-2xl'>⟶</span>
        </button>
      </div>
    </section>
  )
}

export default PortfolioHome
