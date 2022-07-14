var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { staticImplements as si } from "../lib/decorators/staticImplements.js";
const staticImplements = si;
export class ABase {
    type;
    static #basi = [];
    static get basi() {
        return ABase.#basi;
    }
    static mostraBasi() {
        console.table(ABase.basi);
    }
    id;
    constructor(type = "nd") {
        this.type = type;
        ABase.#basi.push(this);
        this.id = ABase.basi.length;
    }
}
let Base = class Base extends ABase {
};
Base = __decorate([
    staticImplements()
], Base);
export { Base };
