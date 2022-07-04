"use strict";
class Mortgage {
    name;
    constructor(name) {
        this.name = name;
    }
    applyFor(amount) {
        let result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        }
        else if (!new Credit().get(this.name)) {
            result = "denied";
        }
        else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + "has been " + result + " for a " + amount + " mortgage";
    }
}
class Bank {
    verify(name, amount) {
        return true;
    }
}
class Credit {
    get(name) {
        return true;
    }
}
class Background {
    check(name) {
        return true;
    }
}
