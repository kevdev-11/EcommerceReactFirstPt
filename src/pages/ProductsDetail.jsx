import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/products.slice';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const ProductsDetail = () => {
  ///Changes & hooks////
  const [counter, setCounter] = useState(0);
  // const [decrement, setDecrement]=useState(0);
  // const [quantity, setQuantity]=useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();
  const newList = useSelector(state => state.products);

  ////Operators&functions of changes/hooks/////
  const findProducts = newList.find(detail => detail.id === Number(id));

  const productFilter = newList.filter(find => find?.category.id === findProducts?.category.id && find?.id !== findProducts?.id);


  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {

    setCounter(counter - 1)

  }

  console.log(productFilter);

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  console.log(findProducts);
  return (
    <div style={{width:'100%', height:'100%'}}>
      <div className='title-bar'>
        <h1>{findProducts?.title}</h1>
        <h2 style={{color:'white'}}>${findProducts?.price}</h2>
        <Button>Buy now!</Button>
      </div>
      <div className='details_box_container'>
        <Row className='row-container-details' >
          <Col lg={3}>
            <Carousel variant='danger' style={{ height: 'fit-content', width: 'fit-content' }} fade>
              <Carousel.Item interval={10000}>
                <img
                  className="detailed_items"
                  src={findProducts?.productImgs?.[0]}
                  style={{ objectFit: 'contain' }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={10000}>

                <img
                  className="detailed_items"
                  src={findProducts?.productImgs?.[1]}
                  style={{ objectFit: 'contain' }}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img
                  className="detailed_items"
                  src={findProducts?.productImgs?.[2]}
                  style={{ objectFit: 'contain' }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6}>
            <h1>{findProducts?.title}</h1>
            <h5>{findProducts?.category?.name}</h5>
            <p>{findProducts?.description}</p>
            <div className='data-details-product'>
              <Button variant='danger'>
                Add to cart
              </Button>
              <div>
                <button className='quantity_btn' onClick={decrementCounter}>-</button>
                <input className='input_quantity' type="text" value={counter} onChange={(e) => setCounter(e.target.value)} />
                <button className='quantity_btn' onClick={incrementCounter}>+</button>
              </div>
              <div>
                <b><h5 style={{color:'black'}}>Price:</h5><h4 style={{color:'darkblue'}}>${findProducts?.price}</h4></b>
              </div>
            </div>
          </Col>
        </Row>
        <div className='another-items'>
          <h3>find other similar products in {findProducts?.category?.name}</h3>
          <hr />
        </div>
        <Container className='container-others-cards'>
        {/* d-flex w-100 justify-content-center align-items-center */}
          <Row xs={1} md={2} className="cards-patron">
            {productFilter.map((sameItems) => (
              <Col lg={3}>
                <div className='card_others'>
                  <h1 className='title_others'>{sameItems.title.slice(0,24)}</h1>
                  <div>
                    <img style={{ width: '180px', height: '180px', objectFit: 'contain', paddingLeft:'50px' }} src={sameItems.productImgs?.[0]} alt="" />
                  <hr style={{width:'250px'}}/>
                  </div>
                  <div className='order-others'>
                    <div>
                     <b>Price:</b>  <br /> ${sameItems.price}
                    </div>
                    <div>
                      {/* <Link to={`/products/${property.id}`}> */}
                      <button
                      style={{backgroundColor:'#d12222', border:'none', color:'white', borderRadius:'50%', fontSize:'20px', width:'40px', height:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        +
                        </button>
                        {/* </Link> */}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductsDetail;