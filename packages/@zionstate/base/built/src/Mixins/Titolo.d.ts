import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ITitolo {
    __type: Symbol;
    titolo: string;
}
export declare const Titolo: ComplexMixin<ITitolo>;
export {};
