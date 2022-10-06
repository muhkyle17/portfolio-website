// Import externals
import React from 'react'
import Image from 'next/image'

// Import internals
import { skills } from '../data'

const Skills = () => {
  return (
    <section className='h-[20vh] bg-[#131419]'>
      <div className='container mx-auto h-full'>
        <ul className='flex items-center justify-between h-full w-full'>
          {skills.map((item, index) => {
            return (
              <li key={index}>
                <Image src={item.image} alt={item.alt} width='86' height='86' />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Skills
