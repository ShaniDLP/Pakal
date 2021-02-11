import React, { Component } from 'react';
import './Landing.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../../Navigation/ToolBar/Navigation';
import SelectArea from './selectArea';
import ExternalLinks from '../../UI/ExternalLinks/ExternalLinks';

class Landing extends Component {
    state = {
        show: false,
        
    }
    startbutton() {
        this.setState({ show: true })
        console.log('start button clicked');
    };
    render() {
        return (
            <div className="maindiv">
                <div className="landingBody">
                </div>
                <Container>
                    <div id="landingContainer">                  
                        <div
                            style={{
                                display: this.state.show ? 'none' : 'block'
                            }}>
                            <h3> פק"ל קפה</h3>
                            <Navigation />
                            <p>מצא את המקום המושלם עבורך <br />
                    לשבת, להרגע ולהנות מהנוף</p>

                            <button type="button" className="btn btn-light startbutton" onClick={() => this.startbutton()} >התחל</button>
                        </div>
                         <SelectArea show={this.state.show} />
                    </div>
                </Container>
                <ExternalLinks/>
            </div>

        )
    }
}


export default Landing;


