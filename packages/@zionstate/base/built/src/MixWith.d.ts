import { mixins } from "../lib/types";
/**
 * this version kinda works but there is still a TS error.
 */
export {};
declare type MixinType = mixins.MixinTypeNoArgs;
/**
 * This is the first version of the mix with implemantation.
 * It works but it needs a dirty trick to have the
 * Typechecking return the correct value, but it actually
 * creates those from some reconstructed interface which is
 * drastically substituted to the original type:
 * ```js
 * // creates an interface mergin the 3 classes
 * interface IMixer extends IName, ISurname, Base {}
 *
 * const Mixer = new Mix<typeof Base, typeof Name | typeof Surname>(Base).with(
 *   Name,
 *   Surname
 * ) as unknown as GConstructor<IMixer>;
 *
 * const obj = new Mixer();
 * ```
 */
export declare class Mix<SuperclassGeneric extends new () => {}, MixinGeneric extends MixinType> {
    superclass: SuperclassGeneric;
    constructor(superclass: SuperclassGeneric);
    with(...mixins: MixinGeneric[]): MixinGeneric;
}
