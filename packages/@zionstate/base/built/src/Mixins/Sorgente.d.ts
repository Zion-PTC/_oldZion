import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ISorgente {
    __type: Symbol;
    sorgente: string;
}
export declare const Sorgente: ComplexMixin<ISorgente>;
export {};
