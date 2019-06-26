import React,{Component}from 'react';
import {Link} from 'react-router-dom'
import './login.style.css';
import axios from 'axios';


export default class Login extends Component {

state= {
    user_name: '',
    user_password: '',

    users: '',

    loginInfo: "",
    accestype: "",
    login_state:false
}

handelChangeUserName = (e) => {
    this.setState({
        user_name:e.target.value
    })
}

handelChangeUserpassword = (e) => {
    this.setState({
        user_password:e.target.value
    })
}

submitLoginHandler = (e) => {
    e.preventDefault();
this.setState({
    loginInfo:"Vi mangler info"
})
    axios.get('http://localhost:4040/search/'+this.state.user_name)
    .then(response => {
        this.setState({
            users: response.data   
        })

            
        console.log(this.state.users[0])

        if (this.state.users[0]) {
            if(this.state.users[0].user_password === this.state.user_password) {
                console.log("logged in")

                const updateLoginStatus = {
                    user_name: this.state.users[0].user_name,
                    user_mail: this.state.users[0].user_mail,
                    user_password: this.state.users[0].user_password,
                    user_type:this.state.users[0].user_type,
                    user_note: this.state.users[0].user_note,
                    user_timeout:this.state.users[0].user_timeout, 
                    user_timeout_length:this.state.users[0].user_timeout_length,
                    user_banned: this.state.users[0].user_banned,
                    user_verified: this.state.users[0].user_verified,
                    user_online:true,
                    user_created: this.state.users[0].user_created
                }

                axios.put('http://localhost:4040/edit/' + this.state.users[0]._id, updateLoginStatus)
                .then( res => console.log(res.data))


                if (this.state.users[0].user_type === 'user') {

                    this.setState({
                        loginInfo: "Hej Bruger " + this.state.users[0].user_name + ". Du er logget ind",
                        accestype:"userdemo",
                        login_state: true
                    })



                } else {

                    this.setState({
                        loginInfo: "Hej Admin " + this.state.users[0].user_name + ". Du er logget ind",
                        accestype:"founder/useradmin/5cffb52d1fef910338caebef",
                        login_state: true
                    })

                }


            

                this.setState({
                    loginInfo: "Hej " + this.state.users[0].user_name + ". Du er nu logget ind"
                })

            } else {
                console.log("error Wrong password")
                this.setState({
                    loginInfo: "Kodeordet er forkert"
                })
            }
        } else {
            console.log("We have no users under that name")
            this.setState({
                loginInfo: "Vi har ingen med det brugernavn"
            })
        }

    })


}

render() {
return (
<div className="login">
   
    <div className="form formlog">
    <h2>Login</h2>
        <form id="login-form" className="login-form" onSubmit={this.submitLoginHandler}>
            <input type="text" placeholder="Brugernavn" onChange={this.handelChangeUserName} value={this.state.user_name}/>
            <input type="password" placeholder="Kodeord" onChange={this.handelChangeUserpassword} value={this.state.user_password} />
            <input type="submit" id="loginbutton" value="Login" />
        </form>

        <div className="p">
            <p>{this.state.loginInfo}</p>

            <div className={this.state.login_state ? 'show_login_ongo' : 'hide_login_ongo'}>
             <Link to={'/'+ this.state.accestype}>Fortsæt</Link>
            </div>
       
        </div>
    </div> 

</div>
)
}
}