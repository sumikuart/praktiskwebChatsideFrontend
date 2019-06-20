import React, {Component} from 'react'
import Sitebar from '../sitebar/sitebar';
import './statistik.style.css';
import { Bar, Line,Pie, Doughnut} from 'react-chartjs-2';



export default class Statistik extends Component {
    constructor(props){
        super(props)

        this.state ={
            
            data: {
           
                lable: {
                    fontSize: 30
                },
                labels:["Online","Offline","Banned","Slettet","Alle Brugere"],

                datasets: [{
                  label: "Bruger oversigt",

                  backgroundColor: ["green", "yellow","red","black","blue"],

                  data: [37,33,17,17,33]
                }]
              }
        }
    }
    // getData=canvas=>{
    //     const data=this.state.data;
    // }
  
    render() {

        return ( 
     <div className="statistik">

            < Sitebar className="sitebaren" />
     

                <Bar  className="indhold" 
                options={{ maintainAspectRatio: false }}
                data={this.state.data}
     

              
                />   
             
     </div>

        )
    }
}