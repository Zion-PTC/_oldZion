export const URL = function (Base, id) {
    return class extends Base {
        __type = Symbol("url");
        #urlId = id;
        get urlId() {
            return this.#urlId;
        }
        #url;
        get url() {
            return this.#url;
        }
        constructor(...arg) {
            super(...arg);
            this.#url = arg[this.#urlId];
        }
    };
};
