import Typed from 'react-typed';

const Hero = ({ dta }) => {
  const { name } = dta;
  return (
    <div className='max-h-[85vh] pt-20 bg-slate-800	 text-white h-screen m-auto p-7'>
      <div className=' text-center  text-3xl uppercase font-semibold'>
        <h1 className='text-blue-600'>{name}</h1>
        <h1>Rev up your ride with ease</h1>
        <h1>
          one-stop for motorcycle<span className='p-2'>
            <Typed
              strings={['gear and accessories']}
              typeSpeed={70}
              backSpeed={50} loop></Typed></span>
        </h1>
      </div>
      <p className='mt-44 max-w-md mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        similique, quos voluptate eius ipsa minima suscipit natus saepe quis vitae fuga
        aspernatur ea molestias nesciunt!</p><p className='uppercase max-w-md text-center rounded-lg mx-auto'>
        <button >shop now</button></p>
    </div>
  )
}

export default Hero
