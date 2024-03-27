import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import bagbuy from '../assets/bagbuy.svg';
import { useState } from 'react';
import CartShop from './CartShop';
import nextlogo from '../assets/nextlogo.svg';

// import { getCheckoutThunk } from '../store/cart.slice';
// import { useDispatch } from 'react-redux';

function NavBar() {

  // const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       {/* <Offcanvas show={show} onHide={handleClose}>
         <Offcanvas.Header closeButton>
           <Offcanvas.Title>Your orders on cart</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
          <Button onClick={()=>dispatch(getCheckoutThunk())}>Checkout</Button>
           Some text as placeholder. In real life you can have the elements you
           have chosen. Like, text, images, lists, etc.
         </Offcanvas.Body>
       </Offcanvas> */}
    <Navbar style={{display:'fixed', borderBottom:"2px solid gray",backgroundColor:"#88B6AB"}} expand="lg">
      <Container style={{fontSize:'20px',display:'flex',flexDirection:'row', alignItems:'center'}}>
        <Navbar.Brand>
          <img style={{width:'150px', height:'fit-content'}} src={nextlogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{width:'100%', justifyContent:'flex-end', gap:'30px'}} >
            {/* className="me-auto" */}
            <Nav.Link style={{color:'white'}} as={Link} to="/">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to="/login">{" "}Login/Register{" "}</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to="/Products">Products</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to='/purchases'>Purchases</Nav.Link>
            <Button onClick={handleShow} variant='dark'style={{color:'white'}}>
              Your orders <img style={{width:'20px'}} src={bagbuy} alt="" />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
       {/* <Button variant="primary" onClick={handleShow}>
         Launch
       </Button> */}
       <CartShop handleClose={handleClose} show={show}></CartShop>
     </>
  );
}

export default NavBar;