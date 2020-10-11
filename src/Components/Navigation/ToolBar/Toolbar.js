import React from 'react';
import '../ToolBar/Toolbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import 'w3-css/w3.css';
import Navigation from './Navigation';
// import Sidebar from './SideBar';

const toolbar = ({ onClick, areaname, areaKey }) => (
  <div>
    <header className="Toolbar">
      <Navigation />
      <h1>פקל קפה</h1>
    </header>
  </div>
);

export default toolbar;

