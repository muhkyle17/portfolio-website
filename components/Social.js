import React from 'react'

// import social icons
import { social } from '../data'

const Social = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-primary hover:text-primaryDarker border-t border-transparent hover:border-primary transition-all duration-300 py-[5px] ml-[3rem]'
            key={index}
          >
            <a
              href={item.href}
              target='_blank'
              rel='noreferrer'
              className='text-base'
            >
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Social
