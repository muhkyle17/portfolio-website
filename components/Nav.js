import React from 'react'

// import navigation data
import { navigation } from '../data'

// import Link
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-8 text-sm capitalize'>
        {navigation.map((item, index) => {
          return (
            <li
              className='text-white hover:text-[#FFA112] cursor-pointer'
              key={index}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {/* {`${item.name[0].toUpperCase()}${item.name.substring(1)}`} */}
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
