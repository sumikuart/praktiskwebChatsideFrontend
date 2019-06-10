import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './brugerLister.style.css';

export default class BrugerLister extends Component {
render() {
return (
<Router>
    <div className="brugerlister">

        
    <input className="søg" type="text" placeholder="Søg Bruger" />
        <button className="søgsubmit" type="submit">Søg</button>

        <div className="dropdown">
            <div className="dropbtn">Bruger info</div>
            <div className="dropdown-content">
                <Link to="/alleBrugere">Alle brugere</Link>
                <Link to="/onlineBrugere">Online brugere</Link>
                <Link to="/adminBrugere">Admin brugere</Link>
                <Link to="/timeoutBrugere">Timeout brugere</Link>
                <Link to="/bannedBrugere">Banned brugere</Link>
            </div>
        </div>
        <table>

            <tr className="tr">
                <td className="td">Bruger</td>
                <td className="td">Type</td>
                <td className="td">Farve</td>
            </tr>
            
            <tr className="tr">
                <td className="td">Bruger</td>
                <td className="td">Type</td>
                <td className="td">Farve</td>
            </tr>

            <tr className="tr">
                <td className="td">Bruger</td>
                <td className="td">Type</td>
                <td className="td">Farve</td>
            </tr>

        </table>

    </div>
</Router>
)
}
}