import React from 'react';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';

// import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
            <div className='container-fluid' style={{ textAlign:'center', marginTop:'100px'}} >
            <div className='row p-5 bg-black text-white'>
            {/* <Container style={{backgroundColor:'black'}}> */}
            <div className='col-xs-12 col-md-6 col-lg-3'>
                <h5>Products by category</h5>
                <div style={{color:'gray'}}>
                <p>Kitchen</p>
                <p>Smart TV</p>
                <p>Smartphones</p>
                <p>Computers</p>
                </div>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-3'>
            <div style={{color:'gray'}}>
                <h5>Support</h5>
                <p>Customer service</p>
                <p>Design bases</p>
                <p>Ubication Company</p>
                <p>Contact me</p>
            </div>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-3'>
            <div style={{color:'gray'}}>
                <h5>About us</h5>
                <p>Contact/send request</p>
                <p>Labels</p>
                <p>My portfolio</p>
            </div>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-3'>
                <h5>Social networks</h5>
                <p>Follow us through our channels:</p>
                <div style={{width:'150px', display:'flex', justifyContent:'space-around', position: 'relative', left:'90px'}}>
                <i style={{color:'gray', fontSize:'22px'}} className="bi bi-linkedin"></i>
                <i style={{color:'gray', fontSize:'22px'}} className="bi bi-tiktok"></i>
                <i style={{color:'gray', fontSize:'22px'}} className="bi bi-instagram"></i>
                <i style={{color:'gray', fontSize:'22px'}} className="bi bi-github"></i>
                </div> 
            </div>
            </div>
        </div>
    );
};

export default Footer;