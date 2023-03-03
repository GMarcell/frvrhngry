import React from 'react'
import Navbar from './Navbar'
import product1 from '../asset/image/product/ACAB-1.png'
import product2 from '../asset/image/product/1.png'
import product3 from '../asset/image/product/2222.png'

function Shop() {
  return (
    <>
      <Navbar/>
      <div className='px-3' style={{height: '100vh'}}>
        <div className='mt-5 h-50 bg-banner d-flex align-items-end'>
          <p className='ms-4 text-white' style={{fontSize: '80px'}}>SALE</p>
        </div>
        <div className='h-50 d-flex py-5'>
          <div>
            <img className='w-100' src={product1} alt='Product1'/>
            <h3 className='text-center'>ACAB</h3>
            <h4 className='text-center'>IDR 130.000</h4>
          </div>
          <div>
            <img className='w-100' src={product3} alt='Product3'/>
            <h3 className='text-center'>STARVING FACTION</h3>
            <h4 className='text-center'>IDR 130.000</h4>
          </div>
          <div>
            <img className='w-100' src={product2} alt='Product2'/>
            <h3 className='text-center'>HUNGRY THEORY</h3>
            <h4 className='text-center'>IDR 130.000</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop