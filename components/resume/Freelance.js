import { FiGithub } from 'react-icons/fi'
import { TbLivePhoto } from 'react-icons/tb'

const Freelance = ({ freelance }) => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <h1 className='text-4xl font-semibold'>Freelance</h1>

      {freelance.map(work => (
        <div
          key={work.company}
          className='flex flex-col gap-5 px-10 py-14 bg-transparent border-2 border-primary rounded-[45px] text-[#EEEEEE]'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-2xl'>{work.company}</h2>
            <div className='flex items-center font-semibold text-lg'>
              <p className='border-r-2 pr-3'>{work.duration}</p>
              <a
                href={work?.githubLink}
                target='_blank'
                rel='noreferrer'
                className='pl-3 hover:text-primary transition-all duration-500'>
                <FiGithub />
              </a>
              <a
                href={work?.liveLink}
                target='_blank'
                rel='noreferrer'
                className='pl-3 hover:text-primary transition-all duration-500'>
                <TbLivePhoto />
              </a>
            </div>
          </div>

          <p className='text-lg font-semibold italic'>{work.shortDescription}</p>
          <ul className='list-disc flex flex-col gap-2 ml-3'>
            {work.detailedDescription.map(work => (
              <li key={Math.random()}>{work}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Freelance
