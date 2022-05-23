"use strict";
class User {
    name;
    constructor(name = 'nome') {
        this.name = name;
    }
    say() {
        console.log('User: ' + this.name);
    }
}
class DecoratedUser {
    user;
    street;
    city;
    name;
    say;
    constructor(user, street, city, name = user.name, say = function () {
        console.log(
        //@ts-expect-error
        'Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city);
    }) {
        this.user = user;
        this.street = street;
        this.city = city;
        this.name = name;
        this.say = say;
    }
}
function run1() {
    var user = new User('Kelly');
    user.say();
    var decorated = new DecoratedUser(user, 'Broadway', 'New York');
    decorated.say();
}
run1();
