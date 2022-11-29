
import React from 'react';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const AccordionItem = ({set}) => {

    // const[number, setNumber]=useState(0);

    

    console.log(set)

    return (
        <div className='accordion_price'>
    <Accordion  defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Prices:</Accordion.Header>
        <Accordion.Body style={{height:'200px', widht:'auto', display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-beetwen'}}>
 <div style={{width:'min-content'}}>

         From <input type="number" style={{width:'80px'}}/>
    </div>
         <div style={{width:'min-content'}}>
         To <input type="number" style={{width:'80px'}}/>
 </div>
      <div style={{marginTop:'20px'}}>
      <Button>Filter</Button>
        </div>   

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default AccordionItem;