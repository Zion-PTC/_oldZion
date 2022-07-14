var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { Esempio as Ex } from '../Abstracts/Esempio.js';
import { ZionYaml } from "@zionrepack/yaml/built/src/ZionYaml.js";
import { aggiungi } from "../lib/aggiungi.js";
import { getEsercizi } from "../lib/esercizi.js";
import { DesignPattern } from "./DesignPattern.js";
import { staticImplements } from "./Primitive.js";
export class AEsercizio {
    oggetti;
    id;
    nome;
    autore;
    file;
    static #esercizi = [];
    static get esercizi() {
        return this.#esercizi;
    }
    static mostraEsercizi = () => {
        let obj = [];
        function add(esercizio) {
            let obj = {};
            aggiungi(obj, "nome", esercizio, "nome");
            aggiungi(obj, "autore", esercizio, "autore");
            aggiungi(obj, "oggetti", esercizio, "oggetti");
            aggiungi(obj, "file", esercizio, "file", false, [
                "file",
                "path",
            ]);
            this.push(obj);
        }
        AEsercizio.esercizi.forEach(add, obj);
        console.table(obj);
    };
    constructor(oggetti = [], id, nome, autore, file) {
        this.oggetti = oggetti;
        this.id = id;
        this.nome = nome;
        this.autore = autore;
        this.file = file;
        AEsercizio.#esercizi.push(this);
        this.id = AEsercizio.#esercizi.length;
    }
}
let Esercizio = class Esercizio extends AEsercizio {
    oggetti;
    id;
    nome;
    autore;
    file;
    constructor(oggetti = [], id, nome, autore, file) {
        super(oggetti, id, nome, autore, file);
        this.oggetti = oggetti;
        this.id = id;
        this.nome = nome;
        this.autore = autore;
        this.file = file;
    }
    /**
     * aggiunge anche l'esercizio all'oggetto
     * @param oggetto
     * @returns
     */
    aggiungiOggetto(oggetto) {
        this.oggetti.push(oggetto);
        oggetto.aggiungiEsercizio(this);
        return this;
    }
    mostraOggetti() {
        let array = [];
        const aggiungiNomeOggetto = function (oggetto) {
            array.push(oggetto.nome);
        };
        this.oggetti.forEach(aggiungiNomeOggetto);
        console.log(array.join(", "));
        return this;
    }
    runFile() {
        return this;
    }
    showCode() {
        return this;
    }
};
Esercizio = __decorate([
    staticImplements()
], Esercizio);
export { Esercizio };
let EserciziMDs = getEsercizi();
function creaBlogPost(path) {
    let yaml = new ZionYaml(path);
    let parsed = yaml.parsed;
    let nwEsercizio = new Esercizio();
    if (parsed.nome)
        nwEsercizio.nome = parsed.nome;
    if (parsed.autore)
        nwEsercizio.autore = parsed.autore;
    if (parsed.oggetti) {
        let res = parsed.oggetti.map((oggetto) => {
            let res = DesignPattern.designPatterns.find((dp) => dp.nome === oggetto);
            if (res)
                return res;
        });
        res.forEach((res) => {
            if (res)
                nwEsercizio.aggiungiOggetto(res);
        });
    }
    if (parsed.file)
        nwEsercizio.file = parsed.file;
}
EserciziMDs.forEach(creaBlogPost);
