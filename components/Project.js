// Import externals
import React from 'react'
import Image from 'next/image'

// Import internals
import imagePlaceholder from '../public/projects/brewlab.png'

const Project = ({ title, image, skills, description, live, source }) => {
  console.log(skills)
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 w-[18rem]`}
    >
      <p className='text-2xl font-semibold'>{title}</p>
      <Image
        src={image}
        alt='Brew Lab Project'
        width='380'
        height='190'
        className='rounded-lg'
      />
      <div className='flex'>
        {skills.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
      <p className='text-center'>{description}</p>
      <div className='flex gap-5'>
        <a
          href={live}
          className='bg-transparent border-2 border-primary hover:bg-primary hover:border-primary transition-all duration-600 duration-300 rounded-full py-[0.4rem] px-7'
        >
          Live
        </a>
        <a
          href={source}
          className='bg-transparent border-2 border-primary hover:bg-primary hover:border-primary transition-all duration-600 duration-300 rounded-full py-[0.4rem] px-7'
        >
          Source
        </a>
      </div>
    </div>
  )
}

export default Project
