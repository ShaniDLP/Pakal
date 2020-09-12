import React, { Component } from 'react';
// import '../Sites/node_modules/bootstrap/dist/css/bootstrap.css';
import { Form, Container, Col, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './Sendforma.css';
import shaul from '../../../images/south/nahal_arugot2.jpg';
import dan from '../../../images/north/nahal_dan.jpg'
// import ain_dayag from '../../../images/north/ain_dayag.jpg';
import helboni from '../../../images/north/brehat_helboni.jpg';
import hofhasharon from '../../../images/hof_hasharon.jpg';
import ahula from '../../../images/north/agamon_ahula.jpg';
import ain_shoko from '../../../images/north/ain_shoko.jpg';
import beeri from '../../../images/south/beeri.jpg';
import nahal_og from '../../../images/south/nahal_og.jpg';
// import { FirebaseDatabaseMutation } from "@react-firebase/database";
import axios from '../../../Containers/axios-sites';
import Card from "react-bootstrap/Card";
import Modal from '../../Home/Modal/Modal';
import { datasites } from '../Sites/datasites';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Filters from '../../UI/Filters/Filters';
const imgs = [{author:"The Lazy Artist Gallery", tag:"Food", src: dan},
              {author:"Daria Shevtsova", tag:"Food",  src:shaul},
              {author:"Kasuma", tag:"נגיש לנכים", src:helboni},
              {author:"Dominika Roseclay", tag:"Plants", src:hofhasharon},
              {author:"Scott Webb", tag:"Plants", src:ahula},
               {author:"Jeffrey Czum", tag:"People", tag:"נגיש לנכים", src:ain_shoko},
              {author:"Dominika Roseclay", tag:"נגיש לנכים", src:beeri},
              {author:"Valeria Boltneva", tag:"Animals", src:nahal_og}
];

const filters = [
  {name:"נגיש לנכים", status: false},
  {name:"מסלול הליכה", status: false},
  {name:"מקום שקט", status: false},
  {name:"מתאים למשפחות", status: false}
];



 




const Cards = ({imgs}) =>
  <ul>
    {imgs.map(
      (img, i)=>
      <li  key={i}>
        <figure>
        <Card style={{ width: '18rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer" }}>
        <Card.Img variant="top" src={img.src}
          onClick={() => { this.setState({ selectedSiteIndex: 0 }) }}/>
        <Card.Body dir="rtl">
          <Card.Title>{img.author}</Card.Title>
        </Card.Body>
      </Card>
     
        </figure>
      </li>)}
  </ul>

export default class Appp extends React.Component{
  state ={
    imgs, 
    filters,
    all: true,
    show: false,
    selectedSiteIndex: 0,
    fadeout: false
  };

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
    
    imgs.forEach((img, imgKey) => { 
      filters.forEach((filter, filterKey)=> {  
        if((img.tag==filter.name)&&(filter.status==true)){
          newImgs[a] = img;
          a++;
        }
      })
    });
        
  this.setState({
      imgs: newImgs
    });
  }
  CancelHandler = () => {
    this.setState({ show: false })
  }
  showModal = () => {
    this.setState({ show: true })
  }
  render(){
    const datasite = datasites;
    const {filters, all} = this.state;  
    return(
     
        <div>
      
        <Filters 
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all)?(
            <Cards imgs = {imgs}/>
          ):(
            <Cards imgs = {this.state.imgs}/>
        )}
       
      </div>
 
    );
  }
}







   //   <img src={img.src} alt={img.author}/>
        //   <figcaption> 
        //     <div>{img.author} </div>
        //     <span>{img.tag}</span>
        //   </figcaption>




































































// class Sendform extends Component {
//     state = {
//         sites: {
//             name: {
//                 elementType: 'input',
//                 elemetConfig: {
//                     type: 'text',
//                     placeholder: 'שם הממליץ'
//                 },
//                 value: ''
//             },
//             email: {
//                 elementType: 'input',
//                 elemetConfig: {
//                     type: 'email',
//                     placeholder: 'דואר אלקטרוני'
//                 },
//                 value: ''
//             },
//             sitename: 'tatzpit',
//             location: ''
//         }

//     }

//     // מעביר את המידע לדאטה בייס בצורה דינמית
//     componentDidMount() {
//         axios.get('https://pakal-4a6e5.firebaseio.com/sites.json')
//             .then(response => {
//                 this.setState({ sites: response.data });
//             })
//             .catch(error => {
//                 this.setState({ error: true })

//             });
//     }


//     //לוגיקה של מה שקורה שלחוץ על כפתור contunie בהזמנה 
//     ContinueHandler = (event) => {
//         event.preventDefault();
//         this.setState({ loading: true });
//         const formData = {};
//         for (let formElementIdentifier in this.state.sites) {
//             formData[formElementIdentifier] = this.state.sites[formElementIdentifier].value;
//         }
//         //formData[formElementIdentifier] = name, email... 
//         const sites = {
//             recommendationData: formData
//             // sites:this.state.sites,
//             // site:{
//             //     name:'shani',
//             //     email:'shani@test.com',
//             //     sitename: 'tatzpit',
//             //     location: ''
//             // }
//         }

//         // כאשר נשלחת הבקשה מכבה ספינר ומודל
//         axios.post('/sites.json', sites)
//             .then(response => {
//                 this.setState({ loading: false });
//                 this.props.history.push('/');
//             }

//             )
//             .catch(error => console.log(error));


//         inputChangeHandler = (event, inputIdentifier) => {
//             const updateForm





//         }





//         // this.setState({loading: false, purchasing:false});
//         // }) 
//         // .catch(error => {
//         // this.setState({loading: false, purchasing:false});
//         // });

