import Head from 'next/head'

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Portfolio from '../../components/projects/Portfolio'

export async function getServerSideProps(context) {
  console.log(context, 'context')
  const res = await fetch('http://localhost:3000/api/notion/projects')
  const data = await res.json()

  console.log(data, 'data') // !REMOVE

  return { props: { data } }
}

const projects = ({ data }) => {
  return (
    <>
      <Head>
        <title>Mikyle Reyes</title>
        <meta name='description' content='Mikyle Reyes' />
        <link rel='icon' href='/notion-avatar-1663964359003.svg' />
      </Head>

      <div className='flex flex-col min-h-screen'>
        <Header />

        <div className='mt-24 mb-10 flex-grow'>
          <Portfolio notionProjects={data.projects} />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default projects
