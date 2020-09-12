import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import './Sites.css'
import { Row, Col, Container, CardGroup, CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Cards from './Cards';
import Filters from '../../UI/Filters/Filters';


// import Image from '@bit/react-bootstrap.react-bootstrap.image';
import ToolBar from '../../Navigation/ToolBar/Toolbar';
import Modal from '../../Home/Modal/Modal';
import { datasites } from './datasites';
import bonim from '../../../images/bonim.jpg';
import sataf from '../../../images/sataf.jpg';
import talshahar from '../../../images/talshahar.jpg';
import tayasim from '../../../images/tayasim.jpg';
import motza from '../../../images/motza.jpg';
import artur3 from '../../../images/artur3.jpg';
import arugot from '../../../images/north/mitzpe_shaul.jpg';
import shaul from '../../../images/south/nahal_arugot2.jpg';
import dan from '../../../images/north/nahal_dan.jpg';
import ain_dayag from '../../../images/north/ain_dayag.jpg';
import helboni from '../../../images/north/brehat_helboni.jpg';
import hofhasharon from '../../../images/hof_hasharon.jpg';
import saar from '../../../images/north/saar.jpg';
import rosh_anikra from '../../../images/north/rosh_hanikra.jpg';
import yardenit from '../../../images/north/yardenit44.jpg';
import gilabon from '../../../images/north/gilabon.jpg';
import ahula from '../../../images/north/agamon_ahula.jpg';
import ain_shoko from '../../../images/north/ain_shoko.jpg';
import beeri from '../../../images/south/beeri.jpg';
import nahal_og from '../../../images/south/nahal_og.jpg';
import sidna_ali from '../../../images/sidna_ali.jpg';



const filters = [
  {name:"נגיש לנכים", status: false},
  {name:"מסלול הליכה", status: false},
  {name:"מקום שקט", status: false},
  {name:"מתאים למשפחות", status: false}
];

class Sites extends Component {
  state = {
    datasites, 
    filters,
    all: true,
    show: false,
    selectedSiteIndex: 2,
    fadeout: false
  }

  setFilter = (e) =>{
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;
   
    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });
    
    this.updateFilters();
    this.updateImgs();
  }
  
  setAll = () =>{
    const {filters} = this.state;
    
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
  
  updateFilters(){
    const allFiltersTrue = filters.every( filter => filter.status === true);
    const allFiltersFalse = filters.every( filter => filter.status === false);
    
    if(allFiltersTrue||allFiltersFalse){
      this.setAll();
    }else{
      this.setState({
        all: false
      });
    } 
  }
  
  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;
    
    datasites.forEach((img, imgKey) => { 
      filters.forEach((filter, filterKey)=> {  
        if((img.tag==filter.name)&&(filter.status==true)){
          newImgs[a] = img;
          a++;
        }
      })
    });
        
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
  showModal = () => {
    this.setState({ show: true })
  }


  showWalkingPath = () => {
    const walking = this.state.site1.walkingpath;
    if (walking) {
      return "walking";
    }
  }


  render() {

    const datasite = datasites;
    let white = this.state.fadeout ? 'animation: fadeOut ease 8s' : 'opacity:1';
    const {filters, all} = this.state;  

    return (
      <div className="white">
        <div>
          <Modal show={this.state.show} modalClosed={this.CancelHandler}>
            <Row>
              <Col>
                <img style={{ width: '24rem', paddingTop: "15px" }}
                  src={dan} />
              </Col>
              <Col><h5>{datasites[this.state.selectedSiteIndex].name} </h5>
                <p>{datasites[this.state.selectedSiteIndex].description}</p>
                <p>איך מגיעים:
             {datasites[this.state.selectedSiteIndex].location}</p>
              </Col>
            </Row>
          </Modal>
        </div>

        <ToolBar />
        <div className="sites">
          <h2> המלצות באיזור המרכז</h2>
          <hr />
<Filters
onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters}/>


          <Container>
          {(all)?(
            <Cards imgs = {datasites}/>
          ):(
            <Cards imgs = {this.state.datasites}/>
        )}
          
          </Container>


          <Container>
            <CardDeck style={{ paddingBottom: '30px' }}>
              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={bonim}
                  onClick={() => { this.setState({ selectedSiteIndex: 0 }); this.showModal(); this.fadeout() }}
                  modalClosed={this.CancelHandler} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[0].name}</Card.Title>


                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>

                <Card.Img variant="top" src={sataf} onClick={() => { this.setState({ selectedSiteIndex: 1 }); this.showModal(); }} modalClosed={this.CancelHandler} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[1].name}</Card.Title>

                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={talshahar}
                  onClick={() => { this.setState({ selectedSiteIndex: 2 }); this.showModal(); }}
                  modalClosed={this.CancelHandler}
                />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[2].name}</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>


            <CardDeck style={{ paddingBottom: '30px' }} >

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={artur3}
                  onClick={() => { this.setState({ selectedSiteIndex: 3 }); this.showModal(); }}
                  modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[3].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={motza} onClick={() => { this.setState({ selectedSiteIndex: 4 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[4].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={tayasim} onClick={() => { this.setState({ selectedSiteIndex: 5 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[5].name}</Card.Title>
                </Card.Body>
              </Card>

            </CardDeck>

            <CardDeck style={{ paddingBottom: '30px' }}>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={arugot} onClick={() => { this.setState({ selectedSiteIndex: 6 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[6].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={shaul} onClick={() => { this.setState({ selectedSiteIndex: 7 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[7].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={dan} onClick={() => { this.setState({ selectedSiteIndex: 8 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[8].name}</Card.Title>
                </Card.Body>
              </Card>

            </CardDeck>
            <CardDeck style={{ paddingBottom: '30px' }}>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={ain_dayag} onClick={() => { this.setState({ selectedSiteIndex: 9 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[9].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={helboni} onClick={() => { this.setState({ selectedSiteIndex: 10 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[10].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={hofhasharon} onClick={() => { this.setState({ selectedSiteIndex: 11 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[11].name}</Card.Title>
                </Card.Body>
              </Card>

            </CardDeck>

            <CardDeck style={{ paddingBottom: '30px' }}>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={saar} onClick={() => { this.setState({ selectedSiteIndex: 12 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[12].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={rosh_anikra} onClick={() => { this.setState({ selectedSiteIndex: 13 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[13].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={yardenit} onClick={() => { this.setState({ selectedSiteIndex: 14 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[14].name}</Card.Title>
                </Card.Body>
              </Card>

            </CardDeck>
            <CardDeck style={{ paddingBottom: '30px' }}>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={gilabon} onClick={() => { this.setState({ selectedSiteIndex: 15 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[15].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={ahula} onClick={() => { this.setState({ selectedSiteIndex: 16 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[16].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={ain_shoko} onClick={() => { this.setState({ selectedSiteIndex: 17 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[17].name}</Card.Title>
                </Card.Body>
              </Card>

            </CardDeck>
            <CardDeck style={{ paddingBottom: '30px' }} >

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={beeri} onClick={() => { this.setState({ selectedSiteIndex: 18 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = { bonim }} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[18].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={nahal_og} onClick={() => { this.setState({ selectedSiteIndex: 19 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = bonim} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[19].name}</Card.Title>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
                <Card.Img variant="top" src={sidna_ali} onClick={() => { this.setState({ selectedSiteIndex: 20 }); this.showModal(); }} modalClosed={this.CancelHandler} onMouseOver={this.src = bonim} />
                <Card.Body dir="rtl">
                  <Card.Title>{datasites[20].name}</Card.Title>
                </Card.Body>
              </Card>

            </CardDeck>



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
// onMouseOver={e => (e.currentTarget.src ={sataf})}