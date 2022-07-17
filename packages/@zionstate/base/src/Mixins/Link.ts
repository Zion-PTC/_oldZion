import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ILink {
  __type: Symbol;
  link: string;
}
export const Link: ComplexMixin<ILink> = function (Base, id: number) {
  return class extends Base implements ILink {
    __type: Symbol = Symbol("link");
    #linkId = id;
    get linkId() {
      return this.#linkId;
    }
    #link: string;
    get link() {
      return this.#link;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#link = arg[this.#linkId];
    }
  };
};
