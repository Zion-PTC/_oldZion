import * as Mixins from "../../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface IName {
    __type: Symbol;
    blood: string;
}
export declare const Name: ComplexMixin<IName>;
export {};
