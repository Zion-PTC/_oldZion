type Constructor = new (...args: any[]) => {};
type GCtor<T> = new (...args: any[]) => T;
type FlattenInterface<Type> = {
  [Property in keyof Type]: Type[Property];
};
export {}
interface IName {
  name: string;
}
function Name<TBase extends Constructor>(Base: TBase, id: number) {
  return class Name extends Base implements IName {
    #nameId = id;
    get nameId() {
      return this.#nameId;
    }
    #name: string = "";
    get name() {
      return this.#name;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#name = arg[this.#nameId];
    }
  };
}

interface ISurname {
  surname: string;
}
function Surname<TBase extends Constructor>(Base: TBase, id: number) {
  return class Surname extends Base implements ISurname {
    #surnameId = id;
    get surnameId() {
      return this.#surnameId;
    }
    #surname: string = "";
    get surname() {
      return this.#surname;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#surname = arg[this.#surnameId];
    }
  };
}

interface IBase {
  base: boolean;
}
class Base implements IBase {
  base: true = true;
  constructor(...arg: any[]) {}
}

type Mixiii = (
  superclass: Constructor,
  id: number
) => new (...arg: any[]) => {};

class Mix {
  constructor(public superclass: Constructor) {}
  with<T>(...mixins: Mixiii[]): T {
    let counter = -1;
    for (let mixin of mixins) {
      counter++;
      this.superclass = class New extends mixin(this.superclass, counter) {};
    }
    return this.superclass as unknown as T;
  }
}

interface Mixed extends IName, ISurname, IBase {}
type Fl1 = FlattenInterface<typeof Name>;
type Fl2 = FlattenInterface<ISurname>;
type Fl3 = FlattenInterface<Base>;
type MixedTypes = FlattenInterface<Fl1 & Fl2 & Fl3>;

const MyClassFinal:GCtor<Mixed> = new Mix(Base).with(Name, Surname);
const vi = new MyClassFinal("Giacomo", "Gagliano");
console.log(vi.surname);
