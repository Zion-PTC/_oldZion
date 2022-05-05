class CustomerPrototype {
  constructor(proto) {
    this.proto = proto;

    this.clone = function () {
      var customer = new Customer();

      customer.first = proto.first;
      customer.last = proto.last;
      customer.status = proto.status;

      return customer;
    };
  }
}

class Customer {
  constructor(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
      console.log("name: " + this.first + " " + this.last +
        ", status: " + this.status);
    };
  }
}

function run() {

  var proto = new Customer("n/a", "n/a", "pending");
  var prototype = new CustomerPrototype(proto);

  var customer = prototype.clone();
  customer.say();
}
