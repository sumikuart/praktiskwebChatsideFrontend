import React, { Component } from 'react'
import LoginOpret from './loginOpret';
import Logo from '../img/logo.png'
import Baggrund from '../img/baggrund.png'

export default class Forside extends Component {
render() {
return (
<div>

    <LoginOpret />
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