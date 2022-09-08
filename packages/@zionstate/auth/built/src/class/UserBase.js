import { ramArray } from "../lib/array.js";
export class Userbase {
    #strategy;
    users = [];
    constructor(strategy) {
        if (strategy == "ram-array")
            this.#strategy = ramArray;
    }
    async userExists(name) {
        if (this.#strategy)
            return this.#strategy(name, this.users);
    }
}
