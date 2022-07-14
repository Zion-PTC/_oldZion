export {};
class Shop {
  constructor() {}
  construct(builder: ABuilder) {
    builder.step1();
    builder.step1();
    return builder.get();
  }
}

abstract class ABuilder {
  abstract step1(): void;
  abstract step2(): void;
  abstract get(): AVehicle;
}

class CarBuilder implements ABuilder {
  constructor(public car?: Car) {}
  step1() {
    this.car = new Car();
  }
  step2() {
    this.car?.addParts();
  }
  get() {
    if (this.car) return this.car;
    else throw "error";
  }
}

class TruckBuilder implements ABuilder {
  constructor(public truck?: Truck) {}
  step1() {
    this.truck = new Truck();
  }
  step2() {
    this.truck?.addParts();
  }
  get() {
    if (this.truck) return this.truck;
    else throw "error";
  }
}

abstract class AVehicle {
  abstract doors: number;
  abstract addParts(): void;
  abstract say(): void;
}

class Car extends AVehicle {
  doors: number = 0;
  addParts() {
    this.doors = 4;
  }
  say() {
    console.log("I am a " + this.doors + "-door car");
  }
}

class Truck extends AVehicle {
  doors: number = 0;
  addParts() {
    this.doors = 2;
  }
  say() {
    console.log("I am a " + this.doors + "-door truck");
  }
}

let shop = new Shop();
let carBuilder = new CarBuilder();
let truckBuilder = new TruckBuilder();
let car = shop.construct(carBuilder);
let truck = shop.construct(truckBuilder);

car.say();
truck.say();
