import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Portfolio from '../components/Portfolio'

const ProjectsPage = () => {
  return (
    <div className='relative'>
      <Header />
      <div className='mt-24 mb-10'>
        <Portfolio />
      </div>
      <Footer />
    </div>
  )
}

export default ProjectsPage
