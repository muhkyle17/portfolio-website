import Link from 'next/link'

const Experience = ({ experience }) => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <div className='flex w-full justify-between items-center'>
        <h1 className='text-3xl'>Experience</h1>

        <div className='flex gap-5'>
          <div className='py-2 px-4 w-fit text-sm sm:text-base font-medium text-white flex items-center justify-center rounded-full hover:bg-primaryDarker bg-primary cursor-pointer hover:bg-secondary-hover md:btn-lg transition-all'>
            <Link download href='/Mikyle-Resume.pdf' passHref>
              <a target='_blank' rel='noopener noreferrer'>
                Download Resume
              </a>
            </Link>
          </div>
          <a
            className='py-2 px-4 w-fit text-sm sm:text-base font-medium text-white flex items-center justify-center rounded-full hover:bg-primaryDarker bg-primary hover:bg-secondary-hover md:btn-lg transition-all'
            target='_blank'
            rel='noreferrer'
            href='https://mikylereyes.notion.site/Resume-cb5577d7692e4fa08afc58c0d741694e?pvs=4'>
            Notion Resume
          </a>
        </div>
      </div>

      {experience.map(job => (
        <div key={job.company} className='flex gap-5 px-10 py-14 bg-primary rounded-[45px]'>
          <div className='w-2/5 text-[#EEEEEE]'>
            <h2 className='font-bold text-2xl'>{job.company}</h2>
            <p className='font-semibold text-lg'>{job.jobTitle}</p>
            <p className='font font-medium text-base'>{job?.jobType}</p>
            <p className='mt-5 text-sm'>{job.duration}</p>
            <p className='text-sm'>{job.location}</p>
          </div>

          <div className='w-3/5'>
            <ul className='list-disc flex flex-col gap-2 text-[#EEEEEE]'>
              {job.responsibilities.map(work => (
                <li key={Math.random()}>{work}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
