import { useState } from 'react'

import Social from './Social'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: '',
  })

  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = e => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const res = await fetch('api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    setResponseMessage(data.message)

    if (res.ok) {
      setFormData({ firstName: '', lastName: '', email: '', companyName: '', message: '' })
    }
  }

  return (
    <section className='container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 lg:gap-20 w-full h-full pt-32// mt-[5rem] overflow-hidden relative py-12 lg:pt-[3.6rem]'>
      <div className='flex flex-col items-start justify-center lg:w-1/2 gap-8 lg:gap-10'>
        <h2 className='text-6xl sm:text-7xl tracking-wide font-semibold text-primary'>
          Reach out.
        </h2>

        <div className='flex flex-col gap-1'>
          <h2 className='text-3xl font-semibold'>I&lsquo;d love to help.</h2>
          <h2 className='text-lg sm:text-xl tracking-wide'>
            Let me know what you need. I&lsquo;ll get in touch within 24 hours.
          </h2>
        </div>

        <Social iconSize='text-2xl' />
      </div>

      <div className='hidden lg:block h-[35rem] border-r-2 border-primary' />

      <div className='mb-20 w-full md:mb-0 lg:w-1/2'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Your first name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-300 focus:outline-none'
            required
          />

          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Your last name'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-300 focus:outline-none'
            required
          />

          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email address'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-300 focus:outline-none'
            required
          />
          <input
            type='text'
            name='companyName'
            placeholder='Company Name'
            value={formData.companyName}
            onChange={handleChange}
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-300 focus:outline-none'
            required
          />

          <textarea
            type='text'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows='4'
            cols='50'
            className='w-full py-2 bg-transparent border-b border-primary font-normal text-xl placeholder:text-gray-300 focus:outline-none'
            placeholder='Leave a message...'
          />

          <button
            type='submit'
            className='bg-primary border-2 border-primary rounded-full py-3 px-6 w-fit font-medium text-white hover:bg-transparent hover:text-primary transition-all duration-500'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
