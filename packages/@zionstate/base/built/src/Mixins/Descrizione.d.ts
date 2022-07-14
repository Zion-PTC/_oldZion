import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface IDescrizione {
    __type: Symbol;
    descrizione: string;
}
export declare const Descrizione: ComplexMixin<IDescrizione>;
export {};
