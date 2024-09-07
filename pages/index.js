import Head from 'next/head'

// Import internals
import Header from '../components/common/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import SkillsIcons from '../components/SkillsIcons'
import PortfolioHome from '../components/Portfolio-Home'
import Footer from '../components/common/Footer'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/notion/projects')
  const data = await res.json()

  return { props: { data } }
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <div className='flex flex-col min-h-screen'>
        <Header />

        <div className='flex-grow'>
          <Hero />
          <PortfolioHome notionProjects={data.projects} />
          <SkillsIcons />
        </div>

        <Footer />
      </div>
    </div>
  )
}
