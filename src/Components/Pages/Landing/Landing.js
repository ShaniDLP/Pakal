import React, { Component } from 'react';
import './Landing.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../../Navigation/ToolBar/Navigation';
import SelectArea from './selectArae';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class Landing extends Component {
    state = {
        show: false
    }
    startbutton() {
        this.setState({ show: true })
        console.log('hii');
    };
    render() {
        return (
            <div>
                <div className="bodyy">
                </div>
                <Container>
                    <div id="containerr">
                        
                        <div
                            style={{
                                display: this.state.show ? 'none' : 'block'
                            }}>
                            <h3> פק"ל קפה</h3>
                            <Navigation />
                            <p>מצא את המקום המושלם עבורך <br />
                    לשבת, להרגע ולהנות מהנוף</p>

                            <button type="button" class="btn btn-light startbutton" onClick={() => this.startbutton()} >התחל</button>
                        </div>
                         <SelectArea show={this.state.show} />
                    </div>
                </Container>
            </div>

        )
    }
}


export default Landing;


