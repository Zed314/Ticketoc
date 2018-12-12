import React, { Component } from 'react';
import Receipt from "./Receipt";
import FinancialHelpers from "../FinancialHelpers"

class ReceiptTimeline extends Component {
  constructor(props) {
    super(props)
    this.state = {item_stage: [], inAction: false}
  }

  elemShow(i) {
    console.log(i)
    this.setState({inAction: true})
    setTimeout(() => {
      let clone = this.state.item_stage.concat([])
      if (clone[i] < 2)
        return
      clone[i] = 1
      this.setState({item_stage: clone})
      setTimeout(() => {
        clone = this.state.item_stage.concat([])
        clone[i] = 0
        this.setState({item_stage: clone, inAction: false})
      }, 200)
    }, 10)
  }

  static getDerivedStateFromProps(props, state) {
    if (state.item_stage.length === props.receipts.length) return null;
    let item_stage = state.item_stage.concat([])
    if (state.item_stage.length === 0) {
      for (let i = 0; i < props.receipts.length; i++) {
        item_stage.push(0)
      }
    } else {
      for (let i = 0; i < props.receipts.length - state.item_stage.length; i++) {
        item_stage.push(2)
      }
    }
    return {item_stage}
  }

  render() {
    let receiptJSX = []
    for (let i = 0; i < this.props.receipts.length; i++) {
      receiptJSX.unshift(
        <Receipt
          className={this.state.item_stage[i] <= 0 ? "" : " hidden" + (this.state.item_stage[i] < 2 ? " hidden-interm" : "")}
          details = {FinancialHelpers.getDetailsFromTicket(this.props.receipts[i])}
          lines = {this.props.receipts[i].lines}
          settlements = {this.props.receipts[i].settlements}
          documentTotal={this.props.receipts[i].documentTotal} />
      )
      if (this.state.item_stage[i] >= 2 && !this.state.inAction)
        setTimeout(() => {this.elemShow(i)}, 1)
      }

    return (
        <div className={"horizontalScroller" + (this.state.inAction ? " awaits-action" : "")}>
          {receiptJSX}
       </div>
     )
  }
}

export default ReceiptTimeline