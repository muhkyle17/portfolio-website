import Link from 'next/link'

const Resume = () => {
  return (
    <section className='py-12 lg:py-[3.6rem] container mx-auto'>
      <div className='flex flex-col items-center gap-16'>
        <h1 className='text-5xl'>Resume</h1>

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

          <div className='flex gap-5 px-10 py-14 bg-primary rounded-[45px]'>
            <div className='w-2/5 text-[#EEEEEE]'>
              <h2 className='font-bold text-2xl'>Creator.co</h2>
              <p className='font-semibold text-lg'>Software Developer</p>
              <p className='mt-5 text-sm'>Jan 2022 - Present</p>
              <p className='text-sm'>Vancouver, Canada</p>
            </div>

            <div className='w-3/5'>
              <ul className='list-disc flex flex-col gap-2 text-[#EEEEEE]'>
                <li>
                  Full-stack engineer driving innovation in the integration and developer team,
                  dedicated to shaping and elevating the experience within Creator.co&lsquo;s 3
                  platforms.
                </li>
                <li>
                  Spearheaded the development of the internal affiliate program on all 3 platforms
                  utilizing the Shopify and WooCommerce APIs and webhooks to ensure seamless
                  integration and functionality.
                </li>
                <li>
                  Contributed to the front-end services using React.js, styled components, react
                  context, ant design and react-query.
                </li>
                <li>
                  Contributed to the back-end services for webhooks and integrations built in
                  Node.js (Express.js) and Prisma with MySQL and PostgreSQL.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
