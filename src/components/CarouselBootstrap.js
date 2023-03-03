import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import model1 from '../asset/image/model/DSC_0712.jpg' 
import model2 from '../asset/image/model/DSC_0738.jpg'
import model4 from '../asset/image/model/cream blkg - cowo 2.jpg'
import model3 from '../asset/image/model/SF dpn - cowo.jpg'
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
          <div className='d-flex'>
            <img className="d-block w-50" src={model2} alt="First slide" />
            <img className="d-block w-50" src={model1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='d-flex'>
            <img className="d-block w-50" src={model3} alt="Second slide" />
            <img className="d-block w-50" src={model4} alt="Second slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselBootstrap