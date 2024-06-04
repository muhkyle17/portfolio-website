import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import About from '../components/About'
import Skills from '../components/about/Skills'

const AboutMePage = () => {
  return (
    <div className='relative h-full min-h-[90vh]'>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>
      <Header />
      <div className='mt-24'>
        <About />
      </div>
      <div className='mt-24 mb-[7.2rem] bg-tertiary'>
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default AboutMePage
