function Name(Base, id) {
    return class Name extends Base {
        #nameId = id;
        get nameId() {
            return this.#nameId;
        }
        #name = "";
        get name() {
            return this.#name;
        }
        constructor(...arg) {
            super(...arg);
            this.#name = arg[this.#nameId];
        }
    };
}
function Surname(Base, id) {
    return class Surname extends Base {
        #surnameId = id;
        get surnameId() {
            return this.#surnameId;
        }
        #surname = "";
        get surname() {
            return this.#surname;
        }
        constructor(...arg) {
            super(...arg);
            this.#surname = arg[this.#surnameId];
        }
    };
}
class Base {
    base = true;
    constructor(...arg) { }
}
class Mix {
    superclass;
    constructor(superclass) {
        this.superclass = superclass;
    }
    with(...mixins) {
        let counter = -1;
        for (let mixin of mixins) {
            counter++;
            this.superclass = class New extends mixin(this.superclass, counter) {
            };
        }
        return this.superclass;
    }
}
const MyClassFinal = new Mix(Base).with(Name, Surname);
const vi = new MyClassFinal("Giacomo", "Gagliano");
console.log(vi.surname);
export {};
