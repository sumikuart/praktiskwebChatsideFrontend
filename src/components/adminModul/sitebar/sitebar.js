import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './siteBar.style.css';


class Sitebar extends Component {
render() {
return (

    <nav id="snav">
        


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