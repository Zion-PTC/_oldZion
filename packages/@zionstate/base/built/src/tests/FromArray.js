//////// FROM ARRAY
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
const arr = [Name, Surname];
class MyClass2 extends arr[0](Base) {
}
const c2 = new MyClass2();
export {};
