export class Price {
    amount;
    currency;
    constructor(amount, currency = "eur") {
        this.amount = amount;
        this.currency = currency;
    }
}
