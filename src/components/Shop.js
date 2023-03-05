import React from 'react'
import Navbar from './Navbar'
import product1 from '../asset/image/product/ACAB-1.png'
import product2 from '../asset/image/product/1.png'
import product3 from '../asset/image/product/2222.png'
import shoppee from '../asset/icons/shoppee.png'

function Shop() {
  return (
    <>
      <Navbar/>
      <div className='sticky-button'>
        <a href='shopee.co.id/foreverhungry631'>
          <img className='shoppee' src={shoppee} alt='shoppee'/>
        </a>
      </div>
      <div className='px-3' style={{height: '100vh'}}>
        <div className='my-3 h-50 bg-banner'>
          <p className='ms-4 text-white' style={{fontSize: '80px'}}>SALE</p>
        </div>
        <div className='h-50 py-5 row'>
          <div className='col-md-4'>
            <img className='w-100' src={product1} alt='Product1'/>
            <h6 className='text-center fw-bold'>ACAB</h6>
            <h6 className='text-center'>IDR 130.000</h6>
          </div>
          <div className='col-md-4'>
            <img className='w-100' src={product3} alt='Product3'/>
            <h6 className='text-center fw-bold'>STARVING FACTION</h6>
            <h6 className='text-center'>IDR 130.000</h6>
          </div>
          <div className='col-md-4'>
            <img className='w-100' src={product2} alt='Product2'/>
            <h6 className='text-center fw-bold'>HUNGRY THEORY</h6>
            <h6 className='text-center'>IDR 130.000</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop