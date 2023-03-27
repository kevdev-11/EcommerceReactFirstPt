import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchaseThunk } from '../store/purchases.slice';

const Purchases = () => {

    const purchase = useSelector(state => state.purchases);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchaseThunk());
    }, [dispatch]);

    console.log(purchase);

    return (
        <div className='wrapper-container'>
            <h1>Purchases</h1>
        
            {purchase.data?.purchases?.slice(0, 10).map((items) => (
                items.cart.products.map((products) => (
                    <Row>
                    <Col>
                        <Link to={`/products/${products.id}`}>
                            <div style={{border:'3px solid blue', width:'700px',height:'300px'}}>
                        <div style={{width:'100%', borderBottom:'1px solid gray'}}>{products.updatedAt}</div>
                        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', width:'100%', border:'2px solid green', justifyItems:'center'}}>
                            <div>
                                {products.title}
                            </div>
                            <div>
                                {products.productsInCart.quantity}
                            </div>
                            <div>
                                {products.price}
                            </div>
                        </div>
                        </div>
                        
                </Link>
                    </Col>
                    <Col>
                        <div style={{border:'3px solid blue', width:'300px', height:'370px'}}>
                        </div>
    
                    </Col>
    </Row>
    
    
    ))
    ))};
<div>

</div>

        </div>
    );
};

export default Purchases;