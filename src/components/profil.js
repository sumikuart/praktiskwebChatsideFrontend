import React, { Component } from 'react'

export default class Profil extends Component {
render() {
return (
<div className="profil">
    <div className="profilinfo">
        <h4>brugerprofil </h4>
        <p>Brugernavn: </p>
        <p>Email: </p>
        <p>Password: </p>
    </div>

    <div className="profilknapwrap">
        <button className="profilknap" >Tilføj/fjern Admin</button>
        <button className="profilknap">Banned Bruger</button>
        <button className="profilknap">Giv bruger en Timeout</button>
        <button className="profilknap">Gør inaktiv</button>
    </div>
</div>
)
}
}