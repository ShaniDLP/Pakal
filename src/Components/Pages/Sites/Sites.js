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
    filters,
    areas,
    all: true,
    show: false,
    selectedSiteIndex: 0,
    fadeout: false,
    areaIndex: 0
  }

  // נקרא בלחיצה. 
  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    // const { areas } = this.state;
    const { index, areaKey } = e.currentTarget.dataset;
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
  updateImgs(aIndex) {
    const { filters, all, areas } = this.state;
    let newImgs = [];
    let a = 0;

    datasites.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {

        // if(areas[aIndex]) console.log("** " + aIndex + ' - ' + areas[aIndex].name + ' - ' + img.area);
        // else console.log(aIndex);

        if ((filter.value in img.tag) &&
          (areas[aIndex] && img.area === areas[aIndex].name || !areas[aIndex]) &&
          (filter.status == true) &&
          newImgs.indexOf(img) < 0) {
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
    let selectedSiteIndex= this.state.selectedSiteIndex;
         this.setState({
          selectedSiteIndex: areaIndex
        })
    
    console.log(selectedSiteIndex+ 'selectedSiteIndex' + site.id + 'siteid');
  };



  render() {

    const datasite = datasites;
    let white = this.state.fadeout ? 'animation: fadeOut ease 8s' : 'opacity:1';
    const { filters, all } = this.state;
    // const areas = this.state;

    return (
      <div className="white">
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

        <ToolBar onClick={this.setFilter} />


        <div className="sites">
          <h2> המלצות באיזור המרכז</h2>
          <hr />
          <Filters
            onClickAll={this.setAll}
            all={all}
            onClick={this.setFilter}
            // onClick={() => { this.setFilter(); this.showModal(); }}
            modalClosed={this.CancelHandler}
            filters={filters} />


          <Container>
            {(all) ? (
              <Cards imgs={datasites} onClick={this.showModal} />
            ) : (
                <Cards imgs={this.state.datasites} onClick={this.showModal} />
              )}

          </Container>



        </div>

      </div>




    );

  }
}



export default Sites;







// <datasite 
// // name = {datasite.name}
// // location = {datasite.location}
// // />

// <p> {this.state.site1.description}</p>
// <p>איך מגיעים: {this.state.site1.location}</p>

// {Object.keys(datasite).map((key,i) => (<li key={id}><span> key{key}</span></li>))
//             }

// {datasite.map(s => (<div>{s.location}</div>))}



// כעושה אובר מחליף  את הרקע 
// onMouseOver={e => (e.currentTarget.src ={sataf})}   <Container>
        //     <CardDeck style={{ paddingBottom: '30px' }}>
        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={bonim}
        //         onClick={() => { this.setState({ selectedSiteIndex: 0 }); this.showModal(); this.fadeout(); }}
        //         modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[0].name}</Card.Title>


        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>

        //       <Card.Img variant="top" src={sataf} onClick={() => { this.setState({ selectedSiteIndex: 1 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[1].name}</Card.Title>

        //       </Card.Body>
        //     </Card>
        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={talshahar}
        //         onClick={() => { this.setState({ selectedSiteIndex: 2 }); this.showModal(); }}
        //         modalClosed={this.CancelHandler}
        //       />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[2].name}</Card.Title>
        //       </Card.Body>
        //     </Card>
        //   </CardDeck>


        //   <CardDeck style={{ paddingBottom: '30px' }} >

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={artur3}
        //         onClick={() => { this.setState({ selectedSiteIndex: 3 }); this.showModal(); }}
        //         modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[3].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={motza} onClick={() => { this.setState({ selectedSiteIndex: 4 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[4].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={tayasim} onClick={() => { this.setState({ selectedSiteIndex: 5 }); this.showModal(); }} modalClosed={this.CancelHandler}  />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[5].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //   </CardDeck>

        //   <CardDeck style={{ paddingBottom: '30px' }}>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={arugot} onClick={() => { this.setState({ selectedSiteIndex: 6 }); this.showModal(); }} modalClosed={this.CancelHandler}  />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[6].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={shaul} onClick={() => { this.setState({ selectedSiteIndex: 7 }); this.showModal(); }} modalClosed={this.CancelHandler}  />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[7].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={dan} onClick={() => { this.setState({ selectedSiteIndex: 8 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[8].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //   </CardDeck>
        //   <CardDeck style={{ paddingBottom: '30px' }}>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={ain_dayag} onClick={() => { this.setState({ selectedSiteIndex: 9 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[9].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={helboni} onClick={() => { this.setState({ selectedSiteIndex: 10 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[10].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={hofhasharon} onClick={() => { this.setState({ selectedSiteIndex: 11 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[11].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //   </CardDeck>

        //   <CardDeck style={{ paddingBottom: '30px' }}>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={saar} onClick={() => { this.setState({ selectedSiteIndex: 12 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[12].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={rosh_anikra} onClick={() => { this.setState({ selectedSiteIndex: 13 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[13].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={yardenit} onClick={() => { this.setState({ selectedSiteIndex: 14 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[14].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //   </CardDeck>
        //   <CardDeck style={{ paddingBottom: '30px' }}>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={gilabon} onClick={() => { this.setState({ selectedSiteIndex: 15 }); this.showModal(); }} modalClosed={this.CancelHandler}  />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[15].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={ahula} onClick={() => { this.setState({ selectedSiteIndex: 16 }); this.showModal(); }} modalClosed={this.CancelHandler}  />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[16].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={ain_shoko} onClick={() => { this.setState({ selectedSiteIndex: 17 }); this.showModal(); }} modalClosed={this.CancelHandler}  />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[17].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //   </CardDeck>
        //   <CardDeck style={{ paddingBottom: '30px' }} >

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={beeri} onClick={() => { this.setState({ selectedSiteIndex: 18 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[18].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={nahal_og} onClick={() => { this.setState({ selectedSiteIndex: 19 }); this.showModal(); }} modalClosed={this.CancelHandler} />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[19].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //     <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        //       <Card.Img variant="top" src={sidna_ali} onClick={() => { this.setState({ selectedSiteIndex: 20 }); this.showModal(); }} modalClosed={this.CancelHandler}  />
        //       <Card.Body dir="rtl">
        //         <Card.Title>{datasites[20].name}</Card.Title>
        //       </Card.Body>
        //     </Card>

        //   </CardDeck>



        // </Container>