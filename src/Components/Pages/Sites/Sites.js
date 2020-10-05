import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Sites.css'
import { Row, Col, Container } from "react-bootstrap";
import Cards from './Cards';
// import Filters from '../../UI/Filters/Filters';
import ToolBar from '../../Navigation/ToolBar/Toolbar';
import Modal from '../../Home/Modal/Modal';
import { datasites } from './datasites';
import { withRouter } from 'react-router-dom';
import { clone } from 'clone';

const filters = [
  { name: "נגיש לנכים", value: 1, status: false },
  { name: "מסלול הליכה", value: 2, status: false },
  { name: "מקום שקט", value: 3, status: false },
  { name: "מתאים למשפחות", value: 4, status: false }
];
const areas = [
  { name: "north", status: false },
  { name: "center", status: false },
  { name: "south", status: false }
];



class Sites extends Component {
  state = {
    datasites,
    areas,
    filters,
    all: true,
    show: false,
    selectedSiteIndex: 0,
    fadeout: false,
    areaIndex: 0,
    filterArray: [],
    lastArea: ""

  }

  CancelHandler = () => {
    this.setState({ show: false })
  }
  showModal = (site) => {
    site.preventDefault();
    this.setState({ show: true })
    let areaIndex = site.currentTarget.dataset.id;
    console.log(site.currentTarget);
    console.log(datasites);
    this.setState({
      selectedSiteIndex: areaIndex
    })
  };

  setArea = (area) => {
    let selectesAreaName = "מרכז";
    if (area === "north") {
      selectesAreaName = "צפון"
    }
    else if (area === "south") {
      selectesAreaName = "דרום"
    }
    else if (area === "center") {
      selectesAreaName = "מרכז"
    }
    return selectesAreaName;
  };
  filtersites = () => {
    let areaName = this.props.match.params.areaName;
    let filterDataSites = datasites;

    if (areaName) {
      filterDataSites = filterDataSites.filter(site => site.area === areaName)
    }
    
    if(this.state.lastArea != areaName) {
      this.setState({lastArea: areaName, filterArray: []});
    
    }
    if (this.state.filterArray.length !== 0) {
      filterDataSites = filterDataSites.filter(site => site.tags && site.tags.some(tag => this.state.filterArray.indexOf(tag) >= 0));
    }
    return filterDataSites;
  };

  isChecked = (name) => {
    let res = this.state.filterArray.indexOf(name) >= 0;
    return res;
  }

  hendleCheck = (event) => {
    let newFilteredTag = this.state.filterArray;
    if (event.target.checked && newFilteredTag.indexOf(event.target.name) < 0) {
      newFilteredTag.push(event.target.name);
    }
    else {
      newFilteredTag.splice(newFilteredTag.indexOf(event.target.name), 1);
    }
    console.log(newFilteredTag);
    this.setState(newFilteredTag);
  }
  render() {

    const datasite = datasites;
    const selectedArea = this.props.match.params.areaName;


    return (
      <div className="sitespage">
        <ToolBar />
        <div className="sites">

          <h2> המלצות באיזור ה{this.setArea(selectedArea)}</h2>
          <hr />
          <ul >
            <li>
            <input
              id="quiteplace" name="מקום שקט"
              type="checkbox"
              checked={this.isChecked("מקום שקט")}
              onChange={this.hendleCheck}
              />
              <label for="quiteplace">מקום שקט</label>
              </li>
              <li>
              <input
              id="families" name="מתאים למשפחות"
              type="checkbox"
              checked={this.isChecked("מתאים למשפחות")}
              onChange={this.hendleCheck}
              />
              <label for="families">משפחות</label>
              </li>
              <li>
              <input
              id="walking" name="מסלול הליכה"
              type="checkbox"
              checked={this.isChecked("מסלול הליכה")}
              onChange={this.hendleCheck}
              />
              <label for="walking">מסלול הליכה</label>
              </li>
              <li>
              <input
              id="disabilites" name="נגיש לנכים"
              type="checkbox"
              checked={this.isChecked("נגיש לנכים")}
              onChange={this.hendleCheck}
            />
            <label for="disabilites">נגיש לנכים</label>
            </li>
          </ul>


          <Container>
            <Cards imgs={this.filtersites()} onClick={this.showModal} />
          </Container>
        </div>

        <div>
          <Modal show={this.state.show} modalClosed={this.CancelHandler}>
            <Row>
              <Col>
                <h5>{datasites[this.state.selectedSiteIndex].name} </h5>
                <img style={{ width: '15rem', paddingTop: "6px", paddingRight: "20px", float: "left" }}
                  src={datasites[this.state.selectedSiteIndex].src} />

                <p>{datasites[this.state.selectedSiteIndex].description}</p>
                <p>איך מגיעים:{datasites[this.state.selectedSiteIndex].location}</p>
              </Col>
            </Row>
          </Modal>
        </div>
      </div>




    );

  }
}



export default withRouter(Sites);


// <Filters
// onClickAll={this.setAll}
// all={this.hendleCheck}
// onClick={this.filtersites}
// modalClosed={this.CancelHandler}
// filters={filters}
// checked={this.isChacked} />

// {(all) ? (
//   <Cards imgs={datasites && datasites.filter(site => site.area === areaName)} onClick={this.showModal} />
// ) : (
//    <Cards imgs={ datasites.filter(site => site.area === areaName) && this.state.datasites} onClick={this.showModal} />
//   )}

/* <Cards imgs={ this.state.datasites && datasites.filter(site => site.area === areaName)} onClick={this.showModal} /> */


// .filter(site => site.tag.some(obj => filtertype.indexOf(obj) >= 0) || filtertype.length = 0)}
// onClick={this.showModal


     // {(all) ? (
            //   <Cards imgs={datasites} onClick={this.showModal} />
            // ) : (
            //     <Cards imgs={this.state.datasites} onClick={this.showModal} />
            //   )}



// <datasite 
// // name = {datasite.name}
// // location = {datasite.location}
// // />

// <p> {this.state.site1.description}</p>
// <p>איך מגיעים: {this.state.site1.location}</p>

// {Object.keys(datasite).map((key,i) => (<li key={id}><span> key{key}</span></li>))
//             }

// {datasite.map(s => (<div>{s.location}</div>))}


