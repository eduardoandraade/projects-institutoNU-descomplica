import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav className='flex-column sidebar'>
        <NavLink exact to='/' className='nav-link' activeClassName='active'>
            Home
        </NavLink>
        <NavLink exact to='/count' className='nav-link' activeClassName='active'>
            Contador
        </NavLink>
        <NavLink exact to='/about' className='nav-link' activeClassName='active'>
            About
        </NavLink>
        <NavLink exact to='/listUsers' className='nav-link' activeClassName='active'>
            Lista de Usuarios
        </NavLink>
    </Nav>
  )
}

export default Sidebar