export function emptyString(el) {
    return el !== "";
}
export class Condizioni {
    constructor() { }
    // TODO creare strategie di riconoscimento classe
    oggettoUgualeCostruttore(object, constructor) {
        return object.constructor === constructor;
    }
    proprietàName(elemento, name) {
        return elemento.name === name;
    }
}
export class Condizionatore {
    static #condizionatori = [];
    #property;
    get property() {
        return this.#property;
    }
    set property(property) {
        this.#property = property;
    }
    #value;
    get value() {
        return this.#value;
    }
    set value(value) {
        this.#value = value;
    }
    // TODO eliminare - [ ] si /  - [ ] no
    // #result;
    // get result() {
    //   return this.#result;
    // }
    // set result(result) {
    //   this.#result = result;
    // }
    #servedArray = [];
    get servedArray() {
        return this.#servedArray;
    }
    set servedArray(servedArray) {
        this.#servedArray = servedArray;
    }
    id;
    constructor(value, property) {
        this.#property = property;
        this.#value = value;
        Condizionatore.#condizionatori.push(this);
        this.id = Condizionatore.#condizionatori.length;
    }
    condizione = (oggetto) => {
        if (!this.property)
            throw Error();
        return oggetto[this.property] === this.value;
    };
    condizioneForEach = (oggetto) => {
        let servedArray = this.servedArray;
        if (!this.property)
            throw Error();
        if (oggetto[this.property] === this.value) {
            servedArray.push(oggetto);
        }
        return this;
    };
}
