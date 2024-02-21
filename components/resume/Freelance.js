import { FiGithub } from 'react-icons/fi'

const Freelance = ({ freelance }) => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <h1 className='text-3xl'>Projects</h1>

      {freelance.map(work => (
        <div
          key={work.company}
          className='flex flex-col gap-5 px-10 py-14 bg-primary rounded-[45px] text-[#EEEEEE]'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-2xl'>{work.company}</h2>
            <div className='flex items-center font-semibold text-lg'>
              <p className='border-r-2 pr-3'>{work.duration}</p>
              <a
                href={work?.githubLink}
                target='_blank'
                rel='noreferrer'
                className='pl-3 hover:text-tertiary'>
                <FiGithub />
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
