import { Name as n } from "../lib/mixins/Name.js";
import { Surname as s } from "../lib/mixins/Surname.js";

export const Surname = s;
export const Name = n;
export type Constructor = new (...args: any[]) => {};

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
export const Mixin = <T extends Constructor>(Superclass: T) => {
  class NewClass extends Superclass {
    constructor(...arg: any[]) {
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
export const EnhancedMixin = <T extends Constructor>(Superclass: T) =>
  new Mix<T>(Superclass);

export class Mix<T extends Constructor> {
  constructor(public Superclass: T) {}
  with(...mixins: typeof Mixin[]) {
    return mixins.reduce((c, mixin) => mixin(c), this.Superclass);
  }
}
