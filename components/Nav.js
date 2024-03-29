import React from 'react'
import { useRouter } from 'next/router'

import { navigation } from '../data'

const Nav = () => {
  const router = useRouter()
  return (
    <nav>
      <ul className='flex gap-14 text-sm capitalize items-center justify-center'>
        {navigation.map((item, index) => {
          return (
            <li className='text-white' key={index}>
              <button
                onClick={() => router.push(`/${item.href}`)}
                className='border-b border-transparent hover:border-primary hover:text-primary cursor-pointer transition-all duration-300 py-[3px]'>
                {item.name}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
