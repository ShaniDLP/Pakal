import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Container, Col, Button, Row } from "react-bootstrap";
import './Sendform.css';
// import { FirebaseDatabaseMutation } from "@react-firebase/database";
import axios from '../../../Containers/axios-sites';
import Navigation from '../../Navigation/ToolBar/Navigation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Thankyou from './ThankYou';



const formValid = ({ isError, ...rest }) => {
    let isValid = true;

    Object.values(isError).forEach(val => {
        if (val.length > 0){ 
        
            isValid = false
        }
    });

    Object.values(rest).forEach(val => {
        if (val == "") {
            console.log('זה ריק');
            isValid = false
        } 
    });

    return isValid;
};

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
);

class Sendform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            sitename: '',
            location: '',
            description: '',


            isError: {
                name: '',
                email: '',
                password: '',
                sitename: '',
                location: '',
                description: '',
            },
            area: 0,
            walking: false,
            quiteplace: false,
            families: false,
            accessibility: false,
            showmessage: false,
            validated: true

        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.ContinueHandler = this.ContinueHandler.bind(this);
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
    ContinueHandler(event) {


        axios.post('/sites.json', {
            name: this.state.name,
            email: this.state.email,
            sitename: this.state.sitename,
            description: this.state.description,
            location: this.state.location,
            area: this.state.area,
            walking: this.state.walking,
            quiteplace: this.state.quiteplace,
            families: this.state.families,
            accessibility: this.state.accessibility
        }
        )
            .then(response => console.log(response))
            .catch(error => console.log(error));

        event.preventDefault();
        console.log('the state updated with onChangeHandler ' + this.state)

        this.thankyoubutton(event);

    }

    onChangeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log('the state updated withonChangeHandler ' + this.state);
        

    }

    thankyoubutton(e) {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(this.state)
            console.log("Form is valid!");
            this.setState({ showmessage: true })  
        } else {
            console.log("Form is invalid!");
            alert('יש למלא את כל השדות כראוי');
        }

          };





    // onSubmit = e => {
    //     e.preventDefault();
    //     if (formValid(this.state)) {
    //         console.log(this.state)
    //         console.log("Form is valid!");  
    //     } else {
    //         console.log("Form is invalid!");
    //     }
    // };


    formValChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 2 ? "הכנס לפחות 2 תווים" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "כתובת מייל אינה חוקית";
                break;
            case "sitename":
                isError.sitename =
                    value.length < 4 ? "הכנס לפחות 4 תווים" : "";
                break;
            case "location":
                isError.location =
                    value.length < 4 ? "הכנס לפחות 4 תווים" : "";
                break;
            case "description":
                isError.description =
                    value.length < 6 ? "הכנס לפחות 6 תווים" : "";
                break;

            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
        this.onChangeHandler(e);
    };

    render() {
        const { name, email, sitename, location, description, area, walking, quiteplace, families, accessibility } = this.state;
        const { isError } = this.state;


        return (

            <div className="sendform">
                <Navigation />

                <div className="form" dir="rtl">
                    <h2>שלח לנו המלצה </h2>

                    <hr />
                    <p> מכיר מקום מיוחד שאף אחד עוד לא שמע עליו? שתף אותנו
            </p>
                    <div className="containerimage">
                        <Container>


                            <br />
                            <Form onSubmit={this.onSubmit} noValidate >
                                <div className="formdetails"
                                    style={{
                                        display: this.state.showmessage ? 'none' : 'block'
                                    }} >
                                    <Row className="rowform">
                                        <Form.Group as={Row} controlId="name">
                                            <Form.Label column sm={2}>
                                            </Form.Label>
                                            <Col sm={10} xs={12}>
                                                <Form.Control placeholder="שם הממליץ" dir="rtl"
                                                    value={name} onChange={(e) => this.formValChange(e)}
                                                    name="name"
                                                    className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                                                />
                                                {isError.name.length > 0 && (
                                                    <span className="invalid-feedback">{isError.name}</span>
                                                )}
                                            </Col>

                                        </Form.Group>

                                        <Form.Group as={Row} controlId="email" >
                                            <Form.Label column sm={2}>
                                            </Form.Label>
                                            <Col sm={10} xs={12}>
                                                <Form.Control type="email" placeholder="דואר אלקטרוני" dir="rtl"
                                                    onChange={(e) => this.formValChange(e)} name="email" value={email}
                                                    className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"} />
                                                {isError.email.length > 0 && (
                                                    <span className="invalid-feedback">{isError.email}</span>
                                                )}
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    <Row className="rowform">
                                        <Form.Group as={Row} controlId="sitename" >
                                            <Form.Label column sm={2}>
                                            </Form.Label>
                                            <Col sm={10} xs={12}>
                                                <Form.Control placeholder="שם האתר" dir="rtl"
                                                    onChange={(e) => this.formValChange(e)} name="sitename" value={sitename}
                                                    className={isError.sitename.length > 0 ? "is-invalid form-control" : "form-control"} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="description">
                                            <Form.Label column sm={2}>
                                            </Form.Label>
                                            <Col sm={10} xs={12}>
                                                <Form.Control placeholder="תאר את המקום" dir="rtl"
                                                    onChange={(e) => this.formValChange(e)} name="description" value={description}
                                                    className={isError.description.length > 0 ? "is-invalid form-control" : "form-control"} />
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    <Row className="rowform">
                                        <Form.Group as={Row} controlId="location">
                                            <Form.Label column sm={2}>

                                            </Form.Label>
                                            <Col sm={10} xs={12}>
                                                <Form.Control placeholder="איך מגיעים?" dir="rtl"
                                                    onChange={(e) => this.formValChange(e)} name="location" value={location}
                                                    className={isError.location.length > 0 ? "is-invalid form-control" : "form-control"} />
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    <div className="area">
                                        <Form.Group controlId="area" >
                                            <Col sm={8} xs={10} lg={5} >
                                                <Form.Control as="select" defaultValue="Choose..." dir="rtl" required >
                                                    <option>מרכז</option>
                                                    <option>צפון</option>
                                                    <option>דרום</option>

                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                    </div>




                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3 checkbox allformtags">
                                            <Form.Check inline label="מסלול הליכה" type={type} id={`inline-${type}-1`} className="formtags" />
                                            <Form.Check inline label="גישה לנכים/עגלות" type={type} id={`inline-${type}-2`} className="formtags" />
                                            <Form.Check inline label="מקום שקט" type={type} id={`inline-${type}-2`} className="formtags" />
                                            <Form.Check inline label="מתאים למשפחות" type={type} id={`inline-${type}-2`} className="formtags" />

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
                                </div>
                                <Thankyou showmessage={this.state.showmessage} />
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


