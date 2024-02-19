import { useRouter } from 'next/router'

import Projects from './common/Projects'

const PortfolioHome = () => {
  const router = useRouter()

  return (
    <section id='portfolio' className='min-h-fit bg-secondary py-14'>
      <div className='container mx-auto flex flex-col gap-2 h-full py-12 px-12 lg:py-6'>
        <div className='flex flex-col gap-4 items-center mb-6'>
          <h1 className='text-5xl font-semibold mb-8'>Recent Projects</h1>
          <Projects shortened />
        </div>
        <button
          type='button'
          onClick={() => router.push('/projects')}
          className='self-end flex items-center gap-2 transition-all duration-300 hover:gap-3 hover:text-primary text-lg'>
          See more work <span className='mb-2 text-2xl'>⟶</span>
        </button>
      </div>
    </section>
  )
}

export default PortfolioHome
