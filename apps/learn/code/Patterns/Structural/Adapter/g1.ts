class Shipping {
  constructor() {}
  request(zipStart: string, zipEnd: string, wight: string) {
    return "$49.75";
  }
}

class AdvanceShipping {
  constructor() {}
  login(credentials: { token: string }) {}
  setStart(start: string) {}
  setDestination(destination: string) {}
  calculate(weight: string) {
    return "$39.50";
  }
}

class ShippingAdapter {
  shipping: AdvanceShipping;
  constructor(credentials: { token: string }) {
    this.shipping = new AdvanceShipping();
    this.shipping.login(credentials);
  }
  request(zipStart: string, zipEnd: string, weight: string) {
    this.shipping.setStart(zipStart);
    this.shipping.setDestination(zipEnd);
    return this.shipping.calculate(weight);
  }
}

let shipping = new Shipping();
let credentials = { token: "30a8-6ee1" };
let adapter = new ShippingAdapter(credentials);
let cost1 = shipping.request("78701", "10010", "2 lbs");
let cost2 = adapter.request("78701", "10010", "2 lbs");
