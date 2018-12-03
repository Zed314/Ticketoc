import React, { Component } from 'react';
import {
  StatsCard,
  Dimmer,
} from "tabler-react";
import C3Chart from "react-c3js";

class DiagramCard extends Component {

  render() {
    console.log(this.props.data)
    const getPercent = (a,b) => {
      const percentage = Math.round((b-a) * 100 / a)
      return percentage < Infinity ? percentage : "+∞"
    }
    return (
      <StatsCard
      layout={this.props.layout || 2}
      movement={getPercent(this.props.data[0], this.props.data[this.props.data.length - 1])}
      total={this.props.data[this.props.data.length - 1]}
      label={this.props.label}
      chart={
        <C3Chart
        style={{ height: "100%" }}
        padding={{
          bottom: -10,
          left: -1,
          right: -1,
        }}
        data={{
          names: {
            data1: this.props.label,
          },
          columns: [["data1", ...this.props.data]],
          type: "area",
        }}
        legend={{
          show: false,
        }}
        transition={{
          duration: 0,
        }}
        point={{
          show: false,
        }}
        tooltip={{
          format: {
            title: function(x) {
              return "";
            },
          },
        }}
        axis={{
          y: {
            padding: {
              bottom: 0,
            },
            show: false,
            tick: {
              outer: false,
            },
          },
          x: {
            padding: {
              left: 0,
              right: 0,
            },
            show: false,
          },
        }}
        color={{
          pattern: [this.props.color],
        }}
        />
      }
      />
      );
  }
}

export default DiagramCard;