import React, { Component } from 'react';
// import Home from './Components/Home/Home';
import Landing from '../Pages/Landing/Landing'
import Sites from '../Pages/Sites/Sites';
import Sendform from '../Pages/Sendform/Sendform';
import Info from '../Pages/Info/Info';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
   Route
 } from "react-router-dom";


class Pakal extends Component {
  render() {
    return (

      <BrowserRouter>
<Router>
  <Route path="/" exact >
    <Landing />
  </Route>
  <Route path="/area=:areaName" >
    <Sites />
  </Route>
  <Route path="/sendform">
    <Sendform />
  </Route>
  <Route path="/info">
    <Info />
  </Route>
</Router>
</BrowserRouter>

    );
  }
}
export default Pakal;


