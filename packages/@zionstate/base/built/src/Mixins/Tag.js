export const Tag = function (Base, id) {
    return class extends Base {
        __type = Symbol("tag");
        #tagId = id;
        get tagId() {
            return this.#tagId;
        }
        #tag;
        get tag() {
            return this.#tag;
        }
        constructor(...arg) {
            super(...arg);
            this.#tag = arg[this.#tagId];
        }
    };
};
