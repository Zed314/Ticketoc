import React, { Component } from 'react';
import {
  Table
} from "tabler-react";

class IntelligientTable extends Component {

  render() {
    const columnHeaders = []
    const rows = []
    for (let i = 0; i < this.props.headings.length; i++) {
      columnHeaders.push(<Table.ColHeader>{this.props.headings[i].title}</Table.ColHeader>)
    }

    for (let i = 0; i < this.props.items.length; i++) {
      const row = []
      for (let j = 0; j < this.props.headings.length; j++) {
        row.push(<Table.Col>{this.props.items[i][this.props.headings[j].property]}</Table.Col>)
      }
      rows.push(<Table.Row>{row}</Table.Row>)
    }

    return (
      <Table
        striped={this.props.striped}
        responsive={this.props.responsive}
      >
        <Table.Header>
          <Table.Row>
            {columnHeaders}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
        </Table.Body>
      </Table>
      )
  }
}

export default IntelligientTable;