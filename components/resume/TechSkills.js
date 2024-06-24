import { aboutSkillsTools } from '../../data'

const TechSkills = ({ techSkills }) => {
  return (
    <div className='flex flex-col gap-8 w-4/6'>
      <h1 className='text-4xl font-semibold'>Technical Skills</h1>

      <div className='flex gap-5 px-10 py-10 bg-transparent border-2 border-primary rounded-[45px]'>
        <div className='flex flex-col gap-5 w-[100%]'>
          {aboutSkillsTools.map(skill => {
            return (
              <div key={Math.random()}>
                <h3 className='font-bold'>
                  {skill.type}:{' '}
                  {skill.skills.map((stack, index) => (
                    <span key={Math.random()} className='font-normal'>
                      {stack}
                      {index !== skill.skills.length - 1 ? ',' : ''}{' '}
                    </span>
                  ))}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechSkills
