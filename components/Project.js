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
      className={`flex flex-col items-center justify-center gap-3 w-[18rem] ${bgColor}//`}
    >
      <p>Name</p>
      <Image src={imagePlaceholder} alt='Brew Lab Project' />
      <p>Skills</p>
      <p className='text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        nesciunt libero ipsa maiores nemo dolor, aliquid ducimus distinctio
        reprehenderit quibusdam!
      </p>
      <div className='flex'>
        <p>Live</p>
        <p>Source</p>
      </div>
    </div>
  )
}

export default Project
