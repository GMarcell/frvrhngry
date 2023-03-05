import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'; 
import model1 from '../asset/image/model/test.png'
import model2 from '../asset/image/model/test22.png' 
import model3 from '../asset/image/model/test5.png' 
import Navbar from './Navbar';

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
      <div className='m-3 bg-banner'>
        <p className='ms-4 text-white' style={{fontSize: '80px'}}>SALE</p>
      </div>
    </>
  )
}

export default CarouselBootstrap