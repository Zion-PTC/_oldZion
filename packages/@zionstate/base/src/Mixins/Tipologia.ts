import * as Mixins from "../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface ITipologia {
  __type: Symbol;
  tipologia: string;
}
export const Tipologia: ComplexMixin<ITipologia> = function (Base, id: number) {
  return class extends Base implements ITipologia {
    __type: Symbol = Symbol("tipologia");
    #tipologiaId = id;
    get tipologiaId() {
      return this.#tipologiaId;
    }
    #tipologia: string;
    get tipologia() {
      return this.#tipologia;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#tipologia = arg[this.#tipologiaId];
    }
  };
};
