import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/Banner/Over.jpg';
import img2 from '../../../Images/Banner/Over1.jpg';

const Banner = () => {
  return (
    <div className='banner-container'>
      <Carousel fade variant='white'>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption>
            <h3>
              Success is where preparation <br /> and opportunity meet
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />
          <Carousel.Caption>
            <h3>
              Success is the maximum utilization <br />
              of the ability that you have
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
