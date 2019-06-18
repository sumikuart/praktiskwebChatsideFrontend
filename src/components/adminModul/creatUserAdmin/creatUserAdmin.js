import React, { Component } from 'react'
import Sitebar from '../sitebar/sitebar';
import CreatUserData from '../creatUserData/creatUserData';
import './creatUserAdmin.style.css';

export default class CreatUserFromAdmin extends Component {
    render() {
        return (
            <div className="creatUserAdmin">

            <Sitebar/> 
            <CreatUserData />

            </div>
        )
    }
}
