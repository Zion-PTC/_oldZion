"use strict";
class Invoice {
    client;
    details;
    amount;
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
const inv1 = new Invoice('mario', 'work on mario website', 250);
const inv2 = new Invoice('luigi', 'work on luigi website', 350);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
inv1.client = 'booob';
invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
class Invoice2 {
    client;
    #details;
    amount;
    constructor(c, d, a) {
        this.client = c;
        this.#details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.#details}`;
    }
}
const inv3 = new Invoice2('giacomo', 'costruito Swarm', 10000);
console.log(inv3.details);
class Invoice3 {
    client;
    details;
    amount;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
