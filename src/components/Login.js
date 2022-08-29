import React from 'react'
import logo from "./logo.jpg"
import './bookingform.css'
import Button from 'react-bootstrap/Button'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {app}from '../config/firebase'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import {auth} from '../config/firebase'
import profilepic from './profilepic.png'



function login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')

  let history = useHistory();

 



const register=()=>{

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Account registered")
   
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
alert(errorCode)
    // ..
  });
}


const signin=()=>{
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    history.push("/home");
 
    
    
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
   alert(errorCode)
  });
}


  return (
    <div>
        <h1>{props.heading}</h1>
        <div><img className='Formlogo' src={profilepic}></img></div>
        <div>  
            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder={props.placeholder1}  ></input>
        </div>
       
        <div>  
            <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder={props.placeholder2}></input>
        </div>

            <div>
            <Button  onClick={signin} id="button"> {props.button1}</Button>
            </div>
            <div>
            <Button   onClick={register} style={{display:props.disappear}}> {props.button2}</Button>

            </div>
          
        
      


    </div>
  )
}

export default login;