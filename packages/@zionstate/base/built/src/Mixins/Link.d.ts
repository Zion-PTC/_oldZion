import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ILink {
    __type: Symbol;
    link: string;
}
export declare const Link: ComplexMixin<ILink>;
export {};
