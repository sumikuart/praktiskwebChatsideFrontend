import React, { Component } from 'react'
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import axios from 'axios'
import './brugerLister.style.css';



const MapUsers = (props) => {

    return(
            <tr>
            <td> <NavLink to={"/founder/useradmin/"+props.currentUser._id}> {props.currentUser.user_name} </NavLink> </td>
            <td > {props.currentUser.user_type} </td>
            <td> <div className={props.currentUser.user_online ? 'online' : 'offline'}></div>  </td>
        </tr>
    )


}

export default class BrugerLister extends Component {


    state = {

        userTypeSearch: 'allusers',
        searchUserName: '',
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


    // if(this.state.userTypeSearch === "Timeoutusers" ) {
    //     axios.get('http://localhost:4040/timeoutlist').
    //     then(response => {
    //         this.setState({
    //             users: response.data   
    //         });
    //         console.log(this.state.users)
    //     })
    // }

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

printUserList = (e) => {

    return this.state.users.map(function(currentItem, i){
        return <MapUsers currentUser={currentItem} key={i}/>

    });
}

changeSearchUser = (e) => {

    this.setState({
        searchUserName:e.target.value
    })

}

searchForUser = (e) =>{
    e.preventDefault();

    console.log(this.state.searchUserName)
    
    axios.get('http://localhost:4040/search/'+this.state.searchUserName)
    .then(response => {
        this.setState({
            users: response.data   
        })
    })
}

render() {
return (
<Router>
    <div className="brugerlister">

        <form onSubmit={this.searchForUser}>
            <input className="søg" type="text" placeholder="Søg Bruger" onChange={this.changeSearchUser} />
            <input className="søgsubmit" type="submit"  value="søg" />
        </form>

        <div className="dropdown">


            <div className="dropbtn">Bruger info

            <form className="formbrugerliste" onSubmit={this.onSubmit}>
                <select className="selectvenstre" onChange={this.onChangeUserSearchType}> 
                    <option value="allusers"> Alle Bruger </option>
                    <option value="onlineusers" > Online Bruger </option>
                    <option value="Adminusers" > Admin Bruger </option>
                    <option value="Normaleusers" > Normale Bruger </option>
                    <option value="Timeoutusers"> Timeout Bruger </option>
                    <option value="Bannedusers"> Banned Bruger </option>
                </select>  
                <button type="submit"> Søg </button>
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

            <tbody onClick={this.props.change_user_id}>
                {this.printUserList()}
            </tbody>

        </table>

    </div>
</Router>
)
}
}

// onClick={this.props.change_user_id}