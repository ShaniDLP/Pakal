import React, { Component } from "react";
import axios from "axios";



const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            site: "",
            selectedSiteIndex: 0,
            mongosites: []
        };


    }
    // componentDidMount() {
    //     this.callApi()
    //       .then(res => this.setState({ response: res.express }))
    //       .catch(err => console.log(err));
    //   } 

    // componentDidMount = ()=>{
    //     this.getDataFromMongo();
    // }

    handleButtonClick = () => {
        axios.get("/getweather").then(response => {
            this.setState({
                weather: response.data.temp_c
            })

        });
    }
    getDataFromMongo = () => {
        axios.get('/api').then((response) => {
            const data = response.data;
            console.log('data has been received!');
            this.setState({ mongosites: data })
        }).catch(() => {
            alert('Error retreving data')
        });
    }

    handleButtonClickdata = () => {
        axios.get("/getinfo").then(response => {
            let itay = [];
            response.data.forEach(element => {
                itay.push(element)

            });
            console.log(itay);
            console.log(typeof itay);
            console.log( Object.values(itay));

            // console.log(typeof response.data);
            // console.log(response.data[1]);
            // let datasite = JSON.stringify(response.data[1].tags);
            let datasite = JSON.stringify(response.data[1]);
            this.setState({
                site: datasite
            })
        });
    }
    render() {

        return (
            <div>
                <button onClick={this.handleButtonClickdata}> Get Data</button>
                <h4> site: {this.state.site}</h4>
            </div>
        );
    }
}
