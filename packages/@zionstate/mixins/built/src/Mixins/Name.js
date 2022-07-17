export const Name = function (Base, id) {
    return class Name extends Base {
        __type = Symbol('name');
        #nameId = id;
        get nameId() {
            return this.#nameId;
        }
        #name = "";
        get name() {
            return this.#name;
        }
        constructor(...arg) {
            super(...arg);
            this.#name = arg[this.#nameId];
        }
    };
};
