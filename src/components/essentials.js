import React from 'react'
import './essentials.css'
import wifi from './wifibackgroundremoved.png'
import swimmingpool from './swimmingpool.png'
import guestroom from './guestroombackgroundremoved.png'
import parking from './parkingbackgroundremoved.png'

function essentials() {
  return (
    <div className='row d-flex justify-content-center'>

      <div className='col-lg-1 essentialsdivs'>
        <div className='essential'>
          <img className='essentialsicons' src={wifi}></img>
          </div>
          <h3 className='essentialstext'>Wifi</h3>
        </div>
      <div className='col-lg-1 essentialsdivs'>
        <div className=' essential'>
          <img className='essentialsicons'src={swimmingpool}></img>
        </div>
        <h3 className='essentialstext'>Swimming Pool</h3>
      </div>
      <div className='col-lg-1 essentialsdivs'>
        <div className='essential'>
          <img className='essentialsicons'src={guestroom}></img>
        </div>
        <h3 className='essentialstext'>Guest Rooms</h3>
      </div>
      <div className='col-lg-1 essentialsdivs'>
        <div className='essential'>
          <img className='essentialsicons' src={parking}></img>
        </div>
        <h3 className='essentialstext'>Parking</h3>
      </div>


    </div>
  )
}

export default essentials