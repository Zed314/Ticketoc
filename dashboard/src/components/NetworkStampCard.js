import React, { Component } from 'react';
import {
  StampCard,
  Dimmer,
} from "tabler-react";

class NetworkStampCard extends Component {
  
  render() {
    const content = <span>{this.props.count} <small>{this.props.label}</small></span>
    const headerWrap = this.props.href ? <a href={this.props.href}>{content}</a> : content
    return (
      <StampCard
        color={this.props.color}
        icon={this.props.icon}
        header={
          <Dimmer active={this.props.loading} loader={this.props.loading}>
          {headerWrap}
          </Dimmer>
        }/>
      );
  }
}

export default NetworkStampCard;