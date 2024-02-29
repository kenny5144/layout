import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    
    <nav>
      <ul>
      <NavLink className={({isActive})=>isActive?"active":""} to="/">Home</NavLink>
     
      <NavLink className={({isActive})=>isActive?"active":""} to="/keyla">Keyla</NavLink>
      <NavLink className={({isActive})=>isActive?"active":""} to="/place">Place</NavLink>
     
      </ul>
    </nav>
    </>
  )
}

export default Nav
