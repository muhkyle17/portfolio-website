import React from 'react'
import Image from 'next/image'

// Import picture of me
import PictureWithBg from '../public/Mikyle_pic_bg.jpg'

const About = () => {
  return (
    <section id='about' className='py-12 lg:py-32 bg-secondary'>
      <div className='container mx-auto h-full px-7 flex justify-around w-full'>
        <div className='flex items-center justify-center w-full'>
          <Image
            src={PictureWithBg}
            alt='Picture of me with background'
            width={350}
            height={450}
            className='rounded-xl'
          />
        </div>
        <div className='w-full'>
          <h2 className='text-4xl'>Mikyle Reyes</h2>
          <p className='mt-4 mb-8 text-primary'>Frontend Web Developer</p>
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
