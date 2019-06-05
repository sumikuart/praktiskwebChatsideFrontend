import React, { Component } from 'react';
import Navbar from './components/navbar';
import Founder from './components/founder'
import './App.css';



export default class App extends Component {
render() {
return (
<div>
  <Navbar />
  <Founder/>
  
</div>
)
}
}