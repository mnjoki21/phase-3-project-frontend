import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <h3 className='head'>e-library</h3>
      <NavLink class='nav' to='/' >Home</NavLink>
      <NavLink class='nav' to='/books'>Books Available</NavLink>
      <NavLink  class='nav' to='/customers'>Customers</NavLink>
      <NavLink class='nav' to='/purchases'>Purchases Made</NavLink>
      <NavLink  class='nav' to='/about'>About</NavLink>

    </div>
  )
}

export default NavBar