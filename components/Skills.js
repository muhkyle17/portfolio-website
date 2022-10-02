// Import external
import React from 'react'
import Image from 'next/image'

// Import internal
import apolloclient from '../public/skills/apolloclient.png'
import { skills } from '../data'

skills.map((image, index) => console.log(image.image))

const Skills = () => {
  return (
    <section className='h-[20vh] bg-[#131419]'>
      <ul className='flex items-center justify-around px-14 h-full w-full'>
        {skills.map((item, index) => {
          return (
            <li key={index}>
              <Image src={item.image} alt='Skills' width='96' height='96' />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skills
