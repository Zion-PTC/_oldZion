class CustomerPrototype {
  constructor(public proto: Customer) {}
  clone() {
    let customer = new Customer();
    customer.first = this.proto.first;
    customer.last = this.proto.last;
    customer.status = this.proto.status;
    return customer;
  }
}

class Customer {
  constructor(
    public first: string = "",
    public last: string = "",
    public status: string = ""
  ) {}
  say() {
    if (this.first && this.last && this.status)
      console.log(
        "name: " + this.first + " " + this.last + ", status: " + this.status
      );
  }
}

let proto = new Customer("n/a", "n/a", "pending");
let prototype = new CustomerPrototype(proto);

let customer = prototype.clone();
customer.first = "ciao";
proto.say();
customer.say();
