import { updatedSkills } from '../../data'

const TechSkills = () => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <h1 className='text-4xl font-semibold'>Skills</h1>

      <div className='flex flex-wrap gap-1 px-10 py-10 bg-transparent border-2 border-primary rounded-[45px]'>
        <span className='font-bold mr-1'>Skills: </span>
        {updatedSkills.map((skill, index) => {
          return (
            <p key={skill}>
              <span>
                {skill}
                {index !== updatedSkills.length - 1 && ','}
              </span>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default TechSkills
