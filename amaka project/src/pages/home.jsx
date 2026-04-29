import React from 'react'
import heropage from '../components/Heropage';
import woman from '../assets/woman.jpg';
import load from  '../assets/load.avif';
import shopping from '../assets/shopping.avif';





function home() {
  return (
   <div>
     
      <div className="hero-page">
        <h6>your home of quality products</h6>
        <h2>TRENDY FASHION <br />COLLECTION</h2>
        <img src={woman} alt="Hero"/>
        </div>
        <div className="products">
        <img src={load} alt="Watch" />
        <p>Cubana-watch</p>
        <button><span className='price'>&#8358;100,000</span></button>

        <img src={shopping} alt="Bag"/>
       
        <button>Shop Now</button>
  

      </div>
        
      </div>
  ); 
  
}

export default home;
