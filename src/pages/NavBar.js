import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBookOpen , FaCartPlus} from 'react-icons/fa';
import '../Navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <h3 className='head'> <FaBookOpen />e-library</h3>
      <NavLink  to='/' >Home</NavLink>
      <NavLink to='/books'>Books Available</NavLink>
      <NavLink  to='/customers'>Customers</NavLink>
      <NavLink className='my_shop' to='/purchases'> My purchases <FaCartPlus/></NavLink>
      <NavLink  to='/about'>About</NavLink>



    </div>
  )
}

export default NavBar