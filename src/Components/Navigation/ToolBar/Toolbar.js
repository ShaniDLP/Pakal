import React from 'react';
import './Toolbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
// import Sidebar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import pakalLogo from '../../../images/logo/1.png';
import  {Link} from "react-router-dom";


const toolbar = (props) => (

  <div>
  <header className="Toolbar">
  <Link to="/"> <img src={pakalLogo} alt="pakallogo" /></Link>
  
     <FontAwesomeIcon icon={faBars} id="menuicon" onClick={props.onClick}/>
     <Navigation />
     <Sidebar 
              closeSideBar={props.closeSideBar}
              sideBar = {props.sideBar}/>
      <h1>פקל קפה</h1>
      
      
    </header>
    {props.children}
  </div>
);


export default  toolbar;
// connect(mapStateToProps)
