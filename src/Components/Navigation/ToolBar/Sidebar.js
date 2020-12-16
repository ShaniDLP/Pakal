import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './Sidebar.css';
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui';
import 'react-sidebar-ui/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheckSquare, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons';
// import 'https://unpkg.com/react-sidebar-ui@1.2.0/dist/index.css';
import Backdrop from '../../UI/Backdrop/BackDrop';

const sidebar = (props) => {
    return (
    <div>
    
    <Backdrop show ={!props.sideBar}
    clicked={props.closeSideBar}/>
    <div className="sideside">
    <Sidebar isCollapsed={props.sideBar}
           bgColor= 'black'>
   
     <div id="sideBarcontent">   
        <h3>פקל קפה</h3>
          
            <FontAwesomeIcon icon={faCoffee} />
           
  
            <Item bgColor='black' dir="rtl">
              <Icon> <FontAwesomeIcon icon={faCoffee} /></Icon>  
              <Link to="/area=north" areaname="north" onClick={props.closeSideBar}>צפון</Link>       
              
            </Item>
            <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/area=center" areaname="center" onClick={props.closeSideBar}>מרכז</Link>
             </Item>
            <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/area=south" areaname="south" onClick={props.closeSideBar}>דרום</Link>
            </Item>
              <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/info" onClick={props.closeSideBar}>?הידעת</Link>
              </Item>
            <Item bgColor='black'>
              <Icon><FontAwesomeIcon icon={faCoffee} /></Icon>
              <Link to="/sendform" onClick={props.closeSideBar}>שלח לנו המלצה</Link>
            </Item>
            
         
            </div> 
        </Sidebar>
      </div>
      </div>
    )
  };

  export default sidebar;

//   <FontAwesomeIcon icon="coffee" symbol />
//   <FontAwesomeIcon icon={['fas', 'coffee']} />
//    <FontAwesomeIcon icon={['far', 'coffee']} />
//    <FontAwesomeIcon icon={faCoffee} />

// <Logo/>

// <InputItem type='text' placeholder={'Search...'}/>
// <DropdownItem
// values={['First', 'Second', 'Third']}
// bgColor={'black'}>
// Menu
// </DropdownItem>