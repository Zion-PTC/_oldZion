import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ITag {
    __type: Symbol;
    tag: string;
}
export declare const Tag: ComplexMixin<ITag>;
export {};
