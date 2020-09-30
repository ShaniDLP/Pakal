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


// <Layout></Layout>
// <Landing/>


// <Layout/>
// <Home/>
// <Landing/>
    //  
    // <Landing/>


    // <Router>
    // <Route path="/" exact >
    //   <Landing/>
    // </Route>
    // <div className="mainbody">
    //   <Route path="/sites" >
    //       <Sites/>
    //   </Route>
    //   <Route path="/sendform">
    //       <Sendform/>
    //   </Route>
    //   <Route path="/info">
    //     <Info/>
    //   </Route>   
    //   <Route path="/info">
    //   <Info/>
    // </Route>  
















// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
