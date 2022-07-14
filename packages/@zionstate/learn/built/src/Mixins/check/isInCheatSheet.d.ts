import * as base from "@zionstate/base";
declare type ComplexMixin<T> = base.types.mixins.ComplexMixin<T>;
export interface IisInCheatSheet {
    __type: Symbol;
    isInCheatSheet: boolean;
}
export declare const isInCheatSheet: ComplexMixin<IisInCheatSheet>;
export {};
