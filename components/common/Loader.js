const Loader = () => {
  return (
    <div className='balls flex h-full w-16 items-center justify-between'>
      <div className='ball animate-left-swing'></div>
      <div className='ball'></div>
      <div className='ball animate-right-swing'></div>
    </div>
  )
}

export default Loader
