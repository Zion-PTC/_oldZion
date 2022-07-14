//////// MIXER
class Base {
    base = "base";
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
const Mixer = function (mixin, base) {
    return mixin(base);
};
class MyClass3 extends Mixer(Name, Base) {
}
const c3 = new MyClass3();
export {};
