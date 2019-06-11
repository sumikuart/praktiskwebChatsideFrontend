import React, { Component } from 'react'
import axios from 'axios'
import Sitebar from '../sitebar/sitebar';
import './creatUserData.style.css';

export default class CreatUserData extends Component {

    state={
        user_name:'',
        user_mail: '',
        user_password:''
    }

// Vær opmærksom på at jeg gerne vil tilføre en cancel. men der opstod uventede problemer, med  -  this.props.history.push('/')  -
// Kim


onChangeName = (e) => {
    this.setState({
        user_name: e.target.value
    });
}

onChangeMail = (e) => {
    this.setState({
        user_mail: e.target.value
    });
}

onChangePassword = (e) => {
    this.setState({
        user_password: e.target.value
    });
}


onSubmit = (e) => {
    e.preventDefault();

    console.log('Creater User:')
    console.log('user_name: ' + this.state.user_name)
    console.log('user_mail: ' + this.state.user_mail)
    console.log('user_password: ' + this.state.user_password)


    const newUser = {
        user_name:this.state.user_name,
        user_mail:this.state.user_mail,
        user_password:this.state.user_password
    }

    axios.post('http://localhost:4040/newuser', newUser)
    .then(res => console.log(res.data));


    this.setState({
        user_name:'',
        user_mail: '',
        user_password:''
    })

}



    render() {
        return (
            <div className="creatUserData">

                <p>Opret ny bruger</p>

                <form onSubmit={this.onSubmit}>

                    <div>
                        <label> User Name:</label>
                        <input type="text" onChange={this.onChangeName}/>
                    </div>

                    <div>
                        <label>Email:</label>
                        <input type="text"  onChange={this.onChangeMail}/>
                    </div>

                    <div>
                        <label> Password:</label>
                        <input type="text" onChange={this.onChangePassword}/>
                    </div>


                    {/* Repeat Password validering kommer senere... Kim*/}
                    {/* <div>
                        <label> Repeat Password:</label>
                        <input type="text"/>
                    </div> */}

                    <div>
                        <input type="submit" value="Opret Bruger"/>
                    </div>

                </form>

      


            </div>
        )
    }
}
