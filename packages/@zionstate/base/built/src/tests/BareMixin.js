// MIN BARE FUNCTIONING MIXIN
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
class Myclass extends Surname(Name(Base)) {
}
const c = new Myclass();
export {};
