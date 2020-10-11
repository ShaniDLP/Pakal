import React, { Component } from 'react';
import Layout from '../src/Components/Layout/Layout';
// import Home from './Components/Home/Home';
import Landing from './Components/Pages/Landing/Landing';
import Sites from './Components/Pages/Sites/Sites';
import Sendform from './Components/Pages/Sendform/Sendform';
import Info from './Components/Pages/Info/Info';
import Sitesw from './Components/Pages/Sites/sitesw';
import Weather from './Containers/practiceserver';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
   Route
 } from "react-router-dom";

class App extends Component {
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
export default App;


