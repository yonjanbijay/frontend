import Hero from './components/Hero';

const Home = () => {
    const data = { name: "Wel-come RIDERS where you can" }
    return (
        <div>
            <Hero dta={data} />
        </div>
    )
}

export default Home