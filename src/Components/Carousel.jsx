import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousell = ({props}) => {

    // console.log(props)

    return (
   <Carousel fade>
      <Carousel.Item interval={10000}>
        <img
            style={{width:'auto', height:'60px' }}
          className="d-block"
          src={props.productImgs?.[2]}
          alt="First slide"
        />
      </Carousel.Item>
       <Carousel.Item interval={10000}>
        <img
        style={{width:'auto', height:'60px' }}
          className="d-block"
          src={props.productImgs?.[0]}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
        style={{width:'auto', height:'60px' }}
          className="d-block"
          src={props.productImgs?.[1]}
          alt="Third slide"
        />  
        </Carousel.Item> 
    </Carousel>
    );
};

export default Carousell;