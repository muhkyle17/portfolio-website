import Head from 'next/head'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Project from '../../components/projects/Project'

const project = () => {
  return (
    <>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <div className='relative'>
        <Header />
        <div className='mt-32 mb-10 h-screen'>
          <Project />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default project
