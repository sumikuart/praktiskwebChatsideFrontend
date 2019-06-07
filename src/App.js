import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import Navbar from './components/navbar';
// import Forside from './components/forside'
import Statistik from './components/statistik'
import UserAdmin from './components/userAdmin'
import Chatsite from './components/chatsite'

import './App.css';





export default class App extends Component {
render() {
return (
<Router>
  
  {/* <Navbar />
  <Forside /> */}
  <Chatsite/>

  <Route exact path="/founder/useradmin" component={UserAdmin} />
  <Route exact path="/founder/statistik" component={Statistik} />
  <Route exact path="/statistik" component={Statistik} />

</Router>
)
}
}