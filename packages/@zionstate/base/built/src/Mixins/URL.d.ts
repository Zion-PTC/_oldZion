import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface IURL {
    __type: Symbol;
    url: URL;
}
export declare const URL: ComplexMixin<IURL>;
export {};
