//////// MIXER

type Ctor = new (...arg: any[]) => {};
type TFunction = (...args: any) => any;
type TMixer = <
  M extends TFunction,
  T extends Ctor,
  X extends ReturnType<M> & T
>(
  mixin: M,
  base: T
) => X;

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
const Mixer: TMixer = function (mixin, base) {
  return mixin(base);
};
class MyClass3 extends Mixer(Name, Base) {}
const c3 = new MyClass3();

export {};
