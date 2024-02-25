import { social } from '../data'
import Social from '../components/Social'

const ContactMe = () => {
  return (
    <section className='container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-20 w-full h-full pt-32// mt-[5rem] overflow-hidden relative py-12 lg:py-[3.6rem]'>
      <div className='flex flex-col items-start justify-center lg:w-1/2 gap-8 lg:gap-10'>
        <h2 className='text-6xl sm:text-7xl tracking-wide font-semibold text-primary'>
          Reach out.
        </h2>

        <div className='flex flex-col gap-1'>
          <h2 className='text-3xl font-semibold'>I&lsquo;d love to help.</h2>
          <h2 className='text-lg sm:text-xl tracking-wide'>
            Let me know what you need. I&lsquo;ll get in touch within 24 hours
          </h2>
        </div>

        <Social iconSize='text-2xl' />
      </div>

      <div className='hidden lg:block h-[35rem] border-r-2 border-primary' />

      <div></div>
    </section>
  )
}

export default ContactMe