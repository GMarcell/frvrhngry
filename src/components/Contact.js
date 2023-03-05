import React from 'react'
import Navbar from './Navbar';
import icon1 from '../asset/icons/instagram.png'
import icon2 from '../asset/icons/envelope.png'
import icon3 from '../asset/icons/phone.png'

function Contact() {
  return (
    <>
      <Navbar/>
      <div style={{height: '100vh', backgroundColor:'#ffdc22'}} className='d-flex justify-content-center align-items-center'>
        <div>
          <div className='py-2 d-flex align-items-center'>
            <img src={icon1} alt='instagram'/>
            <h5 className='px-2 font-contact'>frvrhngry.co</h5>
          </div>
          <div className='py-2 d-flex align-items-center'>
            <img src={icon2} alt='email'/>
            <h5 className='px-2 font-contact'>foreverhungryforever@gmail.com</h5>
          </div>
          <div className='py-2 d-flex align-items-center'>
            <img src={icon3} alt='phone'/>
            <h5 className='px-3 font-contact'>+62 813 1865 4828</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact