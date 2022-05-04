// fourth
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
//@ts-expect-error
inv1.client = 'booob'; // lo segnala ma funziona =(
invoices.forEach((inv) => {
    console.log(inv.client, 
    //@ts-expect-error
    inv.details, // segnala che non si puo chiamare
    inv.amount, inv.format());
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
//@ts-ignore
console.log(inv3.details); // TS si lamenta
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
