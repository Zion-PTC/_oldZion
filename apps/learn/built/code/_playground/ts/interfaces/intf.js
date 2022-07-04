"use strict";
const foo1 = function () {
    console.log(this.membro);
};
class Class {
    membro;
    membri;
    foo1 = foo1;
}
const ClassFactory = function () {
    let instance = new Class();
    return instance;
};
let instanza = ClassFactory();
instanza.membro = 'pp';
instanza.foo1();
let classe = new Class();
classe.membro = 'Ciao';
console.log(classe);
classe.foo1();
class ChildClass extends Class {
}
let child = new ChildClass();
child.membro = 'not';
child.foo1();
class Blarg {
    id;
    show() {
        console.log(this.id);
    }
}
let bla = new Blarg();
bla.id = 'bla';
console.log(bla);
setTimeout(() => {
    bla.show();
}, 1000);
