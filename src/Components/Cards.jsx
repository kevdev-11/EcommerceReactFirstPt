import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getProductsThunk } from '../store/products.slice';

function Cards({ product }) {

    // const dispatch = useDispatch();
    // const products = useSelector(state=>state.products);
    // // const {id} = useParams();


    // useEffect(()=>{
    //     dispatch(getProductsThunk());
    // },[]);
    // const products = useSelector(state=>state.products)
    // const dispatch = useDispatch();
    // console.log(product);

    return (
        <Container className='container d-flex justify-content-center'>
        <Card style={{ display:'flex', flexDirection:'column', alignItems:'center', alignContent:'center',width: '350px', height:'auto' }}>
            <Card.Img variant="top" style={{ width: '250px', height: '230px', objectFit:'contain', objectPosition:'center', marginTop:'50px', }} src={product?.productImgs?.[0]} />
            <Card.Body className='body-cards'>
                <Card.Title>{product.title.slice(0,18)}</Card.Title>
                <Card.Text>
                        ${product.price}
                </Card.Text>
               
                <Button variant="primary">See more</Button>
               
            </Card.Body>
        </Card>
        </Container>
    );
}

export default Cards;