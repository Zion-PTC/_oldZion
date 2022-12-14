import { classes, mixins } from "../lib/types";
import { Mix } from "../src/MixWith";

type GConstructor<T> = classes.constructors.GCtor<T>;
type MixinType = mixins.MixinTypeNoArgs;
interface IName {
  name: string;
}
const Name: MixinType = (superclass) =>
  class Name extends superclass implements Name {
    name = "name";
  };
interface ISurname {
  surname: string;
}
const Surname: MixinType = (superclass) =>
  class Surname extends superclass implements Surname {
    surname = "surname";
  };

class Base {
  base = true;
}

// to make it compliant I create an interface with the itersection of the new class I am building
interface IMixer extends IName, ISurname, Base {}
const Mixer = new Mix<typeof Base, typeof Name | typeof Surname>(Base).with(
  Name,
  Surname
) as unknown as GConstructor<IMixer>;
const obj = new Mixer();

console.log(obj);

type NuMixin<T, Q> = (superclass: new () => T) => new () => Q;
const Doo: NuMixin<IName, IName> = function (superclass) {
  return class New extends superclass {};
};
const Coo: NuMixin<ISurname, ISurname> = function (superclass) {
  return class New extends superclass {};
};

let arr2 = [Doo, Coo];
