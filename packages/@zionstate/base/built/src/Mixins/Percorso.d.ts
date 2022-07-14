import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface IPercorso {
    __type: Symbol;
    percorso: string;
}
export declare const Percorso: ComplexMixin<IPercorso>;
export {};
