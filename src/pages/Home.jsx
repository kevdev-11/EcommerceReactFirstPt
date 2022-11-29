import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import productsSlice, { getProducts } from '../store/products.slice';
import { getProductsThunk, filterProductsThunk, filterNamesThunk } from '../store/products.slice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, InputGroup, Form } from 'react-bootstrap';
// import {Col} from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cards from '../Components/Cards';
import ListGroup from 'react-bootstrap/ListGroup';
import AccordionItem from '../Components/AccordionItem';

const Home = () => {

    const [category, setCategory] = useState([]);
    const [inputSearch, setInputSearch] = useState("");
    const dispatch = useDispatch();
    
    const products = useSelector(state => state.products);

    // useEffect(()=>{
    //     if(inputSearch){
    //         dispatch(filterNamesThunk())
    //     }
    // },[inputSearch]);

    useEffect(() => {

            dispatch(getProductsThunk())
            axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
            .then(res => setCategory(res.data.data.categories))

    }, []);



    console.log(category);

    return (
        <div className='cover_hero'>

            <Row style={{ margin: '50px' }}>
                <Col style={{ borderRight: '2px solid gray', height: 'fit-content' }} lg={2}>
                    <AccordionItem set={products} />
                    <br />
                    <h5>
                    categories</h5><br />
                    <div name='Categories'>
                        <Button onClick={() => dispatch(getProductsThunk(products))}>
                            All Products
                        </Button>
                    </div>

                    <ListGroup variant="flush">
                        {category.map(category => (

                            <ListGroup.Item
                                onClick={() => dispatch(filterProductsThunk(category.id))}>{category.name}</ListGroup.Item>
                        ))}

                    </ListGroup>
                </Col>
                <Col lg={10}>
                <InputGroup className="mb-3">
                <Button
                    onClick={() => dispatch(filterNamesThunk(inputSearch))}
                    variant="primary outline-secondary" id="button-addon2">

                    Search
                </Button>
                <Form.Control
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
      
                    <Row className='rows'>
                        {products.map((products) =>
                            <div className='col-md-4'>
                                <li key={products} style={{ listStyle: 'none', width: 'auto' }}>
                                    <Link className='links' to={`/products/${products.id}`}>
                                        <Cards product={products}></Cards>
                                    </Link>
                                </li>
                            </div>
                        )}
                    </Row>
                </Col>

                {/* <div className='lift'>
            
            {products.slice(0,6).map((items)=>
                <ul>
                    <li key={items.id}>
                    <Carousell props={items} />
                    </li>
                     {/* <img style={{width:'120px', height:'120px', }} src={items.productImgs?.[2]} alt="" /> 
                </ul>
       
            )}
        </div> */}

            </Row>
        </div>
    );
};

export default Home;