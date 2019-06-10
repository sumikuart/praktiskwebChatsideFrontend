import React, { Component } from 'react'
import publicLoginModul from '../brugerModul/login/login';
import Logo from './assets/logo.png'
import Baggrund from './assets/baggrund.png'


import './forside.style.css';

export default class Forside extends Component {
render() {
return (
<div>

    <publicLoginModul />
    <img className="bag" src={Baggrund} alt=""/> 
    <img className="logo" src={Logo} alt="" />

    <div className="textbox">
        <h1>Chatweb</h1>
        <h3>Chat forum for webudviklere i alle stadier.</h3>
        <h3>
            Her kan du stille spørgsmål, diskutere løsninger og få inspiration. </h3>
    </div>

</div>
)
}
}