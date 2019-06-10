import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios'
import './brugerLister.style.css';



const MapUsers = props => (

    <tr>
        <td> {props.currentUser.user_name} </td>
        <td> {props.currentUser.user_type} </td>
        <td> <div className={props.currentUser.user_online ? 'online' : 'offline'}></div>  </td>
    </tr>

)

export default class BrugerLister extends Component {


    state = {

        userTypeSearch: 'allusers',
        users: []
    }

 onChangeUserSearchType = (e) => {
    this.setState({
        userTypeSearch:e.target.value
    })
}


onSubmit = (e) => {

    e.preventDefault();
    
    if(this.state.userTypeSearch === "allusers" ) {
        axios.get('http://localhost:4040/completelist').
        then(response => {
            this.setState({
                users: response.data   
            });
            console.log(this.state.users)
        })


    }

    if(this.state.userTypeSearch === "onlineusers" ) {
        axios.get('http://localhost:4040/onlineuserlist').
        then(response => {
            this.setState({
                users: response.data   
            });
            console.log(this.state.users)
        })
    }
    
    if(this.state.userTypeSearch === "Adminusers" ) {
        axios.get('http://localhost:4040/adminlist').
        then(response => {
            this.setState({
                users: response.data   
            });
            console.log(this.state.users)
        })
    }

    if(this.state.userTypeSearch === "Normaleusers" ) {
        axios.get('http://localhost:4040/userlist').
        then(response => {
            this.setState({
                users: response.data   
            });
            console.log(this.state.users)
        })
    }


    if(this.state.userTypeSearch === "Timeoutusers" ) {
        axios.get('http://localhost:4040/timeoutlist').
        then(response => {
            this.setState({
                users: response.data   
            });
            console.log(this.state.users)
        })
    }

    if(this.state.userTypeSearch === "Bannedusers" ) {
        axios.get('http://localhost:4040/banlist').
        then(response => {
            this.setState({
                users: response.data   
            });
            console.log(this.state.users)
        })
    }

}

printUserList =(e) => {
    return this.state.users.map(function(currentItem, i){
        return <MapUsers currentUser={currentItem} key={i} />
    });
}


render() {
return (
<Router>
    <div className="brugerlister">

         <input className="søg" type="text" placeholder="Søg Bruger" />
        <button className="søgsubmit" type="submit">Søg</button>

        <div className="dropdown">
            <div className="dropbtn">Bruger info

            <form onSubmit={this.onSubmit}>
                <select  onChange={this.onChangeUserSearchType}> 
                    <option value="allusers"> Alle Bruger </option>
                    <option value="onlineusers" > Online Bruger </option>
                    <option value="Adminusers" > Admin Bruger </option>
                    <option value="Normaleusers" > Normale Bruger </option>
                    <option value="Timeoutusers"> Timeout Bruger </option>
                    <option value="Bannedusers"> Banned Bruger </option>
                </select>  
                <button type="submit"> søg </button>
            </form>
            </div>

        </div>
        <table>

        <thead>

            <tr className="tr">
                <th className="td">Bruger Navn:</th>
                <th className="td">Type:</th>
                <th className="td">Status:</th>

            </tr>
          
        </thead>

            <tbody>
                {this.printUserList()}
            </tbody>

        </table>

    </div>
</Router>
)
}
}