import React from 'react'
import woman from '../assets/woman.jpg';

const home = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1>Welcome to Amaka Fashion Store</h1>
        <p>Discover the latest trends in fashion and elevate your style with our curated collection of clothing, accessories, and footwear. <br />Shop now and experience the perfect blend of quality, affordability, and style at Amaka Fashion Store.</p>
        <button className='shop-now'>Shop Now</button>    
        
      </div>

      <div className='hero-image'>
        <img src={woman} alt='fashion model'/>
      </div>
    </section>
    
      
    
  )
}

export default home
