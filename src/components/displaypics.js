import React from 'react'
import display11 from './display11.jpg'
import display2 from './display2.jpg'
import display3 from './display3.jpg'
import display4 from './display4.jpg'
import displaypic from './displaypics.css'

function displaypics() {
  return (
    <div>
     <div className='row'> 
        <div className='col-lg-6 '><img className='displaypics' src={display11}></img></div>
        <div className='col-lg-6 '><img className='displaypics' src={display2}></img></div>
     </div>
     <div className='row'> 
        <div className='col-lg-6 '><img className='displaypics' src={display3}></img></div>
        <div className='col-lg-6 '><img className='displaypics' src={display4}></img></div>
     </div>

    </div>
  )
}

export default displaypics