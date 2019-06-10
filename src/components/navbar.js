import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../App.css';

// import Logo from '../img/logo.png'

import LoginOpret from "./loginOpret"


export default class Navbar extends Component {

 
 
render() {
return (

    <nav className="nav">
    {/* <img className="logo" src={Logo} alt=""/> */}
        <ul className="ul"> 
   
            <li className="li"> <Link to="/">Home</Link></li>
            <li className="li"> <Link to="/chat">Chat</Link></li>
            <li className="li"> <LoginOpret/> </li>
            <li className="li"> <Link to="/founder/useradmin">Founder</Link></li>
        </ul>
    </nav>

)
}
}