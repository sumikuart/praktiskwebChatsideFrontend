import React, { Component } from 'react'
import axios from 'axios';
import Moment from 'react-moment';
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
    user_online: '',

    user_id: this.props.value,

    // Confirm Box States:
    confirm_hide: false,
    confirm_name: '',

    //TimeOut State: 
    timeout_hide:false,
    timeout_type: '',
    timeleft:''
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
            user_timeout_length:response.data.user_timeout_length,
            user_created:response.data.user_created,
            user_banned: response.data.user_banned,
            user_verified: response.data.user_verified,
            user_online: response.data.user_online
        })
    }).catch(function(err) {
        console.log('NOOO did not get user in Mount')
    })


    console.log('url: ',this.props.value)

}

// ** Dette er ComponentDidUpdate.  den skal aktiveres når vi vil have dynamis update. men lige nu laver vi hard update.
// ** Den  er slået fra, da den blev ved med at resette mine values
//
// componentDidUpdate(){
//     axios.get('http://localhost:4040/user/'+this.props.value)
//     .then(response => {
//         this.setState({
//             user_name: response.data.user_name,
//             user_mail: response.data.user_mail,
//             user_password: response.data.user_password,
//             user_type:response.data.user_type,
//             user_note: response.data.user_note,
//             user_timeout:response.data.user_timeout, 
//             user_banned: response.data.user_banned,
//             user_verified: response.data.user_verified,
//             user_online: response.data.user_online
//         })
//     }).catch(function(err) {
//         console.log('NOOO did not get user in update')
//     })
// }



onChangeName = (e) => {
    this.setState({
        user_name:e.target.value
    })
}

onChangeMail = (e) => {
    this.setState({
        user_mail:e.target.value
    })
}


onChangeCode = (e) => {
    this.setState({
        user_password:e.target.value
    })
}

onChangeNote = (e) => {
    this.setState({
        user_note:e.target.value
    })
}

saveChangesHandler = (e) =>{
    e.preventDefault();


    const userChangesObj = {
        user_name: this.state.user_name,
        user_mail: this.state.user_mail,
        user_password: this.state.user_password,
        user_type:this.state.user_type,
        user_note: this.state.user_note,
        user_timeout:this.state.user_timeout, 
        user_banned: this.state.user_banned,
        user_verified: this.state.user_verified,
        user_timeout_length:this.state.user_timeout_length

    }

    axios.put('http://localhost:4040/edit/' + this.props.value, userChangesObj)
    .then( res => console.log(res.data))



}

onChangeUserType = (e) => {

this.setState({
    user_type:e.target.value
})

}


// ---------------------------------------------------------Change user status functions:
onClickHandlerConfirmBox = (e) =>{
 e.preventDefault();
    if(this.state.confirm_hide) {
        this.setState({
            confirm_hide:false
        })
    } else {
        this.setState({
            confirm_hide:true
        })
    }

}

onClickHandlerJa =(e) =>{
    e.preventDefault();

     

    if(this.state.confirm_name=='Unban' || this.state.confirm_name=='Ban'){
        {this.handelBan()}
    }

    if(this.state.confirm_name=='Slet'){
        {this.handelSlet()}
    }
    
    if(this.state.confirm_name=='Fjern godkendelse' || this.state.confirm_name=='Godkend'){
        {this.handelGodkend()}
    }


}

startHandelGodkend = (e) =>{
    e.preventDefault();


    if(this.state.user_verified){
        this.setState({
            confirm_hide:true,
            confirm_name: 'fjerne godkendelse'
    
        })
    } else {
        this.setState({
            confirm_hide:true,
            confirm_name: 'Godkend'
    
        })

    }

}


startHandelBan = (e) =>{
    e.preventDefault();


    if(this.state.user_banned){
        this.setState({
            confirm_hide:true,
            confirm_name: 'Unban'
    
        })
    } else {
        this.setState({
            confirm_hide:true,
            confirm_name: 'banned'
    
        })

    }


}

startHandelSlet = (e) =>{
    e.preventDefault();


        this.setState({
            confirm_hide:true,
            confirm_name: 'slette'
    })
}

handelGodkend = (e) =>{
    if(this.state.user_verified){
        this.setState({
            user_verified: false,
            confirm_hide:false
        })
    } else {
        this.setState({
            user_verified: true,
            confirm_hide:false
        })
    }
}

handelSlet =(e)=>{
    
    axios.delete('http://localhost:4040/delete/'+this.state.user_id)
    .then( res => console.log(res.data))

    this.setState({
        confirm_hide:false,

        user_name:'User DELETED',
        user_mail:'',
        user_password: '',
        user_type:this.state.user_type,
        user_note: ''


    })
}

handelBan = (e) =>{


    if(this.state.user_banned){
        this.setState({
            user_banned: false,
            confirm_hide:false
        })
    } else {
        this.setState({
            user_banned: true,
            confirm_hide:false
        })
    }

}

// TIMEOUT BOX:
startHandelTimeout = (e) => {
    e.preventDefault();

    this.setState({
        timeout_hide: true
    })
}

onClickHandlerTimeBox = (e) =>{

    e.preventDefault();

    if(this.state.timeout_hide) {
        this.setState({
            timeout_hide:false
        })
    } else {
        this.setState({
            timeout_hide:true
        })
    }
}

// TIMEOUT FUNCKTION

addTimeoutHandler = (e) => {
    
        this.setState({
            timeout_type: e.target.value
        }) 

}

onClickRemoceTimeout = (e) => {
    
    e.preventDefault();  

    this.setState({
        timeout_type:'',
        user_timeout: 'None',
        timeout_hide:false
    }) 

}






setTimeoutStart = (e) => {

    e.preventDefault();  

        this.setState({
            user_timeout: new Date().getTime()
        })
  
    if(this.state.timeout_type === "smallTimeout" ) {


        this.setState({
            user_timeout_length: <Moment format="DD/MM/YYYY hh:mm:ss" add={{minutes: 10}}>{this.state.user_timeout}</Moment>,
            timeout_hide:false
        }) 

    }
    
    if(this.state.timeout_type === "mediumTimeout" ) {
        this.setState({
            user_timeout: '60 min',
            timeout_hide:false
        }) 
    }
    
    if(this.state.timeout_type === "bigTimeout" ) {
        this.setState({
            user_timeout: '1 dag',
            timeout_hide:false
        }) 
    }
}




render() {
return (
<div className="profil">

    <div className="profilinfo">
        <h4>Brugerprofil </h4>
        
    <form id="update">
        <input type="submit" value="Hent valgte bruger" />
    </form>

    
        <form>

            <div>
                <label>Brugernavn {this.props.value}</label>
                <input value={this.state.user_name} onChange={this.onChangeName}/>
            </div>

            <div>
                <label>Email </label>
                <input value={this.state.user_mail} onChange={this.onChangeMail}/>
            </div>


            <div>
                <label>Kodeord </label>
                <input value={this.state.user_password} onChange={this.onChangeCode}/>
            </div>

            <div className="extraInfoDiv">
                <div>
                    <label>Type</label>
                    <select className="selecthojre"  onChange={this.onChangeUserType} value={this.state.user_type}> 
                        <option value="user"> User </option>
                        <option value="admin" > Admin </option>
                        <option value="founder" > Founder </option>
                    </select>  
                </div>

                <div>
                    <label>Godkendt:</label>
                      <div className={this.state.user_verified ? 'acceptedUser' : 'notAcceptedUser'}></div>
                </div>

                
                <div>
                    <label>Timeout:</label>

                    <div>
                        {this.state.timeleft}
                    </div>
                </div>

                <div>
                    <label>Banned:</label>
                    <div className={this.state.user_banned ? 'bannedUser' : 'notBannedUser'}></div>

                </div>

            </div>

            <div>
            <label>Note</label>
            <textarea value={this.state.user_note} onChange={this.onChangeNote} ></textarea>
            </div>

        </form>

    {/* Her skal der vises om de er Online, banned, godkendt, og timeouted */}
    </div>

    <div className="profilknapwrap">

        <form className="profilknap" onSubmit={this.startHandelGodkend}>  
            <input type="submit" value="Godkend Bruger"/>
        </form>

        <form className="profilknap" onSubmit={this.startHandelBan}>  
            <input type="submit" value="Ban Bruger"/>
        </form>

        <form className="profilknap" onSubmit={this.startHandelTimeout}>  
            <input type="submit" value="Timeout Bruger"/>
        </form>

        <form className="profilknap" onSubmit={this.startHandelSlet}>  
            <input type="submit" value="Slet Bruger"/>
        </form>

    </div>

    <div className="formDiv">
    <form  onSubmit={this.saveChangesHandler}>
        <div>
            <input type="submit" value="Gem Ændringer"/>
        </div>
    </form>

    </div>

{/* Ban/ Godkend/ Slet box og fremvisning */}
    <div className={this.state.confirm_hide ? 'masterConfirmBox' : 'hide'}>
        <div className="ProfilConfirmBoxBackdrop"></div>
        <div className="ProfilConfirmBox">
            <div className="closebox" onClick={this.onClickHandlerConfirmBox}> 
                <p>X</p>
            </div>

            <p>Du skal til at <span>{this.state.confirm_name} </span> brugeren: </p>
            
            <p><span>{this.state.user_name}</span></p>
            <p>Vil du fortsætte?</p>


            <div className="confirmBoxKnapper">
                <form onSubmit={this.onClickHandlerJa}>
                    <input type="submit" value="Ja"/>
                </form>

                
                <form onSubmit={this.onClickHandlerConfirmBox}>
                    <input type="submit" value="Nej"/>
                </form>
            </div>
        </div>
    </div>


{/* TIME OUT!!! */}
    <div className={this.state.timeout_hide ? 'masterTimeoutBox' : 'hide'}>
        <div className="ProfilConfirmBoxBackdrop"></div>

            <div className="ProfilConfirmBox">
                <div className="closebox" onClick={this.onClickHandlerTimeBox}> 
                    <p>X</p>
                </div>

                <p>Time - Out user: <span> {this.state.user_name} </span></p>

                <p>start: <Moment format="DD/MM/YYYY hh:mm:ss">{this.state.user_timeout}</Moment> slut: {this.state.user_timeout_length}</p>

                <div className="knapTimeoutDiv">

                    <form onChange={this.addTimeoutHandler} onSubmit={this.setTimeoutStart}>

                        <input type="radio" name="timeout_time" value="smallTimeout"/> 10 min
                        <input type="radio" name="timeout_time" value="mediumTimeout"/> 60 min
                        <input type="radio" name="timeout_time" value="bigTimeout"/> 1 dag


                        <input type="submit" value="Ready Timeout"/>
                    </form>

                </div>

                <form onSubmit={this.onClickRemoceTimeout}>
                    <input type="submit" value="Remove Timeout"/>
                </form>

                <form onSubmit={this.onClickHandlerTimeBox}>
                    <input type="submit" value="Cancel"/>
                </form>
            </div>
    </div>
</div>
)
}
}