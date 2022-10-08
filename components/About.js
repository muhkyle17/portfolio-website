// Import externals
import { useState } from 'react'
import Image from 'next/image'

// Import internals
import PictureOfMe from '../public/CON_1265.jpg'
import PictureOfMe2 from '../public/Mikyle_pic_normal.jpeg'

function Modal() {
  return (
    <div className='h-screen fixed bottom-0 left-0 z-50'>
      <div className='h-screen flex justify-center items-center bg-[#000000a9]'>
        <div className='w-[70%] h-[80%] bg-gray-800 rounded-lg py-7 px-20 relative'>
          <h2 className='text-center text-5xl'>About Me</h2>
          <p className=''>
            Hi! I&lsquo;m Mikyle and I&lsquo;m a Fullstack Developer and
            investor from the Philippines, currently living and working in
            Vancouver. My coding journey started early in university where I
            discovered coding through my older sister! In 2021, I realized that
            coding was exactly what I wanted to do in life so I took the leap
            and decided to quit my job and learn coding full-time.
          </p>
          <p className=''>
            Since then, I have been on an exciting journey of learning and
            creating, fueled by my passion for design aesthetics and creative
            learning. What started out as a hobby turned quickly into a passion
            of work and lifelong learning. In coding, I found a perfect mix of
            designing, creating, and problem-solving.
          </p>
          <p className=''>
            My current tech stack includes JavaScript, React.js, Next.js,
            TailwindCSS, and Ruby on Rails. I am currently in the process of
            learning Python and Node.js.
          </p>
        </div>
      </div>
    </div>
  )
}

const About = ({ setHideHeader }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section id='about' className='py-12 lg:py-16 bg-secondary'>
        <div className='container mx-auto flex flex-wrap lg:flex-nowrap h-full gap-10'>
          <div className='flex items-start justify-center w-full'>
            <Image
              src={PictureOfMe}
              alt='Picture of me with background'
              width={610}
              height={400}
              layout='intrinsic'
              className='rounded-xl'
            />
          </div>
          <div className='w-full flex flex-col gap-5 md:px-12 lg:px-0'>
            <h1 className='text-4xl font-bold'>Mikyle Reyes</h1>
            <p className='text-primary'>Fullstack Developer</p>
            <hr className='border-[0.3px] border-white border-opacity-30 rounded-full' />
            <button
              className='py-4 px-7 w-fit font-medium text-white flex items-center justify-center rounded-xl hover:bg-primaryDarker bg-primary hover:bg-secondary-hover md:btn-lg transition-all'
              onClick={() => setShowModal(true)}
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
      {showModal && setHideHeader(true)}
      {showModal && <Modal />}
    </>
  )
}

export default About
