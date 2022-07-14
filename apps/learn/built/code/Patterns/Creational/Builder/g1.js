class Shop {
    constructor() { }
    construct(builder) {
        builder.step1();
        builder.step1();
        return builder.get();
    }
}
class ABuilder {
}
class CarBuilder {
    car;
    constructor(car) {
        this.car = car;
    }
    step1() {
        this.car = new Car();
    }
    step2() {
        this.car?.addParts();
    }
    get() {
        if (this.car)
            return this.car;
        else
            throw "error";
    }
}
class TruckBuilder {
    truck;
    constructor(truck) {
        this.truck = truck;
    }
    step1() {
        this.truck = new Truck();
    }
    step2() {
        this.truck?.addParts();
    }
    get() {
        if (this.truck)
            return this.truck;
        else
            throw "error";
    }
}
class AVehicle {
}
class Car extends AVehicle {
    doors = 0;
    addParts() {
        this.doors = 4;
    }
    say() {
        console.log("I am a " + this.doors + "-door car");
    }
}
class Truck extends AVehicle {
    doors = 0;
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
export {};
