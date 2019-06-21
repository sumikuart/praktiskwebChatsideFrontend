import React, { Component } from 'react';
import Logo from './assets/logo.png';
import Baggrund from './assets/baggrund.png';
import './forsideTo.style.css';
import Face from './assets/face.jpg'
import Face2 from './assets/kim.jpg'
import Kort from './assets/verdenskort.jpg'
export default class ForsideTo extends Component {
render() {
return (
<div className="forsideto">

<img className="backgroundimg" src={Kort} alt="" />

    <img className="bag" src={Baggrund} alt="" />
    <img className="logo" src={Logo} alt="" />

    <div className="textbox">

        <h1>Chatweb</h1>

        <h3>Chat forum for webudviklere i alle stadier.</h3>
        <h3> Stille spørgsmål, diskutere løsninger og få inspiration. </h3>
        <h3>Start med at oprette din gratis profil eller log ind</h3>
    </div>

<div className="chatbox">

    <div className="wrap">
        <ul>
            <li className="replies">
                <img className="face1" src={Face} alt="" />
                <p className="p1">Velkommen til Chatweb. </p>
            </li>
        </ul>
    </div>
    <div className="wrapsent">
        <ul>
            <li className="sent">
                <img className="face2" src={Face2} alt="" />
                <p className="p2">Her kan du chatte med andre om webudvikling og programering..
                </p>
            </li>
        </ul>
    </div>
    <div className="wrap">
        <ul>
            <li className="replies">
                <img className="face3" src={Face} alt="" />
                <p className="p3">Når du har læst din velkomst mail, så kan bare åbne chatsiden og skrive løs. </p>
            </li>
        </ul>
    </div>

    <div className="wrapsent">
        <ul>
            <li className="sent">
                <img className="face4" src={Face2} alt="" />
                <p className="p4">Vi håber du får glæder af siden. God fornøjelse.
                </p>
            </li>
        </ul>
    </div>
    </div>
    {/* <img className="bagkort" src={Baggrundkort} alt="" /> */}
</div>
)
}
}