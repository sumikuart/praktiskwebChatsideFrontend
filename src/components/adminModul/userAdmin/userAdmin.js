import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BrugerLister from '../burgerList/brugerLister';
import Profil from '../profil/profil'
import Sitebar from '../sitebar/sitebar';
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

        user_id: this.props.match.params.id
    }

    componentDidMount(){
        console.log('mounted: ',this.state.user_id )

    }

    componentDidUpdate(){

        console.log('Updateted: ',this.state.user_id )
        console.log('Updateted 2: ',this.props.match.params.id )

    }


    user_id_change = (e) => {


        // PROBLEMET MED AT VISE DEN VALGTE BRUGER LIGGER HER: DEN BLIVER VED MED AT FÅ TILDELT DEN ORGINALE URL OG IKKE DEN AKTUELLE URL
        this.setState({
          user_id:this.props.match.params.id
        })

        console.log(this.props.match)
        console.log('parameter: ', this.props.match.params.id)
        console.log('user_id: ', this.state.user_id)
    }

    render() {
        return (
            <div className="founder">

            <Sitebar/>
             
            <BrugerLister change_user_id={this.user_id_change} value={this.state.user_id} /> 
            <Profil value={this.state.user_id} change_user_id={this.user_id_change} />


        
            </div>
        )
    }
}


