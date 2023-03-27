import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk, getCheckoutThunk } from '../store/cart.slice';

const CartShop = ({show, handleClose}) => {

    const dispatch = useDispatch();
    // const [total, setTotal] = useState(0);
    const cartshop = useSelector(state=>state.cartshop);

    // const totalInCart = () =>{
    //   cartshop.map(valueTotal=>{
        
    //     setTotal(total + Number(valueTotal.price))
    // })
    // }


    useEffect(()=>{
        dispatch(getCartThunk());
    },[])

    // console.log(totalInCart());

    return (
        <div>
            
       <Offcanvas show={show} onHide={handleClose}>
         <Offcanvas.Header closeButton>
           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
          {cartshop.map((incart)=>(
            <div>
            {incart.title}
            {incart.price}
            </div>
          ))}
         </Offcanvas.Body>
         <Button onClick={()=>dispatch(getCheckoutThunk())}>Checkout</Button>
       </Offcanvas>

        </div>
    );
};

export default CartShop;