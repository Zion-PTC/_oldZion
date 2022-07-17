import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ISlug {
  __type: Symbol;
  slug: string;
}
export const Slug: ComplexMixin<ISlug> = function (Base, id: number) {
  return class extends Base implements ISlug {
    __type: Symbol = Symbol("slug");
    #slugId = id;
    get slugId() {
      return this.#slugId;
    }
    #slug: string;
    get slug() {
      return this.#slug;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#slug = arg[this.#slugId];
    }
  };
};
