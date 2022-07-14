class Shop {
  constructor() {
    this.construct = function (builder) {
      builder.step1();
      builder.step2();
      return builder.get();
    };
  }
}

class CarBuilder {
  constructor() {
    this.car = null;

    this.step1 = function () {
      this.car = new Car();
    };

    this.step2 = function () {
      this.car.addParts();
    };

    this.get = function () {
      return this.car;
    };
  }
}

class TruckBuilder {
  constructor() {
    this.truck = null;

    this.step1 = function () {
      this.truck = new Truck();
    };

    this.step2 = function () {
      this.truck.addParts();
    };

    this.get = function () {
      return this.truck;
    };
  }
}

class Car {
  constructor() {
    this.doors = 0;

    this.addParts = function () {
      this.doors = 4;
    };

    this.say = function () {
      console.log("I am a " + this.doors + "-door car");
    };
  }
}

class Truck {
  constructor() {
    this.doors = 0;

    this.addParts = function () {
      this.doors = 2;
    };

    this.say = function () {
      console.log("I am a " + this.doors + "-door truck");
    };
  }
}

function run() {
  var shop = new Shop();
  var carBuilder = new CarBuilder();
  var truckBuilder = new TruckBuilder();
  var car = shop.construct(carBuilder);
  var truck = shop.construct(truckBuilder);

  car.say();
  truck.say();
}
run();
