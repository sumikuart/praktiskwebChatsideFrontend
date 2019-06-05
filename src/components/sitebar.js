import React, { Component } from 'react'
import {Link} from "react-router-dom";

import '../App.css';


class Sitebar extends Component {
render() {
return (

    <nav id="snav">
        
        <input className="søg" type="text" placeholder="Søg Bruger" />
        <button className="søgsubmit" type="submit">Søg</button>

        <ul id="sul">
            <li id="sli">
                <Link to="/founder/useradmin">Bruger Admin</Link>
            </li>
            <li id="sli1">
                <Link to="/founder/statistik">Statistik </Link>
            </li>

        </ul>

    </nav>

)
}
}
export default Sitebar