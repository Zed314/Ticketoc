import React, { Component } from 'react';
import FinancialHelpers from '../FinancialHelpers';
import PaymentTypes from "./PaymentTypes";
import {
  Card,
  Table,
  Icon,
  Grid
} from "tabler-react";

class Receipt extends Component {

  render() {
    const tableRows = [];
    for (let i = 0; i < this.props.lines.length; i++) {
      tableRows.push(
        <Table.Row>
          <Table.Col>{this.props.lines[i].productName}</Table.Col>
          <Table.Col>{FinancialHelpers.toFinancialString(this.props.lines[i].unitPrice * (100 + this.props.lines[i].taxPercentage) / 100)}</Table.Col>
          <Table.Col>&times;</Table.Col>
          <Table.Col>
            {this.props.lines[i].quantity + (this.props.lines[i].unitOfMeasure === "measure" ? "" : this.props.lines[i].unitOfMeasure)}
          </Table.Col>
          <Table.Col>{FinancialHelpers.toFinancialString(this.props.lines[i].settlementAmount)}</Table.Col>
          <Table.Col><Icon name="info" /></Table.Col>
        </Table.Row>
        )
    }

    let customerName = this.props.details.customerName ? <p className="customer loyality">Thank you for your purchase, <span title={"ID " + this.props.details.customerID + ", AcmeAdvantage Member"} className="tooltip-avl"><Icon name="info" /> {this.props.details.customerTitle || "Mrs./Mr."} {this.props.details.customerName}</span>!</p> : <p className="customer">Customer ID: {this.props.details.customerID}</p>;
    let agentIdentifier = this.props.details.agentID

    if (this.props.details.agentName) {
      agentIdentifier = <span title={"ID " + this.props.details.agentID} className="tooltip-avl"><Icon name="info" /> {this.props.details.agentName}</span>
    }

    return (
      <Card className="receipt">
        <Card.Body className="receipt-body">
          <h3>ACME Lyon-Terraux<small class="receipt-date">{this.props.details.date}</small></h3>
          <div className="starring-total">
            <div className="sum">€ {FinancialHelpers.toFinancialString(this.props.documentTotal.grossTotal)}</div>
            <PaymentTypes payments={this.props.settlements} />
          </div>
          <Table className="ticket-items">
            <Table.Header>
              <Table.Row>
                <Table.ColHeader>Description</Table.ColHeader>
                <Table.ColHeader>Price</Table.ColHeader>
                <Table.ColHeader />
                <Table.ColHeader>#</Table.ColHeader>
                <Table.ColHeader>Total</Table.ColHeader>
                <Table.ColHeader />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tableRows}
              <Table.Row>
                <Table.Col />
                <Table.Col />
                <Table.Col />
                <Table.Col>Net</Table.Col>
                <Table.Col>{FinancialHelpers.toFinancialString(this.props.documentTotal.netTotal)}</Table.Col>
                <Table.Col />
              </Table.Row>
              <Table.Row>
                <Table.Col />
                <Table.Col />
                <Table.Col />
                <Table.Col>VAT</Table.Col>
                <Table.Col>{FinancialHelpers.toFinancialString(this.props.documentTotal.grossTotal - this.props.documentTotal.netTotal)}</Table.Col>
                <Table.Col />
              </Table.Row>
              <Table.Row>
                <Table.Col />
                <Table.Col />
                <Table.Col />
                <Table.Col>Total</Table.Col>
                <Table.Col>{FinancialHelpers.toFinancialString(this.props.documentTotal.grossTotal)}</Table.Col>
                <Table.Col>€</Table.Col>
              </Table.Row>
            </Table.Body>
          </Table>
          {customerName}
          <div className="details">
              <Grid.Row>
                <Grid.Col width={2}>Cashier{this.props.details.agentName ? "" : " ID"}</Grid.Col>
                <Grid.Col width={4}>{agentIdentifier}</Grid.Col>
                <Grid.Col width={2}>Ticket ID</Grid.Col>
                <Grid.Col width={4}>{this.props.details.cashReceiptID}</Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col width={2}>POS</Grid.Col>
                <Grid.Col width={4}>{this.props.details.terminalID}</Grid.Col>
                <Grid.Col width={2}>Store ID</Grid.Col>
                <Grid.Col width={4}>{this.props.details.storeID}</Grid.Col>
              </Grid.Row>
          </div>
        </Card.Body>
      </Card>
      );
  }
}

export default Receipt;