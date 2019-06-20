import React,{Component}from 'react'
import './login.style.css';

export default class Login extends Component {

handleOnclick = () => {

}



render() {
return (
<div>
   
    <div className="form formlog">
    <h2>Login</h2>
        <form id="login-form" className="login-form">
            <input type="text" placeholder="Brugernavn" />
            <input type="password" placeholder="Kodeord" />
            <button className="loginbutton1">login</button>
        </form>
    </div> 

</div>
)
}
}