// TODO creare export
import * as BaseExport from "./src/Base.js";
import * as MixExport from "./src/Mix.js";
import { Constructor as C, GConstructor as GC, Mixin } from "./src/TSMixin.js";
import { Mix as MW3M, Base as MW3B, IBase as IB } from "./src/MixWithv3.js";
import { Name, IName as IN } from "./src/Mixins/en/Name.js";
import { Surname, ISurname as IS } from "./src/Mixins/en/Surname.js";
export { decorators } from "./src/lib/index.js";

export * as types from "./src/lib/types/index.js";
export * as MixWithV2 from "./src/MixWithv2.js";

export type Constructor = C;
export type GConstructor = GC;
// export default { Mixin };
export let ZionMixins = {
  Mix: MW3M,
  Base: MW3B,
  Name,
  Surname,
  Mixin,
};

export default BaseExport;
export const Base = BaseExport.Base;
export const ABase = BaseExport.ABase;
export type IBase = BaseExport.IBase;
export const Mix = MixExport;
