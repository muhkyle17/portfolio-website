// Import externals
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiX } from 'react-icons/fi'

// Import internals
import PictureOfMe from '../public/CON_1265.jpg'
import PictureOfMe2 from '../public/Mikyle_pic_normal.jpeg'

function Modal({ setShowModal }) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setShowModal(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  })

  return (
    <div className='h-screen fixed bottom-0 left-0 z-50'>
      <div
        className='h-screen flex justify-center items-center bg-[#000000a9]'
        onClick={() => setShowModal(false)}
      >
        <div
          className='w-[80%] max-h-[40rem] text-center xl:text-left bg-gray-800 rounded-lg py-10 sm:px-20 overflow-auto relative'
          onClick={(e) => e.stopPropagation()}
        >
          <FiX
            className='absolute top-4 right-5 text-2xl cursor-pointer'
            onClick={() => setShowModal(false)}
          />
          <div className='flex justify-center flex-wrap xl:flex-nowrap gap-8 h-[30rem]'>
            <div className='self-center w-[50%] xl:max-w-[23rem]'>
              <Image
                src={PictureOfMe2}
                alt='Picture of me in Modal'
                layout='responsive'
                className='rounded-xl'
              />
            </div>
            <div className='flex flex-col gap-6 xl:gap-1 justify-between max-w-[50%] text-base'>
              <h2 className='text-center text-3xl sm:text-4xl'>About Me</h2>
              <p>
                Hi! I&lsquo;m Mikyle, a developer and investor from the
                Philippines, currently living and working in Vancouver. My
                coding journey started early in university where I discovered
                coding through my older sister! In 2021, I realized that coding
                was exactly what I wanted to do in life. So I took the leap and
                decided to quit my job to learn coding full-time.
              </p>
              <p>
                Since then, I have been on an exciting journey of learning and
                creating, fueled by my passion for design aesthetics and
                creative learning. What started out as a hobby turned quickly
                into a passion of work and lifelong learning. In coding, I found
                a perfect mix of designing, creating, and problem-solving.
              </p>
              <p>
                When I&lsquo;m not coding, I&lsquo;m reading, working out,
                hiking, cooking, playing football, scuba diving or going on
                outdoor adventures. Life is and always will be an adventure!
              </p>
              <p className='pb-10 xl:pb-0'>
                My current tech stack includes JavaScript, React.js, Next.js,
                TailwindCSS, and Ruby on Rails. I am currently in the process of
                learning Python and Node.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => {
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
          <div className='w-full flex flex-col gap-5 md:px-12 lg:px-0 text-lg'>
            <h1 className='text-4xl font-bold'>About Me</h1>
            <p className='text-primary text-2xl'>Mikyle Reyes</p>
            <hr className='border-[0.3px] border-white border-opacity-30 rounded-full' />
            <p>
              I&lsquo;m a Fullstack Developer with a great passion for creating
              beautiful applications and websites.
            </p>
            <p>
              Although I specialize in crafting user interfaces using modern web
              technologies, I&lsquo;m also learning different backend
              technologies to become a better developer.
            </p>
            <div className='flex gap-4'>
              <button
                className='py-3 px-7 w-fit font-medium text-white flex items-center justify-center rounded-xl hover:bg-primaryDarker bg-primary hover:bg-secondary-hover md:btn-lg transition-all'
                onClick={() => setShowModal(true)}
              >
                Learn more
              </button>
              <a
                download
                href='/public/Mikyle-Resume.pdf'
                alt='Resume'
                target='_blank'
                rel='noopener noreferrer'
                className='py-3 px-7 w-fit font-medium text-white flex items-center justify-center rounded-xl hover:bg-primaryDarker bg-primary hover:bg-secondary-hover md:btn-lg transition-all'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  )
}

export default About
