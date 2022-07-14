import * as base from "@zionstate/base";
type ComplexMixin<T> = base.types.mixins.ComplexMixin<T>;

export interface IisInCheatSheet {
  __type: Symbol;
  isInCheatSheet: boolean;
}
export const isInCheatSheet: ComplexMixin<IisInCheatSheet> = function (
  Base,
  id: number
) {
  return class extends Base implements IisInCheatSheet {
    __type: Symbol = Symbol("isInCheatSheet");
    #isInCheatSheetId = id;
    get isInCheatSheetId() {
      return this.#isInCheatSheetId;
    }
    #isInCheatSheet: boolean = false;
    get isInCheatSheet() {
      return this.#isInCheatSheet;
    }
    constructor(...arg: any[]) {
      super(...arg);
      this.#isInCheatSheet = arg[this.#isInCheatSheetId];
    }
  };
};
