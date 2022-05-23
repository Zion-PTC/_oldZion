"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sITestA() {
    return (constructor) => {
        constructor;
    };
}
let ThatThing = class ThatThing {
    static get prove() {
        //@ts-expect-error
        return;
    }
    static set prove(prova) { }
    //@ts-expect-error
    id;
};
ThatThing = __decorate([
    sITestA()
], ThatThing);
let tin = new ThatThing();
tin.id = 'ciao';
console.log(tin.id);
//// ________
function sITestB() {
    return (constructor) => {
        constructor;
    };
}
let MyTin = class MyTin {
    static id;
    //@ts-expect-error
    id;
};
MyTin = __decorate([
    sITestB()
], MyTin);
let bob = new MyTin();
bob.id = 'bob';
console.log(bob.id);
function sITestC() {
    return (constructor) => {
        constructor;
    };
}
let Ouch = class Ouch {
    //@ts-expect-error
    static id;
    //@ts-expect-error
    static foo;
    //@ts-expect-error
    id;
};
Ouch = __decorate([
    sITestC()
], Ouch);
