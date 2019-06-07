import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../App.css';

export default class Navbar extends Component {

 
 
render() {
return (

    <nav className="nav">

 
        <ul className="ul"> 
   
            <li className="li"> <Link className="link" to="/">Forside</Link></li>
            <li className="li"> <Link className="link" to="/chat">Chat</Link></li>
            <li className="li"> <Link className="link" to="/login">Log ud </Link></li>
            <li className="li"> <Link className="link" to="/founder">Om siden</Link></li>
        </ul>
    </nav>

)
}
}