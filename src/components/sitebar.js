import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom";

import '../App.css';


class Sitebar extends Component {
render() {
return (
<Router>
    <nav id="snav">
        
        <input className="søg" type="text" placeholder="Søg Bruger" />
        <button className="søgsubmit" type="submit">Søg</button>

        <ul id="sul">
            <li id="sli">Bruger Admin
                {/* <Link to="/founder">Bruger Admin</Link> */}
            </li>
            <li id="sli1">Statistik
                {/* <Link to="/statistik">Statistik </Link> */}
            </li>

        </ul>

    </nav>

</Router>
)
}
}
export default Sitebar