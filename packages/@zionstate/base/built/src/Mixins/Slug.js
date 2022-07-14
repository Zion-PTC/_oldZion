export const Slug = function (Base, id) {
    return class extends Base {
        __type = Symbol("slug");
        #slugId = id;
        get slugId() {
            return this.#slugId;
        }
        #slug;
        get slug() {
            return this.#slug;
        }
        constructor(...arg) {
            super(...arg);
            this.#slug = arg[this.#slugId];
        }
    };
};
