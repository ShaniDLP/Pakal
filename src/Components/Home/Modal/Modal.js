import React from 'react';
import './Modal.css';
import Backdrop from '../../UI/Backdrop/BackDrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheckSquare, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Aux from '../../../hoc/Aux';

const modal= (props) => (
    <div>
    <Backdrop show ={props.show}
    clicked={props.modalClosed}/>
    <div className= "Modal"
    style= {{
        transform: props.show? 'translateY(0)': 'translateY(-100vh)',
        opacity: props.show? '1': '0'
    }}>
    <div id="closeModalButton" onClick={props.modalClosed}>
    <FontAwesomeIcon icon={faTimes}/>
    </div>
    {props.children}
    </div>
    </div>
);

export default modal;