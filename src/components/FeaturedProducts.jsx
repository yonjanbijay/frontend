import { useProductContext } from "../context/NoteContext";
import Product from "./Product";


const FeaturedProducts = () => {
    const {isLoading, featureProducts }= useProductContext();
    if(isLoading){return <div>....loading</div>}
 return (
        <div className="text-3xl text-white">
            Featured Products
            <section className="grid grid-cols-3">
                {featureProducts.map((currEle)=>{
                    return (<Product key={currEle.id} {...currEle}/>)
                   
                })}
            </section>
            
            </div>
    )
}

export default FeaturedProducts