import * as Mixins from "../../lib/types/Mixin/Mixins.js";

type ComplexMixin<T> = Mixins.ComplexMixin<T>;

export interface IPriorita {
  __type: Symbol;
  priorità: string;
}
export const Priorita: ComplexMixin<IPriorita> = function (Base, id: number) {
  return class extends Base implements IPriorita {
    __type: Symbol = Symbol("priorità");
    #prioritàId = id;
    get prioritàId() {
      return this.#prioritàId;
    }
    #priorità: string = "";
    get priorità() {
      return this.#priorità;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#priorità = arg[this.#prioritàId];
    }
  };
};
