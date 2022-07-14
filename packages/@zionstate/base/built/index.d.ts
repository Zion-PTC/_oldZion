import * as BaseExport from "./src/Base.js";
import * as MixExport from "./src/Mix.js";
import { Constructor as C, GConstructor as GC, Mixin } from "./src/TSMixin.js";
import { Mix as MW3M, Base as MW3B } from "./src/MixWithv3.js";
import { IName as IN } from "./src/Mixins/en/Name.js";
import { ISurname as IS } from "./src/Mixins/en/Surname.js";
export { decorators } from "./lib/index.js";
export * as types from "./lib/types/index.js";
export * as MixWithV2 from "./src/MixWithv2.js";
export declare type Constructor = C;
export declare type GConstructor = GC;
export declare let ZionMixins: {
    Mix: typeof MW3M;
    Base: typeof MW3B;
    Name: <TBase extends new (...args: any[]) => {}>(Base: TBase, id: number) => (new (...arg: any[]) => IN) & TBase;
    Surname: <TBase_1 extends new (...args: any[]) => {}>(Base: TBase_1, id: number) => (new (...arg: any[]) => IS) & TBase_1;
    Mixin: typeof Mixin;
};
export default BaseExport;
export declare const Base: typeof BaseExport.Base;
export declare const ABase: typeof BaseExport.ABase;
export declare type IBase = BaseExport.IBase;
export declare const Mix: typeof MixExport;
