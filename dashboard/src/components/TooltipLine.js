import React, { Component } from 'react';
import {
  Icon
} from "tabler-react";

class TooltipLine extends Component {
  
  render() {
    return (
      <span title={this.props.tooltip} className={"tooltip-avl " + (this.props.className || "")}><Icon name="info" /> {this.props.children}</span>
      );
  }
}

export default TooltipLine;