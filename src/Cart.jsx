import React from 'react'
import {useProductContext} from './context/NoteContext'
const Cart = () => {
    const {name}=useProductContext();
    return (
        <div className='text-3xl text-white'>
            Cart {name}</div>
    )
}

export default Cart