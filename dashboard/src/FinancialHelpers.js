class FinancialHelpers {
  static toFinancialString(amount) {
    return Number.parseFloat(amount).toFixed(2).replace(".", ",");
  }
}

export default FinancialHelpers