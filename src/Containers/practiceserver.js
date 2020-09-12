import React, {Component} from "react";
import axios from "axios";

export default class Weather extends Component{
    constructor(){
        super();
        this.state={
            weather: "not yet",
            selectedSiteIndex:0
        };

    }  
    handleButtonClick=()=> {
        axios.get("/getweather").then(response =>{
    this.setState({
        weather:response.data.temp_c
    })

        });
    }


    handleButtonClickdata=()=> {
        axios.get("/getjson").then(response =>{
    this.setState({
        weather:response.data
      })

        });
    }
   render(){

return (
    <div>
    <button onClick={() =>{this.setState({selectedSiteIndex:0});this.handleButtonClickdata();}}> Get Data</button>
    <h4> sites: {this.state.weather}</h4>
    </div>
);
 }
}
