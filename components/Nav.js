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
            <li className='text-white' key={index}>
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='border-t// border-b border-transparent hover:border-primary hover:text-primary cursor-pointer transition-all duration-300 py-[3px]'
              >
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
