import React from 'react';
// Utile pour créer des liens
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <NavLink 
      to="/"
      // style={({isActive}) => {
      //   return isActive ? {color:'red'} : {color: 'violet'};
      // }}
      className={({isActive}) => isActive ? 'active-link' : ''}>Accueil</NavLink>
      <NavLink 
      to="/services"
      className={({isActive}) => isActive ? 'active-link' : ''}>Services</NavLink>
      <NavLink 
      to="/contact"
      className={({isActive}) => isActive ? 'active-link' : ''}>Contact</NavLink>
    </nav>
  )
}

export default Navbar;
