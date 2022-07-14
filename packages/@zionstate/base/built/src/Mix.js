import { Name as n } from "../lib/mixins/Name.js";
import { Surname as s } from "../lib/mixins/Surname.js";
export const Surname = s;
export const Name = n;
/**
 * Usage:
 * ```
 * class Name {
 *   constructor(public name:string){}
 * }
 * class MyClass extends Mixin(Name){
 *   param = 'param'
 * }
 * const nw = new MyClass('new value')
 * ```
 * @param Superclass
 * @returns
 */
export const Mixin = (Superclass) => {
    class NewClass extends Superclass {
        constructor(...arg) {
            super(...arg);
        }
    }
    return NewClass;
};
/**
 * NOT YET TESTED
 * Usage:
 * ```
 * class MyClass extends EnhancedMixin(MyBaseClass).with(Name)
 * ```
 * @param Superclass
 * @returns
 */
export const EnhancedMixin = (Superclass) => new Mix(Superclass);
export class Mix {
    Superclass;
    constructor(Superclass) {
        this.Superclass = Superclass;
    }
    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.Superclass);
    }
}
