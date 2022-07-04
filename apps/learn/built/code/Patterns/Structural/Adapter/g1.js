"use strict";
class Shipping {
    constructor() { }
    request(zipStart, zipEnd, wight) {
        return "$49.75";
    }
}
class AdvanceShipping {
    constructor() { }
    login(credentials) { }
    setStart(start) { }
    setDestination(destination) { }
    calculate(weight) {
        return "$39.50";
    }
}
class ShippingAdapter {
    shipping;
    constructor(credentials) {
        this.shipping = new AdvanceShipping();
        this.shipping.login(credentials);
    }
    request(zipStart, zipEnd, weight) {
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
