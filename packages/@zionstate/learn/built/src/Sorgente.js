var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Sorgente_1;
import { ZionYaml } from "@zionrepack/yaml";
import { findItem } from "../lib/find.js";
import { getSorgenti } from "../lib/sorgenti.js";
import { DesignPattern, } from "./DesignPattern.js";
import { staticImplements } from "./Primitive.js";
var SorgenteEnums;
(function (SorgenteEnums) {
    SorgenteEnums["libro"] = "libro";
    SorgenteEnums["blog"] = "blog";
    SorgenteEnums["coder"] = "coder";
})(SorgenteEnums || (SorgenteEnums = {}));
export class ASorgente {
    designPatterns;
    static #sorgenti = [];
    static get sorgenti() {
        return ASorgente.#sorgenti;
    }
    id;
    slug = "slug della sorgente";
    titolo = "Titolo del documento";
    autori = [];
    tutorial = [];
    type = "blog";
    link = new URL("https://no-address.was/given");
    github = new URL("https://no-address.was/given");
    constructor(designPatterns = []) {
        this.designPatterns = designPatterns;
        ASorgente.#sorgenti.push(this);
        this.id = ASorgente.#sorgenti.length;
    }
}
let Sorgente = Sorgente_1 = class Sorgente extends ASorgente {
    // static sorgenti: Sorgente[] = [];
    static mostraSorgenti() {
        let obj = {};
        function creaSorgenti(sorgente) {
            obj[sorgente.titolo] = {
                slug: sorgente.slug,
                autori: sorgente.autori.join(", "),
                tutorials: sorgente.tutorial,
                designPatterns: sorgente.designPatterns.map((desPatt) => desPatt.nome)
                    .length,
                link: sorgente.link.href === "https://no-address.was/given"
                    ? "❌"
                    : sorgente.link.href,
                github: sorgente.github.href === "https://no-address.was/given"
                    ? "❌"
                    : sorgente.github.href,
                type: SorgenteEnums[sorgente.type],
            };
        }
        Sorgente_1.sorgenti.forEach(creaSorgenti);
        console.table(obj);
    }
    get designPatternSenzaEsempi() {
        let aggiungiSenzaEsempio = this.#aggiungiSenzaEsempio;
        let array = [];
        this.designPatterns.forEach(aggiungiSenzaEsempio, array);
        return array;
    }
    get designPatternConEsempi() {
        let aggiungiConEsempio = this.#aggiungiConEsempio;
        let array = [];
        this.designPatterns.forEach(aggiungiConEsempio, array);
        return array;
    }
    constructor() {
        super();
        Sorgente_1.sorgenti.push(this);
        this.id = Sorgente_1.sorgenti.length;
    }
    show() {
        console.log(`Titolo del ${this.type}: ${this.titolo}, autori del ${this.type}: ${this.autori}`);
        return this;
    }
    showPatterns() {
        let array = [];
        let aggiungiNome = function (e) {
            array.push(e.nome);
        };
        this.designPatterns.forEach(aggiungiNome);
        console.log(array.join(", "));
        return this;
    }
    addDesignPattern(pattern) {
        this.designPatterns.push(pattern);
        pattern.aggiungiSorgente(this);
        return this;
    }
    aggiungiTutorial(tutorial) {
        return this;
    }
    mostraPatternID(pattern) {
        // torva indice del pattern nella lista di pattern della
        // sorgente
        let trovaViaID = this.#trovaViaId;
        console.log(this.designPatterns.findIndex(trovaViaID, pattern));
        return this.designPatterns.findIndex(trovaViaID, pattern);
    }
    mostraDesignPatternSenzaEsempi(categoria) {
        let aggiungiNome = this.#aggiungiNome, appartieneACategoria = this.#appartieneACategoria, array = [];
        if (!categoria) {
            this.designPatternSenzaEsempi.forEach(aggiungiNome, array);
        }
        else {
            let patternPerCategoria = this.designPatternSenzaEsempi.filter(appartieneACategoria, categoria);
            patternPerCategoria.forEach(aggiungiNome, array);
        }
        console.log(array.join(", "));
        return this;
    }
    mostraDesignPatternConEsempi(categoria) {
        let aggiungiNome = this.#aggiungiNome, appartieneACategoria = this.#appartieneACategoria, array = [];
        if (!categoria) {
            this.designPatternConEsempi.forEach(aggiungiNome, array);
        }
        else {
            let patternPerCategoria = this.designPatternConEsempi.filter(appartieneACategoria, categoria);
            patternPerCategoria.forEach(aggiungiNome, array);
        }
        console.log(array.join(", "));
        return this;
    }
    contaDesignPatternSenzaEsempi(categoria) {
        if (!categoria) {
            let res = this.designPatternSenzaEsempi;
            console.log("Manacano", res.length, "Pattern in totale");
        }
        else {
            let appartieneACategoria = this.#appartieneACategoria;
            let patternPerCategoria = this.designPatternSenzaEsempi.filter(appartieneACategoria, categoria);
            console.log("Mancano", patternPerCategoria.length, categoria, "pattern");
        }
        return this;
    }
    #aggiungiSenzaEsempio(pattern) {
        if (pattern.esempi.length === 0)
            this.push(pattern);
    }
    #aggiungiConEsempio = function (pattern) {
        if (pattern.esempi.length !== 0)
            this.push(pattern);
    };
    #aggiungiNome = function (pattern) {
        this.push(pattern.nome);
    };
    #aggiungiNomeSenzaEsempio = function (pattern) {
        if (pattern.esempi.length === 0)
            this.push(pattern.nome);
    };
    #appartieneACategoria = function (pattern) {
        if (pattern.categoria === this)
            return pattern;
    };
    #trovaViaId(pattern) {
        if (pattern.id === this.id)
            return pattern;
    }
};
Sorgente = Sorgente_1 = __decorate([
    staticImplements()
], Sorgente);
export { Sorgente };
const sorgentiPath = getSorgenti();
function creaSorgenteFromMd(path) {
    let yaml = new ZionYaml(path);
    let parsed = yaml.parsed;
    let nwSorgente = new Sorgente();
    if (parsed.slug)
        nwSorgente.slug = parsed.slug;
    if (parsed.titolo)
        nwSorgente.titolo = parsed.titolo;
    if (parsed.autori)
        nwSorgente.autori = parsed.autori;
    if (parsed.type)
        nwSorgente.type = parsed.type;
    if (parsed.link)
        nwSorgente.link = new URL(parsed.link);
    if (parsed.github)
        nwSorgente.github = new URL(parsed.github);
    if (parsed.designPatterns)
        findItem("nome", DesignPattern, "designPatterns", parsed, nwSorgente, "addDesignPattern");
    return nwSorgente;
}
sorgentiPath.forEach(creaSorgenteFromMd);
