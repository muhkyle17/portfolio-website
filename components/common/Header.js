// Import externals
import React, { useState, useEffect } from 'react'

// Import internals
import Nav from '../Nav'
import Social from '../Social'
import NavMobile from '../NavMobile'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex justify-between items-center px-10 lg:px-7'>
        <a
          href='#'
          className='text-5xl name hover:text-primary transition-all duration-300'
        >
          Mikyle Reyes
        </a>

        <div className='hidden lg:block'>
          <Nav />
        </div>
        <div className='hidden lg:block'>
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
