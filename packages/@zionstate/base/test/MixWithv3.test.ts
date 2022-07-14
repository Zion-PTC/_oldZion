import { ZionTypes, ZionMixins } from "@zionstate/mixins";

const Mix = ZionMixins.Mix;
const Base = ZionMixins.Base;
const Name = ZionMixins.Name;
const Surname = ZionMixins.Surname;

type IName = ZionTypes.ZionMixinsInterfaces.IName;
type ISurname = ZionTypes.ZionMixinsInterfaces.ISurname;
type IBase = ZionTypes.ZionMixinsInterfaces.IBase;
type IntersectionOfObjectInArray<T> =
  ZionTypes.Array.IntersectionOfObjectInArray<T>;

const arr1 = [{ a: 0 }, Base, { c: { d: 0 } }];
const arr2 = [{ a: 0 }, { b: true }, { c: { d: 0 } }];
const arr3 = [Base, Name, Surname];

interface Mixed extends IName, ISurname, IBase {}
///////////
/////////////////
type InterOfArr = IntersectionOfObjectInArray<typeof arr2>;

const MyClassFinal = new Mix<Mixed>(Base).with(Name, Surname);
const vi = new MyClassFinal("Giacomo", "Gagliano");
console.log(vi.name);
