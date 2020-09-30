import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Sites.css'
import { Row, Col, Container, CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Cards from './Cards';
import Filters from '../../UI/Filters/Filters';
import ToolBar from '../../Navigation/ToolBar/Toolbar';
import Modal from '../../Home/Modal/Modal';
import { datasites } from './datasites';
import dan from '../../../images/north/nahal_dan.jpg';
import { withRouter } from 'react-router-dom'



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
    filterArray: []

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



  fadeout = () => {
    this.setState({ fadeout: true });

  }

  CancelHandler = () => {
    this.setState({ show: false })
  }
  showModal = (site) => {
    site.preventDefault();
    this.setState({ show: true })
    console.log('show modal!');

    let areaIndex = site.currentTarget.dataset.id;
    // let show = this.state.show;
    let selectedSiteIndex = this.state.selectedSiteIndex;
    this.setState({
      selectedSiteIndex: areaIndex
    })

    console.log(selectedSiteIndex + 'selectedSiteIndex' + site.id + 'siteid');
  };

  setArea = (area) => {
    this.setState({ selectedArea: area });
  };

  // filtersites = () => {
  //   if (this.state.filterArray.length === 0)
  //     return datasites;
  //   else {
  //     return datasites.filter(site => site.area === areaName).filter(site => this.state.filterArray.some(constraint =>
  //       site.some(obj => obj.tag === constraint)))
  //   }

  // };

  hendleCheck = (event) => {
    let newFilteredTag = this.state.filterArray;
    if (event.target.checked) {
      newFilteredTag.push(event.target.tag);
      this.setFilter(newFilteredTag);
    }
    else {
      newFilteredTag.splice(newFilteredTag.indexOf(event.target.tag), 1);
      this.setState(newFilteredTag);
    }
  }
  isChacked = () => {
    return (this.state.filterArray.indexOf() >= 0)
  }
  render() {

    const datasite = datasites;
    let white = this.state.fadeout ? 'animation: fadeOut ease 8s' : 'opacity:1';
    const { filters, all } = this.state;
    // const areas = this.state;
    const areaName = this.props.match.params.areaName;
    const filtertype = newfilter;

    return (
      <div className="sitespage">
        <ToolBar />
        <div className="sites">
          <h2> המלצות באיזור ה{this.state.selectedArea}</h2>
          <hr />
          <Filters
            onClickAll={this.setAll}
            all={this.hendleCheck}
            onClick={this.setFilter}
            modalClosed={this.CancelHandler}
            filters={filters}
            checked={this.isChacked} />


          <Container>
          {(all) ? (
            <Cards imgs={datasites && datasites.filter(site => site.area === areaName)} onClick={this.showModal} />
          ) : (
             <Cards imgs={ datasites.filter(site => site.area === areaName) && this.state.datasites} onClick={this.showModal} />
            )}

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


