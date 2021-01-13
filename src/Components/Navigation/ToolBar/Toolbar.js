import React from 'react';
import './Toolbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
// import Sidebar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';


const toolbar = (props) => (

  <div>
  <header className="Toolbar">
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
// const {sidebar} = this.props; 
// const mapStateToProps = (state) => {
//   return{
//       sidebar: state.sidebar
//   }
// }

export default  toolbar;
// connect(mapStateToProps)
