export const Path = function (Base, id) {
    return class extends Base {
        __type = Symbol("path");
        #pathId = id;
        get pathId() {
            return this.#pathId;
        }
        #path;
        get path() {
            return this.#path;
        }
        constructor(...arg) {
            super(...arg);
            this.#path = arg[this.#pathId];
        }
    };
};
