import React from 'react'
import './navbarComp.css'
import display5 from './display5.jpg'
import './offer.css'

function banner() {
  return (
  <div className=" col-lg-12 col-sm-12  jumbotron  " style={{ backgroundImage:`url(${display5})` }}>
     <h2> From Only </h2>
     <h1>R900</h1>
     <h3>per room per night</h3>
     <h1>BOOK NOW</h1>
    </div>
  )
}

export default banner