import React from 'react'

// Import components
import Nav from '../Nav'
import Social from '../Social'

const Header = () => {
  return (
    <div className='mt-8 flex justify-between items-center'>
      <a href='#' className='text-2xl'>
        Mikyle Reyes
      </a>
      <Nav />
      <Social />
    </div>
  )
}

export default Header
