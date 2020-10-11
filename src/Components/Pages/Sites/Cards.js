import React from 'react';
import { datasites } from './datasites';
import { Row, Col, Container, CardGroup, CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './Sites.css';


const Cards = ({ imgs, onClick, id }) =>
  <ul>
    {imgs.map(
      (img, i) =>
        <li key={i} data-id={img.id} onClick={onClick}>
          <figure>
            <CardDeck >
              <Card style={{ width: '20rem', boxShadow: '0 0 0.7142857142857143rem #cccccc', cursor: "pointer", marginBottom: '20px' }}>
                <Card.Img variant="top" src={img.src} />
                <Card.Body dir="rtl">
                <Card.Title>{img.name}</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </figure>
        </li>)}
  </ul>





export default Cards;