import * as Mixins from "../../lib/types/Mixin/Mixins.js";
declare type ComplexMixin<T> = Mixins.ComplexMixin<T>;
export interface IAnnotazioni {
    __type: Symbol;
    annotazioni: string[];
}
export declare const Annotazioni: ComplexMixin<IAnnotazioni>;
export {};
