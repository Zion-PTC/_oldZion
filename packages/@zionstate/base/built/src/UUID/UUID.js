import { validate, } from "uuid";
export { validate, v5 } from "uuid";
export class UUID {
    static #validate = validate;
    value;
    from;
    constructor(string, from) {
        if (!UUID.#validate(string)) {
            throw new Error("La string passata non è un codice uuid valido");
        }
        this.value = string;
        this.from = from;
    }
}
