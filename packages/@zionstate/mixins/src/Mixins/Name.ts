import { ComplexMixin } from "../lib/zionTypes";

export interface IName {
  __type:Symbol;
  name: string;
}
export const Name: ComplexMixin<IName> = function (Base, id: number) {
  return class Name extends Base implements IName {
    __type: Symbol= Symbol('name')
    #nameId = id;
    get nameId() {
      return this.#nameId;
    }
    #name: string = "";
    get name() {
      return this.#name;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#name = arg[this.#nameId];
    }
  };
};
