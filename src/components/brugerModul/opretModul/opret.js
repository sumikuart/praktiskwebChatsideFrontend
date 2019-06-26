import React,{Component}from 'react'
import axios from 'axios'
import './opret.style.css';

export default class Opret extends Component {

    state = {
        user_name:'',
        user_mail:'', 
        user_password: '',

        mach_password: '',
        users: ' ',


        check_name:null,
        check_mail:null,
        check_password:null,

        errror_name:null,
        errror_mail:null,
        errror_password:null,
    }   

handelUsernameChange = (e) => {

    this.setState({
        user_name:e.target.value
    })

}

handelPasswordChange = (e) => {
    this.setState({
        user_password:e.target.value
    })
}

handelMachPasswordChange = (e) => {
    this.setState({
        mach_password:e.target.value
    })
}


handelEmailChange = (e) => {
    this.setState({
        user_mail:e.target.value
    })
}

handelChangeMaster = (e) => {

    e.preventDefault();
    console.log("username: ", this.state.user_name)
    console.log("password: ",this.state.user_password) 
    console.log("password Mach: ", this.state.mach_password) 
    console.log("email: ", this.state.user_mail) 

    // Tjek af Brugernavn 
    axios.get('http://localhost:4040/search/'+this.state.user_name)
    .then(response => {
        this.setState({
            users: response.data   
        })

        console.log('Name Search Return: ',this.state.users)
    
        if(this.state.users[0] === undefined){
            console.log('Yay brugernavnet er frit')

            this.setState({
                check_name:1
            })
            
        } else {

            if(this.state.user_name === this.state.users[0].user_name){
                console.log('hej dit brugernavn er taget')

                this.setState({
                    check_name:0
                })
            }
        }

    })

    // Tjek af Password

    if (this.state.user_password.length > 3 ) {

        if(this.state.user_password ===  this.state.mach_password ) {
            console.log('Yay dit password er godkendt')
                    
            this.setState({
                check_password:1
            })
    
        } else {
            console.log('nope dine passwords er ikke ens')
                    
            this.setState({
                check_password:0
            })
        }

    } else {
        console.log('nope dine passwords er ikke lang nok')
                    
        this.setState({
            check_password:2
        })

    }


    // Tjek af Email:


    if(this.state.user_mail.includes("@") && this.state.user_mail.includes(".")) {

        console.log("this is a mail")

        axios.get('http://localhost:4040/searchemail/'+this.state.user_mail)
        .then(response => {
            this.setState({
                users: response.data   
            })
    
            console.log('Email Search Return: ',this.state.users)
        
            if(this.state.users[0] === undefined){
                console.log('hej Din mail er godkendt')
                this.setState({
                    check_mail:1
                })

            } else {
                if(this.state.user_mail === this.state.users[0].user_mail){
                    console.log('hej du har en konto med denne mail')
                    this.setState({
                        check_mail:0
                    })

                }
            }
    
        })


    } else {
        console.log('This is not a mail')
        this.setState({
            check_mail:2
        })
    }





}


validate = (e) => {

    e.preventDefault();

    console.log('Check name: ',this.state.check_name)
    console.log('Check password: ',this.state.check_password)
    console.log('Check mail: ',this.state.check_mail)

if (this.state.check_name === 1){
    console.log("yay navn er godkendt")

    this.setState({
        errror_name:"Dit brugernavn er godkendt"
    })

} else if (this.state.check_name === 0) {
    console.log('Brugernavnet er desværre optaget.')

    this.setState({
        errror_name:"brugernavnet er ikke godkendt Da det er taget af en anden bruger"
    })
}

if (this.state.check_password === 1){
    console.log("yay password er godkendt")

    this.setState({
        errror_password:"Dit kodeord er godkendt"
    })
} else if(this.state.check_password === 0){
    console.log("Kodeorderne er ikke er ens")

    this.setState({
        errror_password:"Kodeorderne er ikke er ens"
    })
}
else if(this.state.check_password === 2) {
    console.log('password er ikke lang nok')

    this.setState({
        errror_password:'Kodeordet er ikke lang nok, minimum 4 tegn'
    })
}


if (this.state.check_mail === 1){
    console.log("yay mail er godkendt")

    this.setState({
        errror_mail:"Yay din mail er godkendt"
    })

} else if (this.state.check_mail === 0) {
    console.log('Du har en konto med denne mail')

    
    this.setState({
        errror_mail:"Der er en konto med denne mail i forvejen"
    })

} else if (this.state.check_mail === 2) {
    console.log('Dette er ikke en mail')

    
    this.setState({
        errror_mail:"Dette er ikke en mail"
    })
}


if (this.state.check_name === 1 && this.state.check_password=== 1 && this.state.check_mail === 1) {
    console.log('opret bruger')

    const skabNyBruger = {
        user_name:this.state.user_name,
        user_mail:this.state.user_mail,
        user_password:this.state.user_password
    }

    axios.post('http://localhost:4040/newuser', skabNyBruger)
    .then(res => console.log(res.data));


    this.setState({
        user_name:'',
        user_mail:'', 
        user_password: '',

        mach_password: '',
        users: ' ',


        check_name:null,
        check_mail:null,
        check_password:null,

        
        errror_name:null,
        errror_mail:null,
        errror_password:null,
    })
}
}


render() {
return (
<div className="opret">

    <div className=" form formopret">
    <h2>Opret Bruger</h2>
        <form id="register-form" className="register-form" onSubmit={this.validate} onBlur={this.handelChangeMaster}>

            <input type="text" placeholder="Brugernavn" onChange={this.handelUsernameChange} value={this.state.user_name} />
            <div className="validateInfoBox"> <p>{this.state.errror_name}</p></div>
            <input type="password" placeholder="Kodeord" onChange={this.handelPasswordChange} value={this.state.user_password}/>
            <input type="password" placeholder="Bekræft Kodeord" onChange={this.handelMachPasswordChange} value={this.state.mach_password}/>
            <div  className="validateInfoBox"> <p>{this.state.errror_password}</p></div>
            <input type="text" placeholder="Email" onChange={this.handelEmailChange} value={this.state.user_mail}/>
            <div  className="validateInfoBox"> <p>{this.state.errror_mail}</p></div>
            <input type="submit" className="loginbutton" value="opret" />

        </form>

    </div> 

</div>
)
}
}