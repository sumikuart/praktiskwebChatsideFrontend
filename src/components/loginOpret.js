import React,
{
Component
}

from 'react'

import {
Link
}

from "react-router-dom";
import '../App.css';
// import Lås from '../img/lock-icon-300x300.png';

export default class LoginOpret extends Component {

handleOnclick = () => {

}

handleOnclick1 = () => {


    }


render() {
return (
<div>
    <div id="form" className="form">
        <form id="register-form" className="register-form"> 
            <input type="text" placeholder="Brugernavn" /> 
            <input type="password" placeholder="Kodeord" /> 
            <input type="password" placeholder="Bekræft Kodeord" />
            <input type="text" placeholder="Email" /> 
            <button className="loginbutton">Opret</button>
            <p className="besked">Har du en konto? <a href="">Login</a> </p>
        </form>

        <form id="login-form" className="login-form"> 
            <input type="text" placeholder="Brugernavn" /> 
            <input type="password" placeholder="Kodeord" /> 
            <button className="loginbutton">login</button>
            <p className="besked" >Har du ikke en konto? <a href=""> Opret</a></p>
        </form>
    </div> <button onClick={ this.handleOnclick } className="login-opret-knap">Login</button>
</div>
)
}
}