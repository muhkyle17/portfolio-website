// Import external
import React from 'react'
import Image from 'next/image'

// Import internal
import { skills } from '../data'

const Skills = () => {
  return (
    <section className='h-[20vh] bg-[#131419]'>
      <ul className='flex items-center justify-around px-14 h-full w-full'>
        {skills.map((item, index) => {
          return (
            <li key={index}>
              <Image src={item.image} alt={item.alt} width='86' height='86' />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
