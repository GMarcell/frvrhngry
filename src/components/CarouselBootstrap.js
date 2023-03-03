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
      <Carousel activeIndex={index} onSelect={handleSelect} fade style={{height: '100vh'}}>
        <Carousel.Item interval={1000}>
          <div className='d-flex justify-content-center'>
            <img className="d-block img-fluid" src={model1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='d-flex justify-content-center'>
            <img className="d-block img-fluid" src={model2} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='d-flex justify-content-center'>
            <img className="d-block img-fluid" src={model3} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className='d-flex justify-content-center'>
            <img className="d-block img-fluid" src={model4} alt="Second slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselBootstrap