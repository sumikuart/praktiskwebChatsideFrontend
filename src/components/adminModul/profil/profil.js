import React, { Component } from 'react'
import axios from 'axios';
import './profil.style.css';


export default class Profil extends Component {

state={
    user_name: '',
    user_mail: '',
    user_password: '',
    user_type: '', 
    user_note: '', 
    user_timeout: '', 
    user_banned: '',
    user_verified: '',
    user_online: ''
}


componentDidMount(){

    axios.get('http://localhost:4040/user/'+this.props.value)
    .then(response => {
        this.setState({
            user_name: response.data.user_name,
            user_mail: response.data.user_mail,
            user_password: response.data.user_password,
            user_type:response.data.user_type,
            user_note: response.data.user_note,
            user_timeout:response.data.user_timeout, 
            user_banned: response.data.user_banned,
            user_verified: response.data.user_verified,
            user_online: response.data.user_online
        })
    }).catch(function(err) {
        console.log('NOOO did not get user in Mount')
    })


    console.log('url: ',this.props.value)

}


componentDidUpdate(){

    axios.get('http://localhost:4040/user/'+this.props.value)
    .then(response => {
        this.setState({
            user_name: response.data.user_name,
            user_mail: response.data.user_mail,
            user_password: response.data.user_password,
            user_type:response.data.user_type,
            user_note: response.data.user_note,
            user_timeout:response.data.user_timeout, 
            user_banned: response.data.user_banned,
            user_verified: response.data.user_verified,
            user_online: response.data.user_online
        })
    }).catch(function(err) {
        console.log('NOOO did not get user in update')
    })


}


render() {
return (
<div className="profil">
    <div className="profilinfo">
        <h4>brugerprofil </h4>
        <p>Brugernavn: {this.state.user_name} </p>
        <p>Email: </p>
        <p>Password: </p>
        <p>Note: </p>
    </div>

    <div className="profilknapwrap">
        <button className="profilknap" >Tilføj/fjern Admin</button>
        <button className="profilknap">Banned Bruger</button>
        <button className="profilknap">Giv bruger en Timeout</button>
        <button className="profilknap">Gør inaktiv</button>
    </div>

    <div className="formDiv">
    <form>
        <div>
            <input type="submit" value="Gem Ændringer"/>
        </div>
    </form>
    </div>
</div>
)
}
}