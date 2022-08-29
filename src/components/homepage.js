import React from 'react'
import profilepic from './profilepic.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import homepagecss from './homepage.css'
import employee from './employee.jpg'
import guest from './guest.jpg'

function homepage() {
 



  return (
    <div className='row'>
            <Card className='col -lg-6' style={{ width: '18rem' }}>
      <Card.Img className=" cardimg"variant="top" src={guest} />
      <Card.Body>
        <Card.Title>Guest</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href="/login">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card className='col-lg-6' style={{ width: '18rem' }}>
    <Card.Img className=" cardimg" variant="top" src={employee} />
    <Card.Body>
      <Card.Title>Hotel Employee</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary"  href="/al">Go somewhere</Button>
    </Card.Body>
  </Card>
    </div>

  );
}


export default homepage