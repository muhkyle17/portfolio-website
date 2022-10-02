import Head from 'next/head'
import Image from 'next/image'

// Import components
import Header from '../components/common/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative'>
        <Header />
        <Hero />
        <About />
        <Skills />
      </div>
    </div>
  )
}
