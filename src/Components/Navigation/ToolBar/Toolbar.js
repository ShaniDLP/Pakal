import React from 'react';
import '../ToolBar/Toolbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink,NavItem
  } from "react-router-dom";
  
const toolbar = (props) => (
<header className="Toolbar">

        <ul>
            <li> <Link to="/sites">מרכז</Link></li>
            <li> <Link to="/sites">דרום</Link></li>
            <li> <Link to="/sites">צפון</Link></li>
            <li> <Link to="/info">?הידעת</Link></li>
            <li> <Link to="/sendform">שלח לנו המלצה</Link></li>
        </ul>
        <h1>פקל קפה</h1>

      
    
</header>
);

export default toolbar;

// כרגע אין שימוש בתיקיית של navigation


 // <Logo height="80%"/>
    // <NavigationItems />    <nav className="Desktop">

       // <li> <a href="#">צפון</a></li>
        // <li> <a href="#">מרכז </a></li>
        // <li><a href="#">דרום </a></li>
        // <li><a href="#">?הידעת </a></li>
        // <li><a href="#">שלח לנו המלצה</a></li>
    
      //   <Nav className="justify-content-end" activeKey="/home">
      //   <Nav.Item>
      //     <Nav.Link href="#">Active</Nav.Link>
      //  </Nav.Item>
      //  <Nav.Item>
      //    <Nav.Link eventKey="#">Link</Nav.Link>
      //   </Nav.Item>
      //  <Nav.Item>
      //     <Nav.Link eventKey="#">Link</Nav.Link>
      //  </Nav.Item>
      //      </Nav>
      