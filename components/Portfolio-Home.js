import { useRouter } from 'next/router'

import Projects from './common/Projects'

const PortfolioHome = () => {
  const router = useRouter()

  return (
    <section id='portfolio' className='min-h-fit bg-secondary py-14'>
      <div className='container mx-auto flex flex-col gap-5 h-full py-12 px-12 lg:py-6'>
        <div className='flex flex-col gap-4 items-center mb-6'>
          <h1 className='text-5xl font-semibold mb-8'>Recent Projects</h1>
          <Projects />
        </div>
        <button
          type='button'
          onClick={() => router.push('/projects')}
          className='self-end flex items-center gap-2'>
          See more work
          <svg
            data-bbox='9 70.9 181 59'
            className='w-10 h-10'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 200 200'>
            <g>
              <path
                d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'
                fill='#ffffff'></path>
            </g>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default PortfolioHome
