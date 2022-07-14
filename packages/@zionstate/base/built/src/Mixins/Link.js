export const Link = function (Base, id) {
    return class extends Base {
        __type = Symbol("link");
        #linkId = id;
        get linkId() {
            return this.#linkId;
        }
        #link;
        get link() {
            return this.#link;
        }
        constructor(...arg) {
            super(...arg);
            this.#link = arg[this.#linkId];
        }
    };
};
