import React from 'react'

import Image from 'next/image'

import imagePlaceholder from '../public/brewlab.png'

const Project = ({
  name,
  picture,
  skills,
  description,
  live,
  source,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 w-[18rem]`}
    >
      <p className='text-xl'>Name</p>
      <Image
        src={imagePlaceholder}
        alt='Brew Lab Project'
        width='360'
        height='200'
        className='rounded-lg'
      />
      <p>Skills</p>
      <p className='text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio
        reprehenderit quibusdam alksjdf ;alsfei sjfioe jaejfuiw isuf
        uehfouuosefjw owefjiosej fsj oejfs iosfeooisjf !
      </p>
      <div className='flex'>
        <p>Live</p>
        <p>Source</p>
      </div>
    </div>
  )
}

export default Project
