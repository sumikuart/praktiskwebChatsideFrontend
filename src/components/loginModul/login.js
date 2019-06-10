import React,{Component}from 'react'
import '../App.css';

export default class LoginOpret extends Component {

handleOnclick = () => {

}

handleOnclick1 = () => {


}


render() {
return (
<div>
    <div className="form formlog">

        <form id="login-form" className="login-form">
            <input type="text" placeholder="Brugernavn" />
            <input type="password" placeholder="Kodeord" />
            <button className="loginbutton">login</button>
        </form>
    </div> 

    <div className=" form formopret">
        <form id="register-form" className="register-form">
            <input type="text" placeholder="Brugernavn" />
            <input type="password" placeholder="Kodeord" />
            <input type="password" placeholder="Bekræft Kodeord" />
            <input type="text" placeholder="email" />
            <button className="loginbutton">Opret</button>
        </form>

    </div> 

</div>
)
}
}