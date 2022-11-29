import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import person from '../assets/person.svg';
import bagbuy from '../assets/bagbuy.svg';

function NavBar() {



  return (
    <Navbar style={{display:'fixed'}} bg="primary" expand="lg">
      <Container style={{fontSize:'20px',display:'flex',flexDirection:'row', alignItems:'center'}}>
        <Navbar.Brand style={{color:'blueviolet'}}>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{width:'100%', justifyContent:'flex-end', gap:'30px'}} >
            {/* className="me-auto" */}
            <Nav.Link style={{color:'white'}} as={Link} to="/">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to="/login">{" "}Login/Register{" "}</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to="/Products">Products</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to='/purchases'>Purchases</Nav.Link>
            <Button variant='dark'style={{color:'white'}}>
              Your orders <img style={{width:'20px'}} src={bagbuy} alt="" />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;