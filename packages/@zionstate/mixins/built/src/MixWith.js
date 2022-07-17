const Name = (superclass) => class Name extends superclass {
    name = "name";
};
const Surname = (superclass) => class Surname extends superclass {
    surname = "surname";
};
class Mix {
    superclass;
    constructor(superclass) {
        this.superclass = superclass;
        this.superclass = superclass;
    }
    with(...mixins) {
        // FIXME capire come fixare sto problema
        //@ts-expect-error
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}
class Base {
    base = true;
}
const Mixer = new Mix(Base).with(Name, Surname);
const obj = new Mixer();
console.log(obj);
const Doo = function (superclass) {
    return class New extends superclass {
    };
};
const Coo = function (superclass) {
    return class New extends superclass {
    };
};
let arr2 = [Doo, Coo];
export {};
