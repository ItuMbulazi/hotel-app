
import React from 'react'
import logo from "./logo.jpg"
import Button from 'react-bootstrap/Button'
import './readmore.css'


function readmore(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
<div><img className='Formlogo' src={logo}></img></div>
<p>A standard room comes in the category of the hotel’s cheapest room.
     It is a type of single room, which has a king-size bed, or as two beds 
     — this room is decorated with two queen-size beds.
      A standard room includes all kinds of basic facilities such as 
      a table, chair, desk, cupboard, dressing table, DVD player, television, telephone, 
      coffee maker and a private bathroom. 
      Offerings other amenities in the standard room also depend on the type of hotel. 
      For the example, two-star hotels can provide slightly more than the basics. 
      The standard rooms of a five-star hotel include flat-screen TVs, separate bars, 
      expensive bath tubs and designer interior decoration in the room. 
      The Hotel Marble City has been equipped with all these facilities in all standard rooms.</p>
<div>
    <Button href="/book">Book Now</Button>
</div>

    </div>
  )
}

export default readmore