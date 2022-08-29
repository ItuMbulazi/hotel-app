import React from 'react'
import './navbarComp.css'
import bannerpic from './banner.jpg'

function banner() {
  return (
    <div className="  jumbotron  " style={{ backgroundImage:`url(${bannerpic})` }}>
     
    </div>
  )
}

export default banner