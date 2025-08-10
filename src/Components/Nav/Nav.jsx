import React from 'react'
import logo from '../../assets/img/logo.png'

export function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="" className='active'>Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Restaurant</a></li>
        <li><a href="">Dishes</a></li>
      </ul>

      <div className="nav-buttons">
        <i className="ri-shopping-cart-2-line"></i>
      </div>
    </nav>
  )
}
