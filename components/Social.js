import React from 'react'

// import social icons
import { social } from '../data'

const Social = ({ iconSize }) => {
  return (
    <ul className='flex space-x-6 justify-end'>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-primary hover:text-primaryDarker border-t border-transparent hover:border-primary transition-all duration-300 py-[5px]'
            key={index}>
            <a
              href={item.href}
              target='_blank'
              rel='noreferrer'
              className={iconSize || 'text-base'}>
              {item.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Social
