import Head from 'next/head'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import About from '../components/About'

const AboutMePage = () => {
  return (
    <>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <div className='flex flex-col min-h-screen'>
        <Header />

        <div className='mt-32 mb-10 flex-grow'>
          <About />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default AboutMePage
