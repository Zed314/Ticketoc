import React, { Component } from 'react';
import {
  Card,
} from "tabler-react";

class PromoCard extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Card>
        <img className="card-img-top" src={this.props.imgSrc} alt={this.props.imgAlt} />
        <Card.Body className="d-flex flex-column">
          <h4>
            {this.props.title}
          </h4>
          <div className="text-muted">{this.props.description}</div>
        </Card.Body>
      </Card>
      );
  }
}

export default PromoCard;