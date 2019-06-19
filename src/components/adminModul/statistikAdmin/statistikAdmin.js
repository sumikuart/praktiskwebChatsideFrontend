import React, {Component} from 'react'
import Sitebar from '../sitebar/sitebar';
import './statistik.style.css';
import { Bar, Line,Pie, } from 'react-chartjs-2';




export default class Statistik extends Component {
    constructor(props){
        super(props)

        this.state ={
            data: {
                
                labels:["Online","Offline","Slettet","Banned","Alle Brugere"],
                datasets:[
                    {
                    label:"Online",
                    backgroundColor:"rgba(255, 0, 255, 0.75)",
                    data:[4, 5, 1, 8, 50]
                },
                {
                label:"Offline",
                backgroundColor:"rgba(0, 255, 0, 0.75)",
                data:[7,9,4,10,20]
                },
                {
                    label:"Slettet",
                    backgroundColor:"rgb(66, 134, 244)",
                    data:[14,2,25,20,10]
                    },
                    {
                        label:"Banned",
                        backgroundColor:"rgb(233, 239, 64)",
                        data:[10,5,32,10,4]
                        }
            ]
            }


        }
    }
    // getData=canvas=>{
    //     const data=this.state.data;
    // }
    render() {

        return ( 
     < div className="statistik">

            < Sitebar className="sitebaren" />

                <Bar className="indhold"
                options={{ }}
                data={this.state.data}
                width={500}
                />
              
     < /div>

        )
    }
}