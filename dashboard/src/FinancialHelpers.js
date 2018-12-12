class FinancialHelpers {
  static toFinancialString(amount) {
    return Number.parseFloat(amount).toFixed(2).replace(".", ",");
  }
  static getDetailsFromTicket(ticket) {
  	let copy = Object.assign({lines: undefined, documentTotal: undefined, settlements: undefined}, ticket)
  	delete copy.lines
  	delete copy.settlements
  	delete copy.documentTotal
  	return copy;
  }
}

export default FinancialHelpers