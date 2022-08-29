import NavbarComp from "./components/NavbarComp";
import "./App.css";
import React from "react";
import Banner from "./components/banner";
import IntroText from "./components/introText";
import Displaypics from "./components/displaypics";
import Offer from "./components/offers";
import Accomodation1 from "./components/accomodation";
import Essentials from "./components/essentials";
import Mapper from "./components/map";
import Building from "./components/contact";
import { BrowserRouter as Router, Route,Routes, Switch } from "react-router-dom";
import Form from "./components/bookingform";
import ReadMore from "./components/readmore";
import room1 from "./components/room1.jpg";
import room2 from "./components/room2.jpg";
import room3 from "./components/room3.jpg";
import room4 from "./components/room4.jpg";
import "./components/accomodation.css";
import Login from "./components/Login";
import displaypics from "./components/displaypics";
import Homepage from "./components/homepage"
import Adminlogin from "./components/adminlogin"
import Adminhomepage from './components/adminhomepage'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {app}from './config/firebase'
import {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {auth} from './config/firebase'
import { getFirestore, QuerySnapshot } from "firebase/firestore";
import { collection, addDoc,getDocs , query, where } from "firebase/firestore";
import {db} from './config/firebase'

import { doc, getDoc } from "firebase/firestore";



function App() {

  const [users,setUsers]=useState([]);
  let list=[];
 const don=()=>{
  useEffect(async  ()=>{
    try{
       
        const querySnapshot=await getDocs(collection(db,'users'));
        querySnapshot.forEach((doc)=>{
            list.push(doc.data());
        });
        setUsers(list);
        console.log(list);
    }
    catch (error){}

},[]);
 }






  return (
    <Router>
      <div className="App ">
        <NavbarComp />

        <div>
          <Switch>
            <Route exact path="/home">
              <Banner />
              <IntroText />
              <Displaypics />
              <h2>OFFERS</h2>
              <Offer />
              <h2>ACCOMODATION</h2>
              <Accomodation1
                text={"Standard"}
                img={room1}
                information={"This is a standard room with great facilities"}
                More={"Great staff to carter to your every need"}
              />
              <h1>
                <br></br>
              </h1>
              <Accomodation1
                text={"Standard Double"}
                img={room2}
                information={
                  "This is a standard Double room with great facilities"
                }
                More={"Great staff to carter to your every need"}
              />
              <h1>
                <br></br>
              </h1>
              <Accomodation1
                text={"Suite"}
                img={room3}
                information={"This is suite with great facilities"}
                More={"Great staff to carter to your every need"}
              />
              <h1>
                <br></br>
              </h1>
              <Accomodation1
                text={"Conference Room"}
                img={room4}
                information={"This is a conference room with great facilities"}
                More={"Great staff to carter to your every need"}
              />
              <h1>
                <br></br>
              </h1>
              <h2>
                <br></br>The Essentials
              </h2>
              <Essentials />
              <h2>Nearby Properties</h2>
              <Mapper />
              <Building />
            </Route>
            <Route exact path="/contact">
              <Building />
            </Route>
            <Route exact path="/accomodation">
              <Accomodation1
                text={"standard"}
                img={room1}
                information={
                  "This is a standard room with great facilities fit for a single guest or a couple."
                }
                More={"Great staff to carter to your every need"}
              />
              <h1>
                <br />
              </h1>
              <Accomodation1
                text={"Standard Double"}
                img={room2}
                information={
                  "This is a standard Double room with great facilities fit for two guests"
                }
                More={"Great staff to carter to your every need"}
              />
              <h1>
                <br />
              </h1>
              <Accomodation1
                text={"suite"}
                img={room3}
                information={
                  "This is a suite with great facilities fit for a family"
                }
                More={"Great staff to carter to your every need"}
              />
              <h1>
                <br />
              </h1>
              <Accomodation1
                text={"Conference Room"}
                img={room4}
                information={"This is a conference room with great facilities"}
                More={"Great staff to carter to your every need"}
              />
            </Route>
            <Route exact path="/offers">
              <Offer />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>

            <Route exact path="/book">
              <Form />
            </Route>
            <Route exact path="/login">
              <Login
             
                heading={"LOGIN"}
                placeholder1={"Enter your username"}
                placeholder2={"Enter your password"}
                button1={"LOGIN"}
                button2={"SIGN UP"}
                loginorregister={"/home"}
              />
            </Route>
            <Route exact path="/register">
              <Login
               
                heading={"REGISTER"}
                placeholder1={"Choose username"}
                placeholder2={"Choose Password"}
                button1={"SIGN UP"}
                disappear={"none"}
                loginorregister={'/'}
             
              />
            </Route>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route exact path="/al">
            <Adminlogin/>
            </Route>
            <Route exact path="/adminhomepage">

            <Adminhomepage data={list} />

            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
