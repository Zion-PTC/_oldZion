import * as Mixins from "../../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface IPath {
    __type: Symbol;
    path: string;
}
export declare const Path: ComplexMixin<IPath>;
export {};
