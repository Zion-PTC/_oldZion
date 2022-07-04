export class APrimitive {
    static #primitives;
    id;
    ciao;
    static get primitives() {
        return APrimitive.#primitives;
    }
    constructor() { }
}
let g = {
    id: 'io',
    ciao: 'ciao',
    show: function () {
        console.log(this.id);
        return this;
    },
};
const addFoo = function (obj) {
    obj['foo'] = function () {
        console.log(this.ciao);
        return this;
    };
    return obj;
};
console.log(g);
addFoo(g);
g.show();
g.foo();
const j = {
    foo: function () {
        return this;
    },
    id: 'ciao',
    ciao: 'ok',
    show: function () {
        console.log(this.ciao);
        return this;
    },
};
j.show();
class Ooob {
    id;
    showId() {
        console.log(this.id);
        return this;
    }
}
let oob = new Ooob();
oob.id = 'ciao';
oob.showId();
function ooobFoo() {
    console.log(this.id);
    return this;
}
let oob2 = {
    id: 'ola',
    showId: ooobFoo,
};
function makeObj(obj) {
    obj = {
        ...obj,
        nome: 'culo',
        showNome: function () {
            console.log(this.nome);
        },
    };
    return obj;
}
let emtObj = makeObj({});
console.log(oob2);
console.log(emtObj);
