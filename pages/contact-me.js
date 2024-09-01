import Head from 'next/head'

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
// import ContactMeComponent from '../components/ContactMe'
import ContactForm from '../components/ContactForm'

const ContactMe = () => {
  return (
    <>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <div className='flex flex-col min-h-screen'>
        <Header />

        <div className='mt-10 mb-10 flex-grow'>
          <ContactForm />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ContactMe
