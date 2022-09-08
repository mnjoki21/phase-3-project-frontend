import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <h3>e-library</h3>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/books'>Books Available</NavLink>
      <NavLink to='/customers'>Customers</NavLink>
      <NavLink to='/purchases'>Purchases Made</NavLink>
      <NavLink to='/about'>About</NavLink>

    </div>
  )
}

export default NavBar