import Hero from './components/Hero';

const About = () => {
  const data = { name: "Our Store will" }
  return (
    <div className=' text-white'>
      <Hero dta={data} />
    </div>
  )
}

export default About