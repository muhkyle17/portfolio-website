import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const ProjectCard = ({
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

  return (
    <motion.div
      className='box flex flex-col mb-2 border-2 border-primary rounded-t-xl// rounded-2xl cursor-pointer hover:ease-in transition-all duration-300'
      onClick={() => router.push(`/projects/${projectRoute}`)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 500, damping: 1 }}>
      <Image
        src={image}
        alt={`${title} Picture`}
        width='360'
        height='180'
        layout='intrinsic'
        className='rounded-t-2xl'
      />
      <div className='flex flex-col py-5 px-7 bg-transparent'>
        {/* //TODO: Find a more sustainable way of making the font size here smaller */}
        <p className={`${projectRoute === 'ngs' ? 'text-2xl' : 'text-3xl'} text-primary `}>
          {title}
        </p>
        <p className='mt-4 text-base font-semibold'>{techType}</p>
        <p className='text-base font-semibold'>{appType}</p>
      </div>
    </motion.div>
  )
}

export default ProjectCard
