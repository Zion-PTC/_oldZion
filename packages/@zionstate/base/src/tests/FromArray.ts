//////// FROM ARRAY

type Ctor = new (...arg: any[]) => {};
type TFunction = (...args: any) => any;

class Base {
  base = "base";
}

const Name = function <T extends Ctor>(Superclass: T) {
  return class extends Superclass {
    name = "name";
  };
};

const Surname = function <T extends Ctor>(Superclass: T) {
  return class Name extends Superclass {
    surname = "surname";
  };
};

const arr: [typeof Name, typeof Surname] = [Name, Surname];

class MyClass2 extends arr[0](Base) {}
const c2 = new MyClass2();

export {};
