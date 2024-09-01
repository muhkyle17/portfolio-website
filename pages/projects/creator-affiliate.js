import Head from 'next/head'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import AffiliateProject from '../../components/projects/AffiliateProject'

const CreatorAffiliate = () => {
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
          <AffiliateProject />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default CreatorAffiliate
