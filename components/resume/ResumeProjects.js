import { FiGithub } from 'react-icons/fi'

const ResumeProjects = ({ projects }) => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <h1 className='text-4xl font-bold'>Projects</h1>

      {projects.map(project => (
        <div
          key={Math.random()}
          className='flex flex-col gap-5 px-10 py-14 bg-transparent border-2 border-primary rounded-[45px] text-[#EEEEEE]'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-2xl'>{project.title}</h2>
            <div className='flex items-center font-semibold text-lg'>
              <p className='border-r-2 pr-3'>{project.date}</p>
              <a
                href={project?.githubLink}
                target='_blank'
                rel='noreferrer'
                className='pl-3 hover:text-primary'>
                <FiGithub />
              </a>
            </div>
          </div>

          <p className='text-lg font-semibold italic'>{project.shortDescription}</p>
          <ul className='list-disc flex flex-col gap-2 ml-3'>
            {project.detailedDescription.map(work => (
              <li key={Math.random()}>{work}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ResumeProjects
