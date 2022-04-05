import React from 'react'
import phone from '../New folder/smart phone 1.jpg'
import Phone1 from '../New folder/smart phone 2.jpg'
import phones from '../New folder/smart phone 3.jpg'


function Products() {
  return (
<div>
    <div className='firstrow'>
    <div className='card'>
 <h2>sumsung</h2>
 <img src={phone}  alt=""/>
<p>Ghc 40,000</p>
<button>Buy Me</button>
</div>

  <div className='card'> 
  <h2>iphone</h2>
    <img src={Phone1}  alt=""/>
    <p>Ghc50,000</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Tecno</h2>
     <img src={phones}  alt=""/>
    <p>Ghc20,000</p>
    <button>Buy Me</button>
    </div>
   
    </div>
    <div className='headphones'></div>

    <div className='pendrives'></div>

    <div className='phonecases'></div>
    </div>

    
    
    
    
  )
}

export default Products
