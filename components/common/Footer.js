// Import externals
import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <section id='footer' className='h-28 bg-tertiary hidden sm:block'>
      <div className='container mx-auto flex flex-col h-full items-center justify-center'>
        <p className='flex items-center text-base'>
          Coded with <FiHeart className='mx-2' /> by Mikyle Reyes using Next.js and Tailwind CSS.
        </p>
        {/* <p className='text-base'>Designed by Cristian Mihai.</p> */}
      </div>
    </section>
  )
}

export default Footer