//     }



//     render() {
//         const formElementArray = [];
//         for (let key in this.state.sites) {
//             formElementArray.push({
//                 id: key
//             })
//         }

//         return (


//             <div className="sendform">

//                 <ul>
//                     <li> <Link to="/sites">מרכז</Link></li>
//                     <li> <Link to="#">דרום</Link></li>
//                     <li> <Link to="#">צפון</Link></li>
//                     <li> <Link to="/info">?הידעת</Link></li>
//                     <li> <Link to="/sendform">שלח לנו המלצה</Link></li>
//                 </ul>

//                 <div className="form" dir="rtl">
//                     <h2>שלח לנו המלצה </h2>

//                     <hr />
//                     <p> מכיר מקום מיוחד שאף אחד עוד לא שמע עליו? שתף אותנו
// </p>
//                     <div className="containerimage">
//                         <Container>


//                             <br />
//                             <Form >
//                                 <Row className="rowform">
//                                     <Form.Group as={Row} controlId="formGridState">
//                                         <Form.Label column sm={2}>
//                                         </Form.Label>
//                                         <Col sm={10} xs={12}>
//                                             <Form.Control placeholder="שם הממליץ" dir="rtl" />
//                                         </Col>
//                                     </Form.Group>

//                                     <Form.Group as={Row} controlId="formGridState">
//                                         <Form.Label column sm={2}>
//                                         </Form.Label>
//                                         <Col sm={10} xs={12}>
//                                             <Form.Control type="email" placeholder="דואר אלקטרוני" dir="rtl" />
//                                         </Col>
//                                     </Form.Group>
//                                 </Row>
//                                 <Row className="rowform">
//                                     <Form.Group as={Row} controlId="formGridState">
//                                         <Form.Label column sm={2}>
//                                         </Form.Label>
//                                         <Col sm={10} xs={12}>
//                                             <Form.Control placeholder="שם האתר" dir="rtl" />
//                                         </Col>
//                                     </Form.Group>

//                                     <Form.Group as={Row} controlId="formGridState">
//                                         <Form.Label column sm={2}>
//                                         </Form.Label>
//                                         <Col sm={10} xs={12}>
//                                             <Form.Control placeholder="תאר את המקום" dir="rtl" />
//                                         </Col>
//                                     </Form.Group>
//                                 </Row>
//                                 <Row className="rowform">
//                                     <Form.Group as={Row} controlId="formGridState">
//                                         <Form.Label column sm={2}>

//                                         </Form.Label>
//                                         <Col sm={10} xs={12}>
//                                             <Form.Control placeholder="איך מגיעים?" dir="rtl" />
//                                         </Col>
//                                     </Form.Group>
//                                 </Row>
//                                 <div className="area">
//                                     <Form.Group controlId="formGridState" >
//                                         <Col sm={8} xs={10} lg={5} >
//                                             <Form.Control as="select" defaultValue="Choose..." dir="rtl"  >
//                                                 <option>מרכז</option>
//                                                 <option>צפון</option>
//                                                 <option>דרום</option>

//                                             </Form.Control>
//                                         </Col>
//                                     </Form.Group>
//                                 </div>




//                                 {['checkbox'].map((type) => (
//                                     <div key={`inline-${type}`} className="mb-3 checkbox">
//                                         <Form.Check inline label="מסלול הליכה" type={type} id={`inline-${type}-1`} />
//                                         <Form.Check inline label="גישה לנכים/עגלות" type={type} id={`inline-${type}-2`} />
//                                         <Form.Check inline label="מקום שקט" type={type} id={`inline-${type}-2`} />
//                                         <Form.Check inline label="מתאים למשפחות" type={type} id={`inline-${type}-2`} />

//                                     </div>
//                                 ))}
//                                 <div className="addphoto">
//                                     <Form.Group as={Row} controlId="formGridState">
//                                         <Col sm={10} xs={10} lg={5} >
//                                             <Form.File id="custom-file-translate-scss" label="צרף קובץ" lang="en" custom dir="rtl" data-browse="הוסף תמונה" />
//                                         </Col>
//                                     </Form.Group>
//                                 </div>

//                                 <div >
//                                     <Form.Group as={Row} controlId="formGridState">
//                                         <Button variant="info" type="submit" dir="rtl" className="formbutton" onClick={this.ContinueHandler}>
//                                             שלח המלצה
//         </Button>
//                                     </Form.Group>
//                                 </div>
//                             </Form>



//                         </Container>
//                     </div>

//                 </div>


//             </div>

//         )
//     }
// }

// export default Sendform;

// //   <Form.Group id="formGridCheckbox">
// // <Form.Check inline type="checkbox" label="מילה" />
// // </Form.Group>
// // <Form.Group id="formGridCheckbox">
// //     <Form.Check inline type="checkbox" label="Check me out" />
// // </Form.Group>
// // <Form.Group id="formGridCheckbox">
// //     <Form.Check  inline type="checkbox" label="Check me out" />
// // </Form.Group>
// // <Form.Group id="formGridCheckbox">
// //     <Form.Check  inline type="checkbox" label="Check me out" />
// // </Form.Group>


// // componentDidMount() {
// //     axios.get('https://pakal-4a6e5.firebaseio.com/sites.json')
// //             .then(response =>{
// //                 this.setState({ingredients: response.data});
// //             } )
// //             .catch(error=>{
// //             this.setState({error: true})

// //             });

// //      }


// // sendbuttonhandler=()=> {

// //    axios.post('/orders.json', order)
//         .then(response=> {
//         this.setState({loading: false, purchasing:false});
//         }) 
//         .catch(error => {
//         this.setState({loading: false, purchasing:false});  
// }


