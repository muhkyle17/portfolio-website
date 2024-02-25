import Head from 'next/head'

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ContactMeComponent from '../components/ContactMe'

const ContactMe = () => {
  return (
    <div className='relative h-[91.5vh]'>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <Header />
      <div>
        <ContactMeComponent />
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default ContactMe
