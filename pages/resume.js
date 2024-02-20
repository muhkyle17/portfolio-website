import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Resume from '../components/Resume'

const ResumePage = () => {
  return (
    <>
      <Header />
      <div className='mt-24 mb-10'>
        <Resume />
      </div>
      <Footer />
    </>
  )
}

export default ResumePage
