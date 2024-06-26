import React from 'react'
import Image from 'next/image'

const ProjectOldDisplay = ({ title, image, skills, description, live, source }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-[22rem]'>
      <p className='text-2xl font-semibold'>{title}</p>
      <Image
        src={image}
        alt='Brew Lab Project'
        width='380'
        height='200'
        layout='intrinsic'
        className='rounded-lg'
      />
      <div className='flex gap-3'>
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
      <p className='text-center mt-2'>{description}</p>
      <div className='flex gap-5'>
        <a
          href={live}
          target='_blank'
          rel='noreferrer'
          className='bg-transparent border-2 border-primary hover:bg-primary hover:border-primary transition-all duration-600 duration-500 rounded-full py-[0.4rem] px-7'>
          Live
        </a>
        <a
          href={source}
          target='_blank'
          rel='noreferrer'
          className='bg-transparent border-2 border-primary hover:bg-primary hover:border-primary transition-all duration-600 duration-500 rounded-full py-[0.4rem] px-7'>
          Source
        </a>
      </div>
    </div>
  )
}

export default ProjectOldDisplay
