import * as Mixins from "../../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface IPath {
  __type: Symbol;
  path: string;
}
export const Path: ComplexMixin<IPath> = function (Base, id: number) {
  return class extends Base implements IPath {
    __type: Symbol = Symbol("path");
    #pathId = id;
    get pathId() {
      return this.#pathId;
    }
    #path: string;
    get path() {
      return this.#path;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#path = arg[this.#pathId];
    }
  };
};
