import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/ToolBar/Toolbar';
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerclosedhndler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    )
  }

}

export default Layout;


  /// לשימוש מאוחר יותר 
//  תפריט צידי למובייל 

// <SideDrawer 
// closed={this.sideDrawerclosedhndler}
// open={this.state.showSideDrawer} 
//  />

// <Toolbar show={this.ideDrawerclosedhndler} />