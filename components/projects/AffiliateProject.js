import Image from 'next/image'
import { projects } from '../../data'
import spinner from '../../public/spinner.gif'

const AffiliateProject = () => {
  const projectInfo = projects.find(project => project.projectRoute === 'creator-affiliate')
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
    <div>
      <div className='container mx-auto px-4 xl:px-72 flex flex-col gap-2 sm:gap-5 items-start'>
        <h1 className='text-4xl sm:text-5xl text-primary'>[ {title} ]</h1>

        <div className='flex flex-col'>
          <h1 className='text-2xl'>
            {techType}, {appType}
          </h1>
          <div className='text-lg flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2'>
            <h1>{projectType}</h1>
            <p className='text-3xl hidden sm:block'>·</p>
            <h1>{duration}</h1>
          </div>
          <div className='mt-3 flex flex-wrap gap-3'>
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

        <div className='relative w-full lg:w-[75%] xl:w-full'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>Description 1</p>
        </div>
        <div className='relative w-full lg:w-[75%] xl:w-full'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>Description 2</p>
        </div>
        <div className='relative w-full lg:w-[75%] xl:w-full'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>Description 3</p>
        </div>
        <div className='relative w-full lg:w-[75%] xl:w-full'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>Description 4</p>
        </div>
        <div className='relative w-full lg:w-[75%] xl:w-full'>
          <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
            <Image src={image} alt={title} layout='fill' objectFit='cover' />
          </div>
          <p>Description 5</p>
        </div>
      </div>
    </div>
  )
}

export default AffiliateProject
