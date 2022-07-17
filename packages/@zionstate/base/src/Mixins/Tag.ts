import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ITag {
  __type: Symbol;
  tag: string;
}
export const Tag: ComplexMixin<ITag> = function (Base, id: number) {
  return class extends Base implements ITag {
    __type: Symbol = Symbol("tag");
    #tagId = id;
    get tagId() {
      return this.#tagId;
    }
    #tag: string;
    get tag() {
      return this.#tag;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#tag = arg[this.#tagId];
    }
  };
};
