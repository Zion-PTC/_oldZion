import * as Mixins from "../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface IURL {
  __type: Symbol;
  url: URL;
}
export const URL: ComplexMixin<IURL> = function (Base, id: number) {
  return class extends Base implements IURL {
    __type: Symbol = Symbol("url");
    #urlId = id;
    get urlId() {
      return this.#urlId;
    }
    #url: URL;
    get url() {
      return this.#url;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#url = arg[this.#urlId];
    }
  };
};
