import React, { Component } from 'react';
// import Home from './Components/Home/Home';
import Landing from '../Pages/Landing/Landing'
import Sites from '../Pages/Sites/Sites';
import Sendform from '../Pages/Sendform/Sendform';
import Info from '../Pages/Info/Info';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";


class Pakal extends Component {

    state = {
        sideBar: true
    }
    //when user click on menu icon close/open side bar
  showSideBar = (e) =>{
    e.preventDefault();
    console.log('sidebar!!!');
    if(this.state.sidebar){
      this.setState({sideBar : false})
    }
    else {this.setState({sidebar : true})}
    console.log(this.state.sideBar);
  }
//close the sidebar when user click on backdrop
  closeSideBar = () => {
    console.log('backdrop clicked!');
    this.setState({ sideBar: true })
  }

    render() {
        return (
            <BrowserRouter>
                <Router>
                    <Route path="/" exact >
                        <Landing
                        showSideBar= {this.showSideBar}
                        closeSideBar= {this.closeSideBar}
                        sideBar= {this.state.sideBar} />
                    </Route>
                    <Route path="/area=:areaName" >
                        <Sites 
                            showSideBar= {this.showSideBar}
                            closeSideBar= {this.closeSideBar}
                            sideBar= {this.state.sideBar} />
                    </Route>
                    <Route path="/sendform">
                        <Sendform
                         showSideBar= {this.showSideBar}
                        closeSideBar= {this.closeSideBar}
                        sideBar= {this.state.sideBar} />
                    </Route>
                    <Route path="/info">
                        <Info 
                        showSideBar= {this.showSideBar}
                        closeSideBar= {this.closeSideBar}
                        sideBar= {this.state.sideBar}/>
                    </Route>
                </Router>
            </BrowserRouter>

        );
    }
}
export default Pakal;


