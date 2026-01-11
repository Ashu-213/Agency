

const Title = ({title, desc}) => {
  return (
    <>
    <h2 className='text-3xl font-medium sm:text-5xl' >{title}</h2>
    <p className='max-w-lg text-gray-500 dark:text-white/75 mb-6' >{desc}</p>
    </>
  )
}

export default Title