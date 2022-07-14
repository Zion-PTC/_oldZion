import { types, MixWithV2 } from "@zionstate/base";

let Mix = MixWithV2.Mix;

interface IName {
  name: string;
}
function Name<TBase extends types.classes.constructors.Constructor>(
  Base: TBase,
  id: number
) {
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
function Surname<TBase extends types.classes.constructors.Constructor>(
  Base: TBase,
  id: number
) {
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

interface Mixed extends IName, ISurname, IBase {}

const MyClassFinal: types.classes.constructors.GCtor<Mixed> = new Mix(
  Base
).with(Name, Surname);
const vi = new MyClassFinal("Giacomo", "Gagliano");
console.log(vi.surname);

type Fl1 = types.flatteners.FlattenInterface<typeof Name>;
type Fl2 = types.flatteners.FlattenInterface<ISurname>;
type Fl3 = types.flatteners.FlattenInterface<Base>;
type MixedTypes = types.flatteners.FlattenInterface<Fl1 & Fl2 & Fl3>;
