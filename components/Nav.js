import React from 'react'
import { useRouter } from 'next/router'

import { navigation } from '../data'

const Nav = () => {
  const router = useRouter()

  const dynamicRouter = item => {
    if (router.asPath === item.href) return 'text-primary border-b-2 border-b-primary'
    if (router.asPath.includes('/projects') && item.href === '/projects')
      return 'text-primary border-b-2 border-b-primary'
  }

  return (
    <nav>
      <ul className='flex gap-14 text-sm capitalize items-center justify-center'>
        {navigation.map((item, index) => {
          return (
            <li className='text-white' key={index}>
              <button
                onClick={() => router.push(`/${item.href}`)}
                className={`
                  border-b-2 border-transparent cursor-pointer transition-all duration-300 py-[3px]
                  hover:border-primary hover:text-primary
                  ${dynamicRouter(item)}
                  `}>
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
