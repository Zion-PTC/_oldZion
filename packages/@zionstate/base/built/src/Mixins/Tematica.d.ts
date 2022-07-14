import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ITematica {
    __type: Symbol;
    tematica: string;
}
export declare const Tematica: ComplexMixin<ITematica>;
export {};
