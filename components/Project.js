import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Project = ({
  title,
  projectRoute,
  image,
  techType,
  appType,
  skills,
  description,
  live,
  source,
}) => {
  const router = useRouter()
  console.log(router, 'router')
  const hi = 'hi'
  return (
    <motion.div
      className='box flex flex-col mb-2 border-2 border-primary rounded-t-xl// rounded-2xl cursor-pointer hover:ease-in transition-all duration-300'
      onClick={() => router.push(`/projects/${projectRoute}`)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 500, damping: 1 }}>
      <Image
        src={image}
        alt='Brew Lab Project'
        width='360'
        height='180'
        layout='intrinsic'
        className='rounded-t-2xl'
      />
      <div className='flex flex-col py-5 px-7 bg-transparent'>
        <p className='text-3xl text-primary'>{title}</p>
        <p className='mt-4 text-base font-semibold'>{techType}</p>
        <p className='text-base font-semibold'>{appType}</p>
      </div>
    </motion.div>
  )
}

export default Project
