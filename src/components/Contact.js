import React from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';

function Contact() {
  return (
    <div style={{height: '100vh', backgroundColor:'#ffdc22'}} className='d-flex justify-content-center align-items-center'>
      <div>
        <div className='py-2 d-flex align-items-center'>
          <AiOutlineInstagram size={56} />
          <h3 className='px-2'>frvrhngry.co</h3>
        </div>
        <div className='py-2 d-flex align-items-center'>
          <AiOutlineMail size={56} />
          <h3 className='px-2'>foreverhungryforever@gmail.com</h3>
        </div>
        <div className='py-2 d-flex align-items-center'>
          <BsPhone size={56} />
          <h3 className='px-2'>+62 813 1865 4828</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact