import React, { Component } from 'react';
// import Home from './Components/Home/Home';
import Landing from '../Pages/Landing/Landing'
import Sites from '../Pages/Sites/Sites';
import Sendform from '../Pages/Sendform/Sendform';
import Info from '../Pages/Info/Info';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route
} from "react-router-dom";


class Pakal extends Component {

  state = {
    sideBar: true
  }
  //when user click on menu icon close/open side bar
  showSideBar = (e) => {
    e.preventDefault();
    console.log(' user clicked on sidebar');
    if (this.state.sideBar) {
      this.setState({ sideBar: false })
    }
    else { this.setState({ sideBar: true }) }
    console.log(this.state.sideBar);
  }
  //close the sidebar when user click on backdrop
  closeSideBar = () => {
    console.log('backdrop clicked!');
    this.setState({ sideBar: true })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact >
          <Landing
            showSideBar={this.showSideBar}
            closeSideBar={this.closeSideBar}
            sideBar={this.state.sideBar} />
        </Route>
        <Route path="/area=:areaName" >
          <Sites
            showSideBar={this.showSideBar}
            closeSideBar={this.closeSideBar}
            sideBar={this.state.sideBar} />
        </Route>
        <Route path="/sendform">
          <Sendform
            showSideBar={this.showSideBar}
            closeSideBar={this.closeSideBar}
            sideBar={this.state.sideBar} />
        </Route>
        <Route path="/info">
          <Info
            showSideBar={this.showSideBar}
            closeSideBar={this.closeSideBar}
            sideBar={this.state.sideBar} />
        </Route>
      </Router>

    );
  }
}
export default Pakal;


