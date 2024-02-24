import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import About from '../components/About'

const AboutMePage = () => {
  return (
    <div className='relative h-full min-h-[90vh]'>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>
      <Header />
      <div className='mt-24 mb-[7.2rem]'>
        <About />
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default AboutMePage
