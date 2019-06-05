import React, { Component } from 'react'
import BrugerLister from './brugerLister';
import Profil from './profil'
import Sitebar from './sitebar';
import OpretNyBruger from './opretNyBruger'
import '../App.css';
export default class UserAdmin extends Component {

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


