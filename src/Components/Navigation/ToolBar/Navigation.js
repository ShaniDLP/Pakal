import React from 'react';
// import '../ToolBar/Toolbar.css';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import logoo from '../../../images/logo/menu2.png';

 const navigation = (props, onClick) => (
  <div className="navigation">
 
  <ul>
       <li className="navdesktop"> <Link to="/area=north" areaname="north">צפון</Link></li>
       <li className="navdesktop"> <Link to="/area=center" areaname="center">מרכז</Link></li>
       <li className="navdesktop"> <Link to="/area=south" areaname="south">דרום</Link></li>
       <li className="navdesktop"> <Link to="/info">?הידעת</Link></li>
       <li className="navdesktop"> <Link to="/sendform">שלח לנו המלצה</Link></li>
     </ul>
  </div>
)

export default navigation;
// <img src={logoo} alt="logo" id="coffeelogo" onClick={onClick} ></img>






  
//  <FontAwesomeIcon icon={faBars} id="btn" bgColor={'White'} />
//     <img src={logoo} alt="logo" id="coffeelogo"  ></img>