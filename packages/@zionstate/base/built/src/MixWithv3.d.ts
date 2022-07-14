import * as Mixins from "../lib/types/Mixin/Mixins.js";
import * as Constructors from "../lib/types/Class/Constructors.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
declare type GCtor<T> = Constructors.GCtor<T>;
export interface IBase {
    base: boolean;
}
export declare class Base implements IBase {
    base: true;
    constructor(...arg: any[]);
}
/**
 * questo pattern prevese l'uso di Mixin che accettano un
 * solo parametro nel costruttore.
 */
export declare class Mix<MixedInterfaces> {
    superclass: GCtor<any>;
    constructor(superclass: GCtor<any>);
    with(...mixins: ComplexMixin<any>[]): GCtor<MixedInterfaces>;
}
export {};
