import React from 'react'

// Import components
import Nav from '../Nav'

const Header = () => {
  return (
    <div className='mt-10 flex justify-between items-center'>
      <a href='#' className='text-2xl'>
        Mikyle Reyes
      </a>
      <Nav />
      <div>Social</div>
    </div>
  )
}

export default Header
