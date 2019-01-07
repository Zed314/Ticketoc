import React, { Component } from 'react';
import FinancialHelpers from '../FinancialHelpers';
import TooltipLine from './TooltipLine';
import PaymentTypes from "./PaymentTypes";
import {
  Card,
  Table,
  Icon,
  Grid,
  Dimmer
} from "tabler-react";

class Receipt extends Component {
  constructor(props) {
    super(props)
    this.state = { articlePopup : this.props.lines[2], popupOpen: false };
    this.closeDialogue = this.closeDialogue.bind(this);
  }

  closeDialogue(e) {
    e.preventDefault();
    this.setState(state => ({
      popupOpen: false
    }));
  }

  openDialogue(e, line) {
    e.preventDefault();
    this.setState(state => ({
      articlePopup: line,
      popupOpen: true
    }));
  }


  render() {
    const tableRows = [];
    for (let i = 0; i < this.props.lines.length; i++) {
      tableRows.push(
        <Table.Row>
          <Table.Col>{this.props.lines[i].productDescription}</Table.Col>
          <Table.Col>{FinancialHelpers.toFinancialString(this.props.lines[i].unitPrice * (100 + this.props.lines[i].taxPercentage) / 100)}</Table.Col>
          <Table.Col>&times;</Table.Col>
          <Table.Col>
            {this.props.lines[i].quantity + (this.props.lines[i].unitOfMeasure === "measure" ? "" : this.props.lines[i].unitOfMeasure)}
          </Table.Col>
          <Table.Col>{FinancialHelpers.toFinancialString(this.props.lines[i].settlementAmount)}</Table.Col>
          <Table.Col><a href="#" onClick={(e) => this.openDialogue(e, this.props.lines[i])}><Icon name="info" /></a></Table.Col>
        </Table.Row>
        )
    }

    let customerName = this.props.details.customerName ? <p className="customer loyality">Thank you for your purchase, <TooltipLine tooltip={"ID " + this.props.details.customerID + ", AcmeAdvantage Member"}>{this.props.details.customerTitle || "Mrs./Mr."} {this.props.details.customerName}</TooltipLine>!</p> : <p className="customer">Customer ID: {this.props.details.customerID}</p>;
    let agentIdentifier = this.props.details.agentID

    if (this.props.details.agentName) {
      agentIdentifier = <TooltipLine tooltip={"ID " + this.props.details.agentID}>{this.props.details.agentName}</TooltipLine>
    }

    return (
      <Card className={"receipt " + (this.props.className || "")}>
        <Card
          title={"Article Details for " + (this.state.articlePopup.productDescription ? this.state.articlePopup.productDescription : "Line " +  this.state.articlePopup.lineNumber)}
          statusColor="blue"
          options={<a href="#" onClick={this.closeDialogue}><Icon name="x" /></a>}
          className={"dialogue " + (!this.state.popupOpen ? "hidden" : "open")} >
          <Card.Body>
            <Grid.Row>
              <Grid.Col>Line total</Grid.Col>
              <Grid.Col>{FinancialHelpers.toFinancialString(this.state.articlePopup.settlementAmount)}</Grid.Col>
              <Grid.Col>Line net</Grid.Col>
              <Grid.Col>{FinancialHelpers.toFinancialString(this.state.articlePopup.creditAmount)}</Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>Product ID</Grid.Col>
              <Grid.Col>{this.state.articlePopup.productCode}</Grid.Col>
              <Grid.Col>Unit net price</Grid.Col>
              <Grid.Col>{FinancialHelpers.toFinancialString(this.state.articlePopup.unitPrice)}</Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>Units bought</Grid.Col>
              <Grid.Col>{this.state.articlePopup.quantity + (this.state.articlePopup.unitOfMeasure === "measure" ? "" : this.state.articlePopup.unitOfMeasure)}</Grid.Col>
              <Grid.Col>Tax rate</Grid.Col>
              <Grid.Col>{this.state.articlePopup.taxPercentage + "%"}</Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>Product Category</Grid.Col>
              <Grid.Col><TooltipLine tooltip={"ID " + this.state.articlePopup.productCategoryCode}>{this.state.articlePopup.productCategoryName}</TooltipLine></Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>
        <Dimmer active={this.state.popupOpen} className="dimmer">
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
        </Dimmer>
      </Card>
      );
  }
}

export default Receipt;