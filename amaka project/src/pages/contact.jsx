import React from 'react'

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <h1 className='contact-title'>GET IN TOUCH</h1>
      <p className='contact-subtitle'>Let's create something impactful.</p>

      <div className='bento-item-form card'>
        <div className='input-group'>
          <label>Name</label>
          <input type='text' placeholder='Your Name' />

      </div>
      <div className='input-group'>
          <label>Email</label>
          <input type='email' placeholder='Your Email' />
      
    </div>
    <div className='input-group'>
          <label>Message</label>
          <textarea placeholder='Tell Us What want to buy...'></textarea>
      </div>
      <button className='send-btn'>SEND MESSAGE</button>
      </div>
      <div className='bento-item-info-tile'>
        <div className='icon'>📍</div>
        </div>
        <span >Location:</span>
        <p>Aba, Nigeria</p>


        <div className='bento-item-social-tile'>
          <div className='social-icons'>
            <a href='#'Linkedln></a>
            <a href='#'GitHub></a>
            <a href='#'facebook></a>
            <a href='#'twitter></a>
          </div>
        </div>
        
      </div>
  )
}

export default Contact;
