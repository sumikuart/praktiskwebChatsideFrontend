import React, { Component } from 'react';
import './brugerProfil.style.css';
import Face from './face.jpg'
import Close from './close.png'

export default class BrugerProfil extends Component {
    
render() {
return (
<div id="side">
<div className="brugerprofil">



    <div>
        <h1>Profil</h1>
        <img className="img" src={Face} alt="" />

    </div>
    <div className="raekke">
        <label>Bruger navn: </label>
        <span>Sommer</span>
    </div>


    <div className="raekke">
        <label>Email: </label>
        <span>Sommer@hol.dk</span>
    </div>
    <div className="raekke">
        <label>Kodeord: </label>
        <span>*****</span>
    </div>

    <img className="imgclose" src={Close} alt="" />
          

   
</div>
</div>
)
}
}