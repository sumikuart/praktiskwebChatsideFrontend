import React,{Component}from 'react'
import './opret.style.css';

export default class Opret extends Component {

handleOnclick = () => {

}


render() {
return (
<div>

    <div className=" form formopret">
    <h2>Opret Bruger</h2>
        <form id="register-form" className="register-form">
            <input type="text" placeholder="Brugernavn" />
            <input type="password" placeholder="Kodeord" />
            <input type="password" placeholder="Bekræft Kodeord" />
            <input type="text" placeholder="Email" />
            <button className="loginbutton">Opret</button>
        </form>

    </div> 

</div>
)
}
}