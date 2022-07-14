import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ICategoria {
    __type: Symbol;
    categoria: string;
}
export declare const Categoria: ComplexMixin<ICategoria>;
export {};
