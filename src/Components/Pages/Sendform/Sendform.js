import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Container, Col, Button, Row } from "react-bootstrap";
import './Sendform.css';
// import { FirebaseDatabaseMutation } from "@react-firebase/database";
import axios from '../../../Containers/axios-sites';
import ToolBar from '../../Navigation/ToolBar/Toolbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Sendform extends Component {
    constructor(props) {
        super(props);
    this.state = {
            name: '',
            email: '',
            sitename: '',
            location: '',
            description: '',
            area: 0,
            walking:false,
            quiteplace:false,
            families: false,
            accessibility:false

      
    }
    this.onChangeHandler=this.onChangeHandler.bind(this);
    this.ContinueHandler=this.ContinueHandler.bind(this);
    }
    // loading:true,
    // purchasing:true




// מעביר את המידע לדאטה בייס בצורה דינמית
componentDidMount() {
    axios.get('https://pakal-4a6e5.firebaseio.com/sites.json')
        .then(response => {
            this.setState({ sites: response.data });
        })
        .catch(error => {
            this.setState({ error: true })

        });
}

//לוגיקה של מה שקורה שלחוץ על כפתור contunie בהזמנה 
ContinueHandler(event){
    const sites = {
        site: {
            name: 'אין לי כוחות',
            email: 'די כבר',
            sitename: 'למה זה לא עובד?? ',
            location: ''
        }
    }
   

    axios.post('/sites.json', {
        name: this.state.name, 
        email:this.state.email,
        sitename:this.state.sitename,
        description:this.state.description,
        location:this.state.location,
        area:this.state.area,
        walking: this.state.walking,
        quiteplace:this.state.quiteplace,
        families:this.state.families,
        accessibility:this.state.accessibility}
        )
        .then(response => console.log(response))
        .catch(error => console.log(error));

        event.preventDefault();
        console.log('the state updated with onChangeHandler '+ this.state)
    // this.setState({loading: false, purchasing:false});
    // }) 
    // .catch(error => {
    // this.setState({loading: false, purchasing:false});
    // });
}
onChangeHandler(event){
    // console.log(event.target.value);
    this.setState({[event.target.name] : event.target.value});
   console.log('the state updated withonChangeHandler '+ this.state)
    
}
render() {
const {name, email, sitename, location, description, area, walking, quiteplace, families, accessibility} = this.state;
    return (

        <div className="sendform">
            <ul>
                <li> <Link to="/sites">מרכז</Link></li>
                <li> <Link to="#">דרום</Link></li>
                <li> <Link to="#">צפון</Link></li>
                <li> <Link to="/info">?הידעת</Link></li>
                <li> <Link to="/sendform">שלח לנו המלצה</Link></li>
            </ul>

            <div className="form" dir="rtl">
                <h2>שלח לנו המלצה </h2>

                <hr />
                <p> מכיר מקום מיוחד שאף אחד עוד לא שמע עליו? שתף אותנו
            </p>
                <div className="containerimage">
                    <Container>


                        <br />
                        <Form >
                            <Row className="rowform">
                                <Form.Group as={Row} controlId="name"  >
                                    <Form.Label column sm={2}>
                                    </Form.Label>
                                    <Col sm={10} xs={12}>
                                        <Form.Control placeholder="שם הממליץ" dir="rtl"
                                        value={name} onChange={this.onChangeHandler}
                                        name="name" 
                                         />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="email" >
                                    <Form.Label column sm={2}>
                                    </Form.Label>
                                    <Col sm={10} xs={12}>
                                        <Form.Control type="email" placeholder="דואר אלקטרוני" dir="rtl"
                                        onChange={this.onChangeHandler} name="email" value={email} />
                                    </Col>
                                </Form.Group>
                            </Row>
                            <Row className="rowform">
                                <Form.Group as={Row} controlId="sitename" >
                                    <Form.Label column sm={2}>
                                    </Form.Label>
                                    <Col sm={10} xs={12}>
                                        <Form.Control placeholder="שם האתר" dir="rtl"
                                        onChange={this.onChangeHandler} name="sitename" value={sitename} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="description">
                                    <Form.Label column sm={2}>
                                    </Form.Label>
                                    <Col sm={10} xs={12}>
                                        <Form.Control placeholder="תאר את המקום" dir="rtl" />
                                    </Col>
                                </Form.Group>
                            </Row>
                            <Row className="rowform">
                                <Form.Group as={Row} controlId="location">
                                    <Form.Label column sm={2}>

                                    </Form.Label>
                                    <Col sm={10} xs={12}>
                                        <Form.Control placeholder="איך מגיעים?" dir="rtl" />
                                    </Col>
                                </Form.Group>
                            </Row>
                            <div className="area">
                                <Form.Group controlId="area" >
                                    <Col sm={8} xs={10} lg={5} >
                                        <Form.Control as="select" defaultValue="Choose..." dir="rtl"  >
                                            <option>מרכז</option>
                                            <option>צפון</option>
                                            <option>דרום</option>

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </div>




                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3 checkbox">
                                    <Form.Check inline label="מסלול הליכה" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="גישה לנכים/עגלות" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="מקום שקט" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="מתאים למשפחות" type={type} id={`inline-${type}-2`} />

                                </div>
                            ))}
                            <div className="addphoto">
                                <Form.Group as={Row} controlId="photo">
                                    <Col sm={10} xs={10} lg={5} >
                                        <Form.File id="custom-file-translate-scss" label="צרף קובץ" lang="en" custom dir="rtl" data-browse="הוסף תמונה" />
                                    </Col>
                                </Form.Group>
                            </div>

                            <div >
                                <Form.Group as={Row} controlId="submit">
                                    <Button variant="info" type="submit" dir="rtl" className="formbutton" onClick={this.ContinueHandler}>
                                        שלח המלצה
        </Button>
                                </Form.Group>
                            </div>
                        </Form>

                    </Container>
                </div>

            </div>


        </div>

    )
}
    }

export default Sendform;

//   <Form.Group id="formGridCheckbox">
// <Form.Check inline type="checkbox" label="מילה" />
// </Form.Group>
// <Form.Group id="formGridCheckbox">
//     <Form.Check inline type="checkbox" label="Check me out" />
// </Form.Group>
// <Form.Group id="formGridCheckbox">
//     <Form.Check  inline type="checkbox" label="Check me out" />
// </Form.Group>
// <Form.Group id="formGridCheckbox">
//     <Form.Check  inline type="checkbox" label="Check me out" />
// </Form.Group>


// componentDidMount() {
//     axios.get('https://pakal-4a6e5.firebaseio.com/sites.json')
//             .then(response =>{
//                 this.setState({ingredients: response.data});
//             } )
//             .catch(error=>{
//             this.setState({error: true})

//             });

//      }


// sendbuttonhandler=()=> {

//    axios.post('/orders.json', order)
//         .then(response=> {
//         this.setState({loading: false, purchasing:false});
//         }) 
//         .catch(error => {
//         this.setState({loading: false, purchasing:false});  
// }


