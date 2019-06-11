import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './opretBrugerknap.style.css';

export default class OpretNyBruger extends Component {
    render() {
        return (
            <div className="opretnybruger">
                
                
                <Link to="/founder/creatuser"> <button>Opret nu bruger</button> </Link>
            </div>
        )
    }
}
