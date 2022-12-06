import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/'>
      <div>
        <div className=' flex text-3xl font-semibold text-pink-500 items-center '>
        <p>Foodie</p>
        </div>
    </div>
    </Link>
  )
}

export default Navbar