import React, { useState } from 'react'
import logo from "./logo.jpg"
import './bookingform.css'
import Button from 'react-bootstrap/Button'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../config/firebase'





  function  bookingform() {


 const [name,setName]=useState('')
 const [id,setID]=useState('')
 const [room,setRoom]=useState('')
 const [startdate,setStartDate]=useState('')
 const [enddate,setEndDate]=useState('')

 const BookNow = (() =>{
  
 
        try {
            const docRef = addDoc(collection(db, "users"), {
              name: name,
              id:id,
              room: room,
              start:startdate,
              end:enddate
            });
            console.log("Document written with ID: ", docRef.id);
        }
           catch (e) {
            console.error("Error adding document: ", e);
           }
        }

 )


  return (
    <form id="bookingform" >
        
        <h1>RESERVATION FORM</h1>
        <div><img className='Formlogo' src={logo}></img></div>
        <div>  
            <input type="text"   onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name'></input>
        </div>
       
        <div>  
            <input type="text" id="identity"  onChange={(e)=>{setID(e.target.value)}} placeholder='Enter your ID number'></input>
        </div>

        <div>  
            <select id="roomtype" onChange={(e)=>{setRoom(e.target.value)}} placeholder='room type'>
            <option value="" disabled selected hidden>Room type</option>
                <option>Standard Room</option>
                <option>Standard Double Room</option>
                <option>Suite</option>
                <option>Conference Room</option>
           
            </select>
            </div>
        <div className='date'>
            <div>
                <label>From</label>
                <input onChange={(e)=>{setStartDate(e.target.value)}} type="date"></input>
            </div>
            <div className='date'>
                <label>To</label>
                <input onChange={(e)=>{setEndDate(e.target.value)}} type="date"></input>
            </div>
            
            
        </div>
             
       
      

        <div>  
          
            <Button type="submit" className='btn'  onClick= {BookNow} > Book Now</Button>
        </div>
    </form>
  )
 }


export default bookingform