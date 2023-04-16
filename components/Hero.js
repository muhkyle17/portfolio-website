import React from 'react'

// Import next image
// import Image from 'next/image'

// Import image from src files
// import MePicture from '../public/Mikyle_pic.png'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh]// lg:h-[100vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col gap-4 items-center lg:items-start'>
            <p className='text-lg text-primary mb-[22px]//'>
              Hey! I&rsquo;m Mikyle, a Fullstack Developer!
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center lg:text-left'>
              I create beautiful & functional websites that help make a difference.
            </h1>
            <p className='pt-4// pb-8// md:pt-6// md:pb-12// max-w-[480px] text-lg text-center lg:text-left'>
              Let&rsquo;s build something great together.
            </p>
            {/* <button className='py-4 px-7 font-medium text-white flex items-center justify-center rounded-xl hover:bg-primaryDarker bg-primary hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button> */}
          </div>
          {/* <div className='hidden lg:flex h-[30rem] flex-0 justify-center items-center mb-[18rem] w-[30rem] bg-red-400//'>
            <Image
              src={MePicture}
              alt='Picture of me'
              layout='fixed'
              height={650}
              width={500}
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
