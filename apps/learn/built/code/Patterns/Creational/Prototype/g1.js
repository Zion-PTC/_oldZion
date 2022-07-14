"use strict";
class CustomerPrototype {
    proto;
    constructor(proto) {
        this.proto = proto;
    }
    clone() {
        let customer = new Customer();
        customer.first = this.proto.first;
        customer.last = this.proto.last;
        customer.status = this.proto.status;
        return customer;
    }
}
class Customer {
    first;
    last;
    status;
    constructor(first = "", last = "", status = "") {
        this.first = first;
        this.last = last;
        this.status = status;
    }
    say() {
        if (this.first && this.last && this.status)
            console.log("name: " + this.first + " " + this.last + ", status: " + this.status);
    }
}
let proto = new Customer("n/a", "n/a", "pending");
let prototype = new CustomerPrototype(proto);
let customer = prototype.clone();
customer.first = "ciao";
proto.say();
customer.say();
