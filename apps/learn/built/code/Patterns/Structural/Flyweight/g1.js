"use strict";
class Flyweight {
    make;
    model;
    processor;
    constructor(make, model, processor) {
        this.make = make;
        this.model = model;
        this.processor = processor;
    }
}
class Computer {
    make;
    model;
    processor;
    memory;
    tag;
    flyweight;
    constructor(make, model, processor, memory, tag) {
        this.make = make;
        this.model = model;
        this.processor = processor;
        this.memory = memory;
        this.tag = tag;
        this.flyweight = FlyWeightFactory.get(make, model, processor);
    }
    getMake() {
        return this.flyweight.make;
    }
}
var FlyWeightFactory = (function () {
    var flyweights = {};
    return {
        get: function (make, model, processor) {
            if (!flyweights[make + model]) {
                flyweights[make + model] = new Flyweight(make, model, processor);
            }
            return flyweights[make + model];
        },
        getCount: function () {
            var count = 0;
            for (var f in flyweights)
                count++;
            return count;
        },
    };
})();
class ComputerCollection {
    computers = {};
    count = 0;
    get(tag) {
        return this.computers[tag];
    }
    getCount() {
        return this.count;
    }
    add(make, model, processor, memory, tag) {
        this.computers[tag] = new Computer(make, model, processor, memory, tag);
        this.count++;
    }
}
var computers = new ComputerCollection();
computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
computers.add("HP", "Envy", "Intel", "2G", "TXU003283");
console.log("Computers: " + computers.getCount());
console.log("Flyweights: " + FlyWeightFactory.getCount());
