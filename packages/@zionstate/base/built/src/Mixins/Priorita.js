export const Priorita = function (Base, id) {
    return class extends Base {
        __type = Symbol("priorità");
        #prioritàId = id;
        get prioritàId() {
            return this.#prioritàId;
        }
        #priorità = "";
        get priorità() {
            return this.#priorità;
        }
        constructor(...arg) {
            super(...arg);
            this.#priorità = arg[this.#prioritàId];
        }
    };
};
