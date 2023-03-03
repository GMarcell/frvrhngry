import React from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
      <Navbar/>
      <div style={{height: '100vh', backgroundColor:'#ffdc22'}} className='d-flex justify-content-center align-items-center'>
        <div>
          <div className='py-2 d-flex align-items-center'>
            <AiOutlineInstagram size={56} />
            <h5 className='px-2'>frvrhngry.co</h5>
          </div>
          <div className='py-2 d-flex align-items-center'>
            <AiOutlineMail size={56} />
            <h5 className='px-2'>foreverhungryforever@gmail.com</h5>
          </div>
          <div className='py-2 d-flex align-items-center'>
            <BsPhone size={56} />
            <h5 className='px-2'>+62 813 1865 4828</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact