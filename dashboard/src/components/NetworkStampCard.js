import React, { Component } from 'react';
import {
  StampCard,
  Dimmer,
} from "tabler-react";

class NetworkStampCard extends Component {
  render() {
    return (
      <StampCard
        color={this.props.color}
        icon={this.props.icon}
        header={
          <Dimmer active={this.props.loading} loader={this.props.loading}>{this.props.header}</Dimmer>
        }/>
      );
  }
}

export default NetworkStampCard;