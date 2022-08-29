import React from 'react'
import room1 from './room1.jpg'
import './navbarComp.css'
import './offer.css'
import Card from "react-bootstrap/Card";
import './accomodation.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import img from './room1.jpg'



function accomodation(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=" col-lg-12 col-sm-12  jumbotron  " style={{ backgroundImage:`url(${props.img})` }}>

<div className='row'>
    <Card className="card1 col-lg-5" style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "black" }}> {props.heading}</Card.Title>
         
          <Card.Text>
          
         <p>{props.information}</p> 
          </Card.Text>
        
          <div className='row'>
             <Button className='col-lg-6 accombtn' onClick={handleShow} ><h3 className='btnTxt'>Read More</h3></Button>
             <Button className='col-lg-6 accombtn accombtn2' href="/book"><h3 className='btnTxt txt'>Book Now</h3></Button>
               </div>
              
    
        </Card.Body>
      </Card>
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h1>{props.heading}</h1></Modal.Title>
          <img src={props.img} className="modalpic"></img>
        </Modal.Header>
        <Modal.Body>
       <p>{props.information}</p>
       <p>{props.More}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
     
      </div>

    </div>
  )
}

export default accomodation