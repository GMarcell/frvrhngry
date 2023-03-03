import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import sample1 from '../asset/image/model/DSC_0712.jpg' 
import sample2 from '../asset/image/model/DSC_0730.jpg' 
import sample3 from '../asset/image/model/DSC_0738.jpg' 

function CarouselBootstrap() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item interval={1000}>
        <div className='d-flex'>
          <img className="d-block w-50" src={sample1} alt="First slide" />
          <img className="d-block w-50" src={sample1} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='d-flex'>
          <img className="d-block w-50" src={sample2} alt="Second slide" />
          <img className="d-block w-50" src={sample2} alt="Second slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='d-flex'>
          <img className="d-block w-50" src={sample3} alt="Third slide" />
          <img className="d-block w-50" src={sample3} alt="Third slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBootstrap