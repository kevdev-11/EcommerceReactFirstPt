import React from 'react';

const SliderImages = () => {

    const elementSlider = [
        "https://firebasestorage.googleapis.com/v0/b/dataimage-84486.appspot.com/o/carr1.webp?alt=media&token=39fc3202-5c59-427e-a2cc-66ebc1622b77",
        "https://firebasestorage.googleapis.com/v0/b/dataimage-84486.appspot.com/o/carr2.webp?alt=media&token=352ed318-c439-46c1-922d-462d588c0c75",
        "https://firebasestorage.googleapis.com/v0/b/dataimage-84486.appspot.com/o/carr3.webp?alt=media&token=7ec293ce-69ff-4de0-b389-922c8623cdcf"
    ]

    return (
        <div style={{width:"100%", border:"1px solid blue"}}>
            <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
            style={{width:'auto', height:'auto' }}
          className="d-block"
          src={elementSlider[0]}
          alt="First_slide"
        />
      </Carousel.Item>
       <Carousel.Item interval={10000}>
        <img
        style={{width:'auto', height:'auto' }}
          className="d-block"
          src={elementSlider[1]}
          alt="Second_slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
        style={{width:'auto', height:'auto' }}
          className="d-block"
          src={elementSlider[2]}
          alt="Third_slide"
        />  
        </Carousel.Item> 
    </Carousel>
        </div>
    );
};

export default SliderImages;