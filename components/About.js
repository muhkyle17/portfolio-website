// Import externals
import React from 'react'
import Image from 'next/image'

// Import internals
import PictureWithBg from '../public/Mikyle_pic_normal.jpeg'

const About = () => {
  return (
    <section id='about' className='py-12 lg:py-28 bg-secondary'>
      <div className='container mx-auto h-full px-28 flex justify-around w-full'>
        <div className='flex items-center justify-center w-full'>
          <Image
            src={PictureWithBg}
            alt='Picture of me with background'
            width={450}
            height={580}
            className='rounded-xl'
          />
        </div>
        <div className='w-full'>
          <h1 className='text-4xl font-bold'>Mikyle Reyes</h1>
          <p className='mt-4 mb-8 text-primary'>Fullstack Developer</p>
          <hr className='mb-8 border-[0.3px] border-white border-opacity-30 rounded-full' />
          <p className='text-gray-400 mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
            earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
            neque harum velit molestiae dignissimos distinctio dolorum nisi
            labore culpa nihil.
          </p>
          <p className='text-gray-400 mb-8'>
            Qui doloremque quod sit accusantium unde totam inventore cupiditate
            ratione esse maxime eum recusandae ducimus.
          </p>
          <button className='py-4 px-7 font-medium text-white flex items-center justify-center rounded-xl hover:bg-primaryDarker bg-primary hover:bg-secondary-hover md:btn-lg transition-all'>
            Contact me
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
