export class Shop {
  constructor() {}
  construct(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

class CarBuilder {
  constructor(car) {
    this.car = car;
  }
  step1() {
    this.car = new Car();
  }
  step2() {
    this.car.addParts();
  }
  get() {
    return this.car;
  }
}

class TruckBuilder {
  constructor(truck) {
    this.truck = truck;
  }
  step1() {
    this.truck = new Truck();
  }
  step2() {
    this.truck.addParts();
  }
  get() {
    return this.truck;
  }
}

class Vehicle {
  doors = 0;
  type = undefined;
  say() {
    console.log("I am a " + this.doors + "-door " + this.type);
  }
}
class Car extends Vehicle {
  type = "car";
  addParts() {
    this.doors = 4;
  }
}
class Truck extends Vehicle {
  type = "truck";
  addParts() {
    this.doors = 2;
  }
}

function run() {
  let shop = new Shop();
  let carbuilder = new CarBuilder();
  let truckbuilder = new TruckBuilder();
  let car = shop.construct(carbuilder);
  let truck = shop.construct(truckbuilder);
  car.say();
  truck.say();
}

run();
