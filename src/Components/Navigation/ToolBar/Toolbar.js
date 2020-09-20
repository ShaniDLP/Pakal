import React from 'react';
import '../ToolBar/Toolbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const toolbar = ({ onClick, areaname, areaKey }) => (
  <div>
    <header className="Toolbar">


      <ul>
        <li> <Link to="/sites" areaname="north" data-areaKey={0} onClick={onClick}>צפון</Link></li>
        <li> <Link to="/sites" areaname="center" data-areaKey={1} onClick={onClick}>מרכז</Link></li>
        <li> <Link to="/sites" areaname="south" data-areaKey={2} onClick={onClick}>דרום</Link></li>
        <li> <Link to="/info">?הידעת</Link></li>
        <li> <Link to="/sendform">שלח לנו המלצה</Link></li>
      </ul>

      <h1>פקל קפה</h1>



    </header>
  </div>
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



      // {areas.map(
      //   (area, k) =>
      //   <li key={k} data-index={k} onClick={onClick}>
      //      <Link to="/sites" id={area.name} checked={area.status}/>
      //     </li>
      //     )}