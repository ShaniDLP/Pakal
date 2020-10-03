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


const AREAS = ["north", "center", "south"];
const newfilter = ["מקום שקט", "מסלול הליכה", "מתאים למשפחות", "נגיש לנכים"];

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


  }

  // נקרא בלחיצה. 
  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    // const { areas } = this.state;
    const { index } = e.currentTarget.dataset;
    let areaIndex = parseInt(e.currentTarget.dataset.areakey);

    if (filters[index]) {
      filters[index].status = !filters[index].status;
    }

    console.log('areaKey: ' + areaIndex);

    this.setState({
      filters,
      areaIndex
    });


    this.updateFilters();
    this.updateImgs(areaIndex);
    // this.updateArea();
  }
  //make all filtes checkbox false except 'All'
  setAll = () => {
    const { filters } = this.state;

    filters.forEach(
      filter => {
        filter.status = false;
      }
    );

    this.setState({
      all: true,
      filters
    });
  }
  //if user selected the all filters it changes to 'all' button
  updateFilters() {
    const allFiltersTrue = filters.every(filter => filter.status === true);
    const allFiltersFalse = filters.every(filter => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false
      });
    }
  }

  //for each element that the tag=filterName push to the array
  updateImgs() {
    const { filters, all, areas } = this.state;
    let newImgs = [];
    let a = 0;

    datasites.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if ((img.tag === filter.name) && (filter.status == true)) {
          newImgs[a] = img;
          a++;
        }
      })
    });
    //update the datasites with the new array     
    this.setState({
      datasites: newImgs
    });
  }
  CancelHandler = () => {
    this.setState({ show: false })
  }
  showModal = (site) => {
    site.preventDefault();
    this.setState({ show: true })
   let areaIndex = site.currentTarget.dataset.id;
    // let show = this.state.show;
    let selectedSiteIndex = this.state.selectedSiteIndex;
    this.setState({
      selectedSiteIndex: areaIndex
    })
  console.log(selectedSiteIndex + 'selectedSiteIndex' + site.id + 'siteid');
  };

  setArea = (area) => {
    let selectesAreaName = "מרכז"
    if (area === "north"){
      selectesAreaName = "צפון"
    }
    else if(area === "south"){
      selectesAreaName = "דרום"
    }
    else if(area === "center"){
      selectesAreaName= "מרכז"
    }
    console.log(selectesAreaName +'selectesAreaName')
    return selectesAreaName;
  };
  filtersites = () => {
    let areaName = this.props.match.params.areaName;
    let filterDataSites = datasites;

    /*if(this.state.filterArray.indexOf(tag) >= 0) {
      console.log('remove');
     } else {
      console.log(this.state.filterArray);
     }*/

    if (areaName) {
      filterDataSites = filterDataSites.filter(site => site.area === areaName)
    }
        if (this.state.filterArray.length !== 0) {
            filterDataSites = filterDataSites.filter(site => site.tags && site.tags.some(tag => this.state.filterArray.indexOf(tag) >= 0));
        console.log(filterDataSites);

    }
    
    return filterDataSites;
  };

  isChecked = () => {
    console.log('isChecked');
    return (this.state.filterArray.indexOf() >= 0)
  }

  hendleCheck = (event) => {
    console.log('hendleCheck');
    console.log(event.target.checked);
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
    const { filters, all } = this.state;
    const selectedArea = this.props.match.params.areaName;
    const filtertype = newfilter;

    return (
      <div className="sitespage">
        <ToolBar/>
        <div className="sites">
        
          <h2> המלצות באיזור ה{this.setArea(selectedArea)}</h2>
          <hr />
          <ul>
            <li>
            <label>
              <input
                id="quiteplace" name="מקום שקט"
                type="checkbox"
                
                onChange={this.hendleCheck}
              />
              מקום שקט</label>
            </li>
            <li>
            <label>
              <input
                id="families" name="מתאים למשפחות"
                type="checkbox"
                checked={this.isChecked}
                onChange={this.hendleCheck}
              />
              משפחות</label>
            </li>
            <li>
            <label>
              <input
                id="walking" name="מסלול הליכה"
                type="checkbox"
                
                onChange={this.hendleCheck}
              />
              מסלול הליכה</label>
            </li>
            <li>
            <label>
              <input
                id="quiteplace" name="נגיש לנכים"
                type="checkbox"
                
                onChange={this.hendleCheck}
              />
              נגיש לנכים</label>
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
                <img style={{ width: '24rem', paddingTop: "15px" }}
                  src={datasites[this.state.selectedSiteIndex].src} />
              </Col>
              <Col><h5>{datasites[this.state.selectedSiteIndex].name} </h5>
                <p>{datasites[this.state.selectedSiteIndex].description}</p>
                <p>איך מגיעים:
              {datasites[this.state.selectedSiteIndex].location}</p>
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


