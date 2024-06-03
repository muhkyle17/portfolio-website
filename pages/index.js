import Head from 'next/head'

// Import internals
import Header from '../components/common/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import SkillsIcons from '../components/SkillsIcons'
import PortfolioHome from '../components/Portfolio-Home'
import Footer from '../components/common/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <div className='relative'>
        <Header />
        <Hero />
        <PortfolioHome />
        <SkillsIcons />
        <Footer />
      </div>
    </div>
  )
}
