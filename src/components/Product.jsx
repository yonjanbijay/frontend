import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (currEle) => {
    const { id, name, image, price, category } = currEle;

    return <NavLink to={`/singleProduct/${id}`}>
        <div className='text-base sm:text-lg md:text-xl'>
            {/* <figure>
                <img src={image} />
                <figcaption className='top-0'>{category}</figcaption>
            </figure> */}
            <figure class="relative">
                <img src={image} alt={name} />
                <figcaption class="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 text-right w-full object-top">{category}
                </figcaption>
            </figure>
            <div className='flex justify-between items-center'>
                <h3 className='pl-5'>{name}</h3>
                <h3 className='pr-5'>{price}</h3>
            </div>
        </div>

    </NavLink>


}

export default Product