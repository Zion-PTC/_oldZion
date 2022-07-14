// MIN BARE FUNCTIONING MIXIN

type Ctor3 = new (...arg: any[]) => {};
class Base {
  base = "base";
}

const Name = function <T extends Ctor3>(Superclass: T) {
  return class extends Superclass {
    name = "name";
  };
};

const Surname = function <T extends Ctor3>(Superclass: T) {
  return class Name extends Superclass {
    surname = "surname";
  };
};

class Myclass extends Surname(Name(Base)) {}
const c = new Myclass();

export {};
