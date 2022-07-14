import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface ISlug {
    __type: Symbol;
    slug: string;
}
export declare const Slug: ComplexMixin<ISlug>;
export {};
