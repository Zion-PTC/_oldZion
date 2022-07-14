//////// ARRAY MIXER
//@ts-nocheck
class Base {
    base = "base";
}
class Clase {
    name = "";
}
const Name = function (Superclass) {
    return class extends Superclass {
        name = "name";
    };
};
const Surname = function (Superclass) {
    return class Name extends Superclass {
        surname = "surname";
    };
};
const arr2 = [Name, Surname];
const arr = [Name, Surname];
const ArrayMixer = function (arr, base, index) {
    return arr[index](base);
};
class MyClass4 extends ArrayMixer(arr, Base, 0) {
}
class MyClass5 extends ArrayMixer(arr, MyClass4, 1) {
}
const arrMix = new MyClass5();
/// ITERATOR
class MxnIterator {
    Mixins;
    ctor;
    index;
    constructor(Mixins, ctor, index = 0) {
        this.Mixins = Mixins;
        this.ctor = ctor;
        this.index = index;
    }
    first() {
        class Mixed extends this.ArrayMixer1() {
        }
        this.ctor = Mixed;
        return this;
    }
    ArrayMixer1() {
        if (this.index)
            return this.Mixins[0](this.ctor);
    }
    ArrayMixer2 = (arr, base, index) => {
        return this.Mixins[index](this.ctor);
    };
}
let mixer = new MxnIterator(arr, Base);
mixer.ArrayMixer1();
const examine = new mixer.ctor();
examine;
let mixer2 = new MxnIterator(arr, Base);
class Tutti extends mixer2.ArrayMixer2(arr, Base, 0) {
}
const examine2 = new Tutti();
examine2;
export {};
