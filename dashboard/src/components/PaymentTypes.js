import React, { Component } from 'react';
import FinancialHelpers from '../FinancialHelpers';
import {
  Icon
} from "tabler-react";

class PaymentTypes extends Component {
  getMastercardOrVisa() {
    const cards = ["mastercard", "visa"]
    const index = Math.floor(Math.random() * 2);
    return cards[index];
  }

  render() {
    const tableRows = [];
    for (let i = 0; i < this.props.payments.length; i++) {
      let mecha = this.props.payments[i].paymentMechanism.toLowerCase()
      const cash = mecha === "especes" || mecha === "cash"
      mecha = cash ? "loader" : (mecha === "cb" ? this.getMastercardOrVisa() : mecha);
      tableRows.push(
        <tr>
          <td><Icon payment={cash ? undefined : true} name={mecha} /></td>
          <td>€ {FinancialHelpers.toFinancialString(this.props.payments[i].settlementAmount)}</td>
        </tr>
        )
    }
    return (
      <table className="payment-types">
        {tableRows}
      </table>
      );
  }
}

export default PaymentTypes;