const Education = () => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <p>Education</p>

      <div className='flex gap-5 px-10 py-10 bg-primary rounded-[45px]'>
        <div className='flex flex-col gap-3 w=[100%]'>
          <h1 className='text-xl font-semibold'>
            Full Stack Web Development, <span className='italic'>Avion School</span>
          </h1>
          <p>June 2021 - December 2021</p>
          <p>Manila, Philippines</p>
        </div>
      </div>
    </div>
  )
}

export default Education
