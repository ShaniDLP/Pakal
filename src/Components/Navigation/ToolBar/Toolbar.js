import React from 'react';
import '../ToolBar/Toolbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import 'w3-css/w3.css';
import Navigation from './Navigation';
import Sidebar from './SideBar';
import Logo from '../../UI/Logo/Logo';

const toolbar = ({ onClick, areaname, areaKey }) => (
  <div>
    <header className="Toolbar">

   <Navigation/>
   
 
  
      <h1>פקל קפה</h1>
    </header>
  </div>
);

export default toolbar;

// כרגע אין שימוש בתיקיית של navigation

// <ul> 
// <li> <Link to="/area=north" areaname="north" data-areaKey={0} >צפון</Link></li>
// <li> <Link to="/area=center" areaname="center" data-areaKey={1} >מרכז</Link></li>
// <li> <Link to="/area=south" areaname="south" data-areaKey={2}>דרום</Link></li>
// <li> <Link to="/info">?הידעת</Link></li>
// <li> <Link to="/sendform">שלח לנו המלצה</Link></li>
// </ul>
 