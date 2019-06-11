import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Forside from './components/landingModul/forside'
import Statistik from './components/adminModul/statistikAdmin/statistikAdmin'
import UserAdmin from './components/adminModul/userAdmin/userAdmin'
import CreatUserFromAdmin from './components/adminModul/creatUserAdmin/creatUserAdmin'
import Chatsite from './components/chatModul/chatsite'

import './App.css';





export default class App extends Component {
render() {
return (
<Router>
  
  <Navbar />
  {/* <Forside />  */}
  {/* <Chatsite/> */}

  <Switch>
    <Route exact path="/" component={Forside} />
    <Route path="/founder/useradmin/:id" component={UserAdmin} />
    <Route exact path="/founder/statistik" component={Statistik} />
    <Route exact path="/founder/creatuser" component={CreatUserFromAdmin} />
    <Route exact path="/statistik" component={Statistik} />
  </Switch>
  
</Router>
)
}
}