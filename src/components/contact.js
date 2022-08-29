import React from 'react'
import building from './building.jpg'
import address from './addressbackgroundremoved.png'
import phone from './phone.png'
import email from './emailbackgroundremoved.png'
import gps from './gpsbackgroundremoved.png'
import './contact.css'

function contact() {
  return (
    <div className='row'>
        <div className='col-lg-6'>

            <div><h2>CONTACTS</h2></div>
            <div><img className="contactimgs"src={address}></img><h3>address</h3><br></br>sbofobdsodfoihdah</div>
            <div><img  className="contactimgs"src={phone}></img><h3>Phone</h3><br></br>073 382 2202</div>
            <div><img  className="contactimgs" src={email}></img><h3>Email</h3><br></br>uwuofeuiowguhgew</div>
            <div><img  className="contactimgs"src={gps}></img><h3>address</h3><br></br>iohfihefhiewfhieg</div>
        </div>
        <div className='col-lg-6  jumbotron  '  style={{ backgroundImage:`url(${building})` }}> </div>
    </div>
  )
}

export default contact