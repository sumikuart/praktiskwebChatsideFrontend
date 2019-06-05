import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../App.css';
import Logo from '../img/logo.png'

import LoginOpret from "./loginOpret"


export default class Navbar extends Component {

 
 
render() {
return (
<Router>

    <nav className="nav">
    {/* <img className="logo" src={Logo} alt=""/> */}
        <ul className="ul"> 
       
            <li className="li"> <Link To="./">Home</Link></li>
            <li className="li"> <Link To="./chat">Chat</Link></li>
            <li className="li"> <LoginOpret/> </li>
          
        </ul>
    </nav>
</Router>
)
}
}