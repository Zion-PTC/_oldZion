"use strict";
const foo1 = function () {
    //@ts-expect-error
    console.log(this.membro);
};
class Class {
    //@ts-expect-error
    membro;
    //@ts-expect-error
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
// cosi funzion ma solo in typescript
let classe = new Class();
classe.membro = 'Ciao';
console.log(classe);
classe.foo1();
class ChildClass extends Class {
}
// cosi non funziona
let child = new ChildClass();
child.membro = 'not';
child.foo1();
// cosi funziona ma non mostra i metodi quando si logga
// l'oggetto in console.
class Blarg {
    //@ts-expect-error
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
