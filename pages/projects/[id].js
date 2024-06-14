import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

const project = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <div className='relative'>
        <Header />
        <div className='mt-24 mb-10'>Project portion</div>
        <Footer />
      </div>
    </>
  )
}

export default project
