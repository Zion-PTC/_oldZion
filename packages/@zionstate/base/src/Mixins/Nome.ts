import * as Mixins from "../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface INome {
  __type: Symbol;
  nome: string;
}
export const Nome: ComplexMixin<INome> = function (Base, id: number) {
  return class extends Base implements INome {
    __type: Symbol = Symbol("nome");
    #nomeId = id;
    get nomeId() {
      return this.#nomeId;
    }
    #nome: string = "";
    get nome() {
      return this.#nome;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#nome = arg[this.#nomeId];
    }
  };
};
