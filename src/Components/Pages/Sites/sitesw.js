// import React, { Component } from 'react';
// import Image from 'react-bootstrap/Image';
// import 'bootstrap/dist/css/bootstrap.css';
// import bonim from '../../../images/bonim.jpg';
// import './Sites.css'
// import Card from "react-bootstrap/Card";
// // import Image from '@bit/react-bootstrap.react-bootstrap.image';
// import ToolBar from '../../Navigation/ToolBar/Toolbar';
// import { Modal } from '@material-ui/core';




// class Sitesw extends Component{
//   constructor(){
//     super();
  
//  this.state={
//    show: true,
//    showModal: false,
   
//       };
//      this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//     }    

//     handleOpenModal () {
//       this.setState({ showModal: true });
//     }
    
//     handleCloseModal () {
//       this.setState({ showModal: false });
//     }
//       CancelHandler= ()=> {
//         this.setState({show:false})
//     }
  
    
//   render() {


//  return(
// <div>
// <div className="HomeI">
// <p> home.js</p>
//     <Modal show={this.state.show} modalClosed={this.CancelHandler}> 
//     <h5>{this.state.site1.name}</h5>
//     <p> תיאור קצר על המקום  {this.state.site1.description}</p>
//   <p>  הוראות הגעה</p>
//   <img style={{ width: '18rem' }} src={bonim} />
// </Modal>
// </div>

// <ToolBar/>
// <div>
// <button onClick={this.handleOpenModal}>Trigger Modal</button>
// <ReactModal 
//    isOpen={this.state.showModal}
//    contentLabel="Minimal Modal Example">
//   <button onClick={this.handleCloseModal}>Close Modal</button>
// </ReactModal>
// </div>

// <div className="sites"> 
// <h2> המלצות באיזור הצפון</h2> 
// <hr/>
//   <Container>
  
//   <CardDeck  >
//    <Card style={{ width: '18rem' }}>
//    <Card.Img variant="top" src={bonim}  />
//   <Card.Body dir="rtl">
//    <Card.Title>{this.state.site1.name}</Card.Title>
//   <button onClick={this.state.show} modalClosed={this.CancelHandler}>button</button>

//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={bonim} />
//       <Card.Body dir="rtl">
//       <Card.Title>{this.state.site2.name}</Card.Title>
      
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={bonim} />
//       <Card.Body dir="rtl">
//       <Card.Title>{this.state.site3.name}</Card.Title>
//      </Card.Body>
// </Card>
// </CardDeck>
  
//   <Row>
//         <Col s={6} lg={4}>
//         <Image src={bonim} thumbnail />
          
//         </Col>
      
      
//         <Col s={6} lg={4}>
//         <Image src={bonim} thumbnail />
//         </Col>


//       <Col s={6} lg={4}>
//       <Image src={bonim} thumbnail />
//       </Col>

//     </Row>
//     <Row>
//       <Col s={6} lg={4}>
//       <Image src={bonim} thumbnail />
//       </Col>


//       <Col s={6} lg={4}>
//       <Image src={bonim} thumbnail />
//       </Col>


//       <Col s={6} lg={4}>
//       <Image src={bonim} thumbnail />
//       </Col>
//     </Row>

//     <Row>
//       <Col s={6} lg={4}>
//       <Image src={bonim} thumbnail />
//       </Col>


//       <Col s={6} lg={4}>
//       <Image src={bonim} thumbnail />
//       </Col>


//       <Col s={6} lg={4}>
//       <Image src={bonim} thumbnail />
//       </Col>
//     </Row>

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={bonim} />
//   <Card.Body dir="rtl">
//     <Card.Title>חוף הבונים</Card.Title>
  
//   </Card.Body>
// </Card>
// <CardGroup>
//     <Card style={{ width: '18rem' }} className="bg-dark text-white" >
//       <Card.Img src={bonim} alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Title>חוף הבונים</Card.Title>
//         <Card.Text>
//           This is a wider card with supporting text below as a natural lead-in to
//           additional content. This content is a little bit longer.
//         </Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//     <Card style={{ width: '18rem' }} className="bg-dark text-white" >
//       <Card.Img src={bonim} alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Title>חוף הבונים</Card.Title>
//         <Card.Text>
//           This is a wider card with supporting text below as a natural lead-in to
//           additional content. This content is a little bit longer.
//         </Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//     <Card style={{ width: '18rem' }} className="bg-dark text-white" >
//       <Card.Img src={bonim} alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Title>חוף הבונים</Card.Title>
//         <Card.Text>
//           This is a wider card with supporting text below as a natural lead-in to
//           additional content. This content is a little bit longer.
//         </Card.Text>
//       </Card.ImgOverlay>
//     </Card>
// </CardGroup>
//   </Container>
// </div>

// // <div>
// // <Image src={bonim} style={{height: '200px'}} alt="bonim" />
// // </div>

// // <Card.Text>
// // Some quick example text to build on the card title and make up the bulk of
// // the card's content.
// // </Card.Text>

// </div>




//  );
 
//  }
// }



// export default Sitesw;
// //<h1> sites </h1>
// // <div class="row">
// // <div class="col-lg-4 col-sm-6 ">
// //  <div class="thumbnail">
// //    <img src=  />
// //  </div> 
// // </div> 
// // </div> 


// // <div>  
// // <Container>
// //   <Row>
// //     <Col xs={6} md={4}>
// //       <Image src={bonim} thumbnail />
// //     </Col>
// //   </Row>
// // </Container>
// // </div>
// // <img src={bonim} />

// // <div>
// // <Image src={bonim} style={{height: '200px'}} alt="bonim" />
// // </div>