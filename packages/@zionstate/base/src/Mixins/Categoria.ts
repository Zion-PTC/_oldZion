import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ICategoria {
  __type: Symbol;
  categoria: string;
}
export const Categoria: ComplexMixin<ICategoria> = function (Base, id: number) {
  return class extends Base implements ICategoria {
    __type: Symbol = Symbol("categoria");
    #categoriaId = id;
    get categoriaId() {
      return this.#categoriaId;
    }
    #categoria: string = "";
    get categoria() {
      return this.#categoria;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#categoria = arg[this.#categoriaId];
    }
  };
};
