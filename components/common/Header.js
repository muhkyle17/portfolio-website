import React from 'react'

// Import components
import Nav from '../Nav'
import Social from '../Social'
import NavMobile from '../NavMobile'

const Header = () => {
  return (
    <div className='mt-8 flex justify-between items-center'>
      {/* logo */}
      <a href='#' className='text-5xl name'>
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
  )
}

export default Header
