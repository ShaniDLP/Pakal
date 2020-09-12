import React from 'react';
import './Logo.css';
import logoo from './logo.png'

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
    <img src={logoo} alt="My burger" />
   </div>
);



export default logo;