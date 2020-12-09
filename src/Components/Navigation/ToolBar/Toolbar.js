import React from 'react';
import '../ToolBar/Toolbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
// import Sidebar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';


const toolbar = (props) => (
  <div>
    <header className="Toolbar">
     <FontAwesomeIcon icon={faBars} id="menuicon" onClick={props.onClick}/>
     <Navigation />
     <Sidebar showsidebar={props.sidebar}
            close={props.close}/>
      <h1>פקל קפה</h1>
    </header>
    {props.children}
  </div>
);

export default toolbar;

