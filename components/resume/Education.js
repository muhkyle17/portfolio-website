const Education = ({ education }) => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <p>Education</p>

      {education.map(edu => {
        return (
          <div key={Math.random()} className='flex gap-5 px-10 py-10 bg-primary rounded-[45px]'>
            <div className='flex flex-col gap-3 w=[100%]'>
              <h1 className='text-xl font-semibold'>
                {edu.program}, <span className='italic'>{edu.school}</span>
              </h1>
              <p>{edu.duration}</p>
              <p>{edu.location}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Education
