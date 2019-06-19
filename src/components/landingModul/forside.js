import React, { Component } from 'react';
import Login from '../brugerModul/loginModul/login';
import Opret from '../brugerModul/opretModul/opret';
import Logo from './assets/logo.png';
import Baggrund from './assets/baggrund.png';
import Baggrundkort from './assets/verdenskort.jpg';
import './forside.style.css';

export default class Forside extends Component {
render() {
return (
<div className="forside">

    <Login />
    <Opret />
   
    <img className="bag" src={Baggrund} alt="" />
    <img className="logo" src={Logo} alt="" />

    <div className="textbox">
        <h1>Chatweb</h1>
        <h3>Chat forum for webudviklere i alle stadier.</h3>
        <h3> Stille spørgsmål, diskutere løsninger og få inspiration.  </h3>
        <h3>Start med at oprette din gratis profil eller log ind</h3>
    </div>
  
    <img className="bagkort" src={Baggrundkort} alt="" />
</div>
)
}
}