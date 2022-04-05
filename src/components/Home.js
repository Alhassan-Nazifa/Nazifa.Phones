import React from 'react'
import phones from '../pics/smart phone 1.jpg'
import head from "../pics/head phone 1.jpg"
import drives from '../pics/pendrive 1.jpg'
import cases from '../pics/phone case 1.jpg'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='products'>
    <div className='firstrow'>
    <div className='card'>
    <h2>SmartPhones</h2>
    <img src={phones}  alt=""/>
    <p>We sell quality smart phones at affordable prices</p>
    <button><Link to ="/products">view phones</Link></button>
    </div>

    
    <div className='card'>
    <h2>HeadPhones</h2>
    <img src={head}  alt=""/>
    <p>We sell quality smart phones at affordable prices</p>
    <button><Link to="/products">view head phones</Link></button>
</div>
    </div>
    <div className='secondrow'>
    <div className='card'>
    <h2>Pendrives</h2>
    <img src={drives}  alt=""/>
    <p>We sell quality pendrives at affordable prices</p>
    <button><Link to ="/products">view head phones</Link></button>
</div>

<div className='card'>
<h2>phonecases</h2>
<img src={cases}  alt=""/>
<p>We sell quality phonecases at affordable prices</p>
<button><Link to ="/products">view phone cases</Link></button>
</div>

    </div>


    
    
    
    
    
    </div>
    
  )
}

export default Home

