import React, { Component } from 'react';
import {
  Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'

class Cats extends Component {
  render() {
    return (
      <Row>
      <Col xs={12}>
              <ListGroup>
              {this.props.cats.map((cats, index) =>{
                return (
                  <ListGroupItem
                    key={index}>   
                      <h4>
                        <span className='cat-name'>
                          {cats.name}
                        </span>
                        - <small className='cat-age'>{cats.age} years old</small>
                      </h4>
                    <span className='cat-enjoys'>
                      {cats.enjoys}
                    </span>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
    );
  }
}

export default Cats;