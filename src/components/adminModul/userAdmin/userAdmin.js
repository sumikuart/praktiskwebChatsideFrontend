import React, { Component } from 'react'
import BrugerLister from '../burgerList/brugerLister';
import Profil from '../profil/profil'
import Sitebar from '../sitebar/sitebar';
import OpretNyBruger from '../opretbruger/opretNyBruger'
import './userAdmin.style.css';
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


