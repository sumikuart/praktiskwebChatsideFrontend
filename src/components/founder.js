import React, { Component } from 'react'
import Sitebar from './sitebar';
import BrugerLister from './brugerLister';
import Profil from './profil'
import OpretNyBruger from './opretNyBruger'
import '../App.css';

export default class Founder extends Component {
    render() {
        return (
            <div className="founder">
             <Sitebar/> 
             <BrugerLister/> 
             <Profil/>
             <OpretNyBruger/>
            </div>
        )
    }
}

