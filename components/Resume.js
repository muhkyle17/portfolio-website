import Link from 'next/link'

const Resume = () => {
  return (
    <section className='py-12 lg:py-[3.6rem] container mx-auto'>
      <div className='flex flex-col items-center gap-16'>
        <h1 className='text-5xl'>Resume</h1>

        <div className='flex flex-col w-4/6'>
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
        </div>
      </div>
    </section>
  )
}

export default Resume
