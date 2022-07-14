import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface IPriorita {
    __type: Symbol;
    priorità: string;
}
export declare const Priorita: ComplexMixin<IPriorita>;
export {};
