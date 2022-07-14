import * as Mixins from "./Mixins.js";
export declare type MixinDecoratoBroad = (mixin: any) => any;
export declare type MixinDecorator_Mixin = (mixin: Mixins.MixinAny) => any;
export declare type MixinDecorator_Mixin_Mixin = (mixin: Mixins.MixinAny) => Mixins.MixinAny;
export declare type MixinDecorator = (mixin: (superclass: new (...arg: any[]) => {}) => {}) => <T>(superclass: new (...arg: any[]) => {}) => T extends Object ? T : never;
