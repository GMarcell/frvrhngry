import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'; 
import model1 from '../asset/image/model/test.png'
import model2 from '../asset/image/model/test22.png' 
import model3 from '../asset/image/model/test5.png' 
import Navbar from './Navbar';
import product1 from '../asset/image/product/ACAB-1.png'
import product2 from '../asset/image/product/1.png'
import product3 from '../asset/image/product/2222.png'


function CarouselBootstrap() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Navbar/>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item interval={1000}>
          <div className='d-flex justify-content-center'>
            <img className="d-block w-100" src={model1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='d-flex justify-content-center'>
            <img className="d-block w-100" src={model2} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='d-flex justify-content-center'>
            <img className="d-block w-100" src={model3} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className='my-3 h-50 bg-banner'>
          <p className='ms-4 text-white' style={{fontSize: '40px'}}>SALE</p>
        </div>
        <div className='h-50 py-5 row'>
          <div className='col-md-4 home-product'>
            <img className='w-100' src={product1} alt='Product1'/>
            <h6 className='text-center fw-bold'>ACAB</h6>
            <h6 className='text-center'>IDR 130.000</h6>
          </div>
          <div className='col-md-4 home-product'>
            <img className='w-100' src={product3} alt='Product3'/>
            <h6 className='text-center fw-bold'>STARVING FACTION</h6>
            <h6 className='text-center'>IDR 130.000</h6>
          </div>
          <div className='col-md-4 home-product'>
            <img className='w-100' src={product2} alt='Product2'/>
            <h6 className='text-center fw-bold'>HUNGRY THEORY</h6>
            <h6 className='text-center'>IDR 130.000</h6>
          </div>
        </div>
    </>
  )
}

export default CarouselBootstrap