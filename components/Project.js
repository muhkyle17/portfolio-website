import React from 'react'
import Image from 'next/image'

const Project = ({ title, image, techType, appType, skills, description, live, source }) => {
  return (
    <div className='flex flex-col mb-2 border-2 border-primary rounded-t-xl// rounded-2xl cursor-pointer hover:ease-in transition-all duration-300'>
      <Image
        src={image}
        alt='Brew Lab Project'
        width='360'
        height='200'
        layout='intrinsic'
        className='rounded-t-2xl'
      />
      <div className='flex flex-col py-5 px-7 bg-transparent'>
        <p className='text-3xl text-primary'>{title}</p>
        <p className='mt-4 text-base font-semibold'>{techType}</p>
        <p className='text-base font-semibold'>{appType}</p>
      </div>
    </div>
  )
}

export default Project
