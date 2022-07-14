"use strict";
class Person {
    name;
    street;
    city;
    state;
    constructor(name, street, city, state) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
    }
    hydrate() {
        return JSON.stringify(this);
    }
    dehydrate(memento) {
        let m = JSON.parse(memento);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}
class CareTaker {
    mementos = {};
    constructor() { }
    add(key, memento) {
        this.mementos[key] = memento;
    }
    get(key) {
        return this.mementos[key];
    }
}
let mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
let john = new Person("John Wang", "48th Street", "San Jose", "CA");
let caretaker = new CareTaker();
caretaker.add("1", mike.hydrate());
caretaker.add("2", john.hydrate());
mike.name = "King Kong";
john.name = "Kurt Cobain";
mike.dehydrate(caretaker.get("1"));
john.dehydrate(caretaker.get("2"));
console.log(mike);
console.log(john);
