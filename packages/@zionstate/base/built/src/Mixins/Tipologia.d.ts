import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ITipologia {
    __type: Symbol;
    tipologia: string;
}
export declare const Tipologia: ComplexMixin<ITipologia>;
export {};
