import React from 'react';
import './Landing.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const landing = (props) => (
<div>
    <div className= "bodyy">
    </div>
<Container>   
    <div id="containerr">
        <h3> פק"ל קפה</h3>
       
                <ul>
                    <li> <Link to="/sites">מרכז</Link></li>
                    <li> <Link to="#">דרום</Link></li>
                    <li> <Link to="#">צפון</Link></li>
                    <li> <Link to="/info">?הידעת</Link></li>
                    <li> <Link to="/sendform">שלח לנו המלצה</Link></li>
                </ul>

            <p>מצא את המקום המושלם עבורך <br/>
            לשבת, להרגע ולהנות מהנוף</p>
            <Link to="/sites">
            <button type="button" class="btn btn-light">התחל</button>
            </Link>
        </div>
</Container>
</div>
    
)

export default landing;

// <ul>
// <li> <Link to="/">צפון</Link></li>
// <li> <Link to="#">דרום</Link></li>
// <li> <Link to="#">מרכז</Link></li>
// <li> <Link to="/info">?הידעת</Link></li>
// <li> <Link to="/sendform">שלח לנו המלצה</Link></li>
// </ul>



// <Nav className="justify-content-end" activeKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>