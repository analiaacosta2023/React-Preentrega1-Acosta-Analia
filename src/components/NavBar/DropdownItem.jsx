import React from 'react'
import { NavLink } from 'react-router-dom'
import "./DropdownItem.scss"

function DropdownItem() {

  return (
    <div className='dropdown'>
        <NavLink to="/category/flamingo" className="text-hover-white">Colección Flamingo</NavLink>
        <NavLink to="/category/crocodile" className="text-hover-white">Colección Crocodile</NavLink>
        <NavLink to="/category/dinosaur" className="text-hover-white">Colección Dinosaur</NavLink>
        <NavLink to="/category/watermelon" className="text-hover-white">Colección Watermelon</NavLink>
        <NavLink to="/category/orange" className="text-hover-white">Colección Orange</NavLink>
    </div>
  )
}

export default DropdownItem