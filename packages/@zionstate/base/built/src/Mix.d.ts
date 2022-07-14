export declare const Surname: <T extends import("../lib/mixins/Surname.js").Constructor>(Superclass: T) => {
    new (...arg: any[]): {
        surname: string;
    };
} & T;
export declare const Name: <T extends import("../lib/mixins/Name.js").Constructor>(Superclass: T) => {
    new (...arg: any[]): {
        name: string;
    };
} & T;
export declare type Constructor = new (...args: any[]) => {};
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
export declare const Mixin: <T extends Constructor>(Superclass: T) => {
    new (...arg: any[]): {};
} & T;
/**
 * NOT YET TESTED
 * Usage:
 * ```
 * class MyClass extends EnhancedMixin(MyBaseClass).with(Name)
 * ```
 * @param Superclass
 * @returns
 */
export declare const EnhancedMixin: <T extends Constructor>(Superclass: T) => Mix<T>;
export declare class Mix<T extends Constructor> {
    Superclass: T;
    constructor(Superclass: T);
    with(...mixins: typeof Mixin[]): T;
}
