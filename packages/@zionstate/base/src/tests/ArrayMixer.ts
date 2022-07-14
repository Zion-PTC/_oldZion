//////// ARRAY MIXER
//@ts-nocheck

type Ctor = new (...arg: any[]) => {};
type TFunction = (...args: any) => any;
type TArrayMixer = <
  I extends number,
  M extends TFunction[],
  T extends Ctor,
  X extends ReturnType<M[I]> & T
>(
  arr: M,
  base: T,
  index: I
) => X;

class Base {
  base = "base";
}

type IClase = {
  name: string;
};

class Clase implements IClase {
  name = "";
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

const arr2 = [Name, Surname];
type MixedType = [typeof Name, typeof Surname];
const arr: MixedType = [Name, Surname];

const ArrayMixer: TArrayMixer = function (arr, base, index) {
  return arr[index](base);
};
class MyClass4 extends ArrayMixer(arr, Base, 0) {}
class MyClass5 extends ArrayMixer(arr, MyClass4, 1) {}
const arrMix = new MyClass5();

export {};

/// ITERATOR
class MxnIterator<
  M extends TFunction[],
  T extends Ctor,
  I extends number,
  X extends ReturnType<M[I]> & T
> {
  constructor(public Mixins: M, public ctor: T, public index: I = 0) {}
  first() {
    class Mixed extends this.ArrayMixer1() {}
    this.ctor = Mixed;
    return this;
  }
  ArrayMixer1(): X | undefined {
    if (this.index) return this.Mixins[0](this.ctor);
  }
  ArrayMixer2: TArrayMixer = (arr, base, index) => {
    return this.Mixins[index](this.ctor);
  };
}

let mixer = new MxnIterator(arr, Base);
mixer.ArrayMixer1();
const examine = new mixer.ctor();
examine;

let mixer2 = new MxnIterator(arr, Base);
class Tutti extends mixer2.ArrayMixer2(arr, Base, 0) {}
const examine2 = new Tutti();
examine2;
