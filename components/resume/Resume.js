import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { experience, resumeProjects as projects } from '../../data'
import Experience from './Experience'

const Resume = () => {
  return (
    <section className='py-12 lg:py-[3.6rem] container mx-auto'>
      <div className='flex flex-col items-center gap-16'>
        <h1 className='text-5xl'>Resume</h1>

        <Experience />

        <div className='flex flex-col gap-8 w-4/6'>
          <h1 className='text-3xl'>Projects</h1>

          {projects.map(project => (
            <div
              key={project.company}
              className='flex flex-col gap-5 px-10 py-14 bg-primary rounded-[45px] text-[#EEEEEE]'>
              <div className='flex flex-col gap-1'>
                <h2 className='font-bold text-2xl'>{project.title}</h2>
                <div className='flex items-center font-semibold text-lg'>
                  <p className='border-r-2 pr-3'>{project.date}</p>
                  <a
                    href={project?.githubLink}
                    target='_blank'
                    rel='noreferrer'
                    className='pl-3 hover:text-tertiary'>
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
      </div>
    </section>
  )
}

export default Resume
