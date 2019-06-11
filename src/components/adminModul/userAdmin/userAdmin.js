import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BrugerLister from '../burgerList/brugerLister';
import Profil from '../profil/profil'
import Sitebar from '../sitebar/sitebar';
import OpretNyBruger from '../opretbrugerKnap/opretBrugerKnap'
import './userAdmin.style.css';


export default class UserAdmin extends Component {

    state={
        user_name: '',
        user_mail: '',
        user_password: '',
        user_type: '', 
        user_note: '', 
        user_timeout: '', 
        user_banned: '',
        user_verified: '',
        user_online: '',


        user_id:''
    }

    componentDidMount(){
        console.log('mounted: ',this.state.user_id )

    }

    componentDidUpdate(){
        console.log('Updateted: ',this.state.user_id )
    }


    user_id_change = (e) => {
        this.setState({
          user_id: this.props.match.params.id
        })

        console.log('parameter: ', this.props.match.params.id)
    }

    render() {
        return (
            <div className="founder">

            <Sitebar/>
             
            <BrugerLister change_user_id={this.user_id_change}/> 
            <Profil value={this.state.user_id}/>
            <OpretNyBruger/>

        
            </div>
        )
    }
}


