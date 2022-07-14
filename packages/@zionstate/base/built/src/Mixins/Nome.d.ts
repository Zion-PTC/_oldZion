import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface INome {
    __type: Symbol;
    nome: string;
}
export declare const Nome: ComplexMixin<INome>;
export {};
