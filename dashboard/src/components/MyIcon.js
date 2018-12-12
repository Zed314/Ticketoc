import React, { Component } from 'react';
import {
  Icon
} from "tabler-react";

class MyIcon extends Component {

  render() {
    if (this.props.name === "cb-dark" && this.props.payment) {
      const eventProps = {
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        onPointerEnter: this.props.onPointerEnter,
        onPointerLeave: this.props.onPointerLeave,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur
      }

      return !this.props.link ? (
          <i className={"payment payment-cb-dark " + (this.props.className || "")} {...eventProps} />
        ) : (
          <a className="icon" {...eventProps}>
            <i className={"payment payment-cb-dark " + (this.props.className || "")} />
          </a>
      );
    }
    return (<Icon
      name={this.props.name}
      className={this.props.className}
      flag={this.props.flag}
      isAriaHidden={this.props.isAriaHidden}
      link={this.props.link}
      payment={this.props.payment}
      prefix={this.props.prefix}
      onClick={this.props.onClick}
      onMouseEnter={this.props.onMouseEnter}
      onMouseLeave={this.props.onMouseLeave}
      onPointerEnter={this.props.onPointerEnter}
      onPointerLeave={this.props.onPointerLeave}
      onFocus={this.props.onFocus}
      onBlur={this.props.onBlur}
      />);
  }
}

export default MyIcon;