export const Name = function (Base, id) {
    return class extends Base {
        __type = Symbol("blood");
        #bloodId = id;
        get bloodId() {
            return this.#bloodId;
        }
        #blood = "";
        get blood() {
            return this.#blood;
        }
        constructor(...arg) {
            super(...arg);
            this.#blood = arg[this.#bloodId];
        }
    };
};
