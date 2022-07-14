export const isInCheatSheet = function (Base, id) {
    return class extends Base {
        __type = Symbol("isInCheatSheet");
        #isInCheatSheetId = id;
        get isInCheatSheetId() {
            return this.#isInCheatSheetId;
        }
        #isInCheatSheet = false;
        get isInCheatSheet() {
            return this.#isInCheatSheet;
        }
        constructor(...arg) {
            super(...arg);
            this.#isInCheatSheet = arg[this.#isInCheatSheetId];
        }
    };
};
