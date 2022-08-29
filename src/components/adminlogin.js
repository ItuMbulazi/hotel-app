import React from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {app}from '../config/firebase'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import {auth} from '../config/firebase'
import Button from 'react-bootstrap/Button'
import profilepic from './profilepic.png'


function adminlogin(props) {

    const [username, setUsername] = useState('')
  const [password, setPassword]= useState('')
  let history = useHistory();


   const signin=()=>{
  
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          history.push("/adminhomepage");
        })
        .catch((error) => {
          const errorCode = error.code;
         alert(errorCode)
        });
      }
  return (
    <div>
        <h1>EMPLOYEE</h1>
   <div><img className='Formlogo' src={profilepic}></img></div>
<div>  
            <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter username" ></input>
        </div>
       
        <div>  
            <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter employee Code"></input>
        </div>

            <div>
            <Button  onClick={signin} id="button"  > Login</Button>
            </div>
    </div>
  )
}

export default adminlogin