import React from 'react'
import {FaLocationArrow} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='header'>
    <FaLocationArrow className='icon'/>
    <h2>Nazifa phones and Accessories</h2>
    <ul>
    <li><Link to ="/">Home</Link></li>
    <li><Link to ="/about">About Us</Link></li>
    <li><Link to ="products/">Products</Link></li>
    <li><link to ="/contact">Contact Us</link></li>
    </ul>
    </div>
  )
}

export default NavBar