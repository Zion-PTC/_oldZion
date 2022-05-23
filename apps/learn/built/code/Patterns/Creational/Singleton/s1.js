"use strict";
const constr = Object;
class Singleton {
    static instance;
    getInstance;
    constructor() {
        this.getInstance = function () {
            if (!Singleton.instance)
                Singleton.instance = this.createInstance();
            return Singleton.instance;
        };
    }
    createInstance() {
        Singleton.instance = new Object('Solo uno');
        return Singleton.instance;
    }
}
class AnotherSingleton extends Singleton {
}
function s1() {
    let instanceA = new Singleton().getInstance();
    let instanceB = new Singleton().getInstance();
    let A = new AnotherSingleton().getInstance();
    console.log(instanceA);
    console.log(instanceB);
    console.log(A);
}
s1();
