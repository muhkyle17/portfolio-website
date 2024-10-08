// Import externals
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Import internals
import Nav from '../Nav'
import Social from '../Social'
import NavMobile from '../NavMobile'

const Header = ({ hidden }) => {
  const [bg, setBg] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } items-center fixed top-0 w-full text-white z-10 transition-all duration-500 px-10 md:px-7 lg:px-0`}>
      <div className='container mx-auto h-full flex justify-between items-center'>
        <div className='w-1/4'>
          <button
            onClick={() => router.push('/')}
            type='button'
            className='name text-2xl hover:text-primary transition-all duration-500 w-fit flex justify-start'>
            MR
          </button>
        </div>

        <div className='hidden lg:block w-2/4'>
          <Nav />
        </div>
        <div className='hidden lg:block w-1/4'>
          <Social />
        </div>
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
