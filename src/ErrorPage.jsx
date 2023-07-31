import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='text-3xl text-white container'>
      <div className='text-center my-52'>
        <h1 className='text-3xl'>You are lost</h1>
        <h1 className='text-3xl'>You are can click on button to go to home page</h1>
        <NavLink to="/"><button>Home</button></NavLink>


      </div>
    </div>
  )
}

export default ErrorPage