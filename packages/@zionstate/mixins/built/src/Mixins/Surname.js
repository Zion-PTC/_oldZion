export const Surname = function (Base, id) {
    return class Surname extends Base {
        #surnameId = id;
        get surnameId() {
            return this.#surnameId;
        }
        #surname = "";
        get surname() {
            return this.#surname;
        }
        constructor(...arg) {
            super(...arg);
            this.#surname = arg[this.#surnameId];
        }
    };
};
