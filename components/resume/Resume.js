import { experience, resumeProjects as projects, freelance, techSkills } from '../../data'
import Experience from './Experience'
import ResumeProjects from './ResumeProjects'
import Freelance from './Freelance'
import TechSkills from './TechSkills'
import Education from './Education'

const Resume = () => {
  return (
    <section className='py-12 lg:py-[3.6rem] container mx-auto'>
      <div className='flex flex-col items-center gap-16'>
        <h1 className='text-5xl'>Resume</h1>

        <Experience experience={experience} />
        <ResumeProjects projects={projects} />
        <Freelance freelance={freelance} />
        <TechSkills techSkills={techSkills} />
        <Education />
      </div>
    </section>
  )
}

export default Resume
