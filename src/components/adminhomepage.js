import React from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {app}from '../config/firebase'
import {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {auth} from '../config/firebase'
import { getFirestore, QuerySnapshot } from "firebase/firestore";
import { collection, addDoc,getDocs , query, where } from "firebase/firestore";
import {db} from '../config/firebase'
import profilepic from './profilepic.png'
import { doc, getDoc } from "firebase/firestore";
import './adminhomepagecss.css'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com';

 function adminhomepage (props) {

    const sendEmail =(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_8ivw95a', e.target, '9pCEy4tpqstiLiZ-a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
   
  const [bookings,setBookings]=useState([]);
    let list=[];
    useEffect(async  ()=>{
        try{
           
            const querySnapshot=await getDocs(collection(db,'users'));
            querySnapshot.forEach((doc)=>{
                list.push(doc.data());
            });
            setBookings(list);
            console.log(list);
        }
        catch (error){}
    
    },[]);

   return(
 
   <div>
     <h1>HOTEL BOOKINGS</h1>
        <table>
        <tr >
                <th>Name</th>
                <th >ID</th>
                <th>ROOM</th>
                <th>Start date</th>
                <th>End date</th>
                </tr>
    { bookings.map((user)=>(
            <tr>
           <td id="to_name">{user.name}</td>
           <td id="email" >{user.id}</td>
           <td >{user.room}</td>
           <td>{user.start}</td>
           <td>{user.end}</td>
        
           <Button onClick={sendEmail} >Confirm</Button>
           </tr> 
          
       
            
       )
       )
       }
        </table>
     
   </div>
       
     
      
   )
  }
export default adminhomepage