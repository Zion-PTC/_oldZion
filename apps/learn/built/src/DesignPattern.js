var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ZionYaml } from "@zionrepack/yaml";
import { getDesignPatterns } from "../lib/designPatterns.js";
import { staticImplements } from "./Primitive.js";
var Folders;
(function (Folders) {
    Folders["compEInher"] = "Composition vs Inheritance";
    Folders["dataStructure"] = "Data Structure";
    Folders["developerModzilla"] = "Developer Modizilla";
    Folders["nodeModules"] = "Node Modules";
    Folders["patterns"] = "Patterns";
    Folders["proJavascriptPatternsDesign"] = "Pro Javascript Pattern Design";
    Folders["typescript"] = "TypeScript";
})(Folders || (Folders = {}));
class ADesignPattern {
    id;
    nome;
    categoria;
    sorgenti;
    esempi;
    tutorials;
    posts;
    priorità;
    isInCheatSheet;
    static #designPatterns = [];
    static get designPatterns() {
        return ADesignPattern.#designPatterns;
    }
    static mostraDesignPatterns() {
        console.table(ADesignPattern.designPatterns);
    }
    static mostraPatternSenzaEsempi() {
        let array = [];
        let aggiungiNome = ADesignPattern.#aggiungiNome;
        DesignPattern.designPatterns.forEach(aggiungiNome, array);
        if (array.length !== 0)
            ADesignPattern.#logArray(array);
        if (array.length === 0)
            ADesignPattern.#logComplete();
        return this;
    }
    static #aggiungiNome = function (pattern) {
        if (pattern.esempi.length === 0)
            this.push(pattern.nome);
    };
    static #logArray(array) {
        console.log("Pattern ancora da fare", array.join(", "));
    }
    static #logComplete() {
        console.log("Missione Completa!");
    }
    constructor(id = 0, nome = "Aggiungere un nome per il design pattern", categoria = "non definito", sorgenti = [], esempi = [], tutorials = [], posts = [], priorità = "Bassa", isInCheatSheet = false) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.sorgenti = sorgenti;
        this.esempi = esempi;
        this.tutorials = tutorials;
        this.posts = posts;
        this.priorità = priorità;
        this.isInCheatSheet = isInCheatSheet;
        ADesignPattern.#designPatterns.push(this);
        this.id = ADesignPattern.#designPatterns.length;
    }
}
let DesignPattern = class DesignPattern extends ADesignPattern {
    nome;
    categoria;
    sorgenti;
    esempi;
    tutorials;
    posts;
    priorità;
    isInCheatSheet;
    constructor(nome = "Aggiungere un nome per il design pattern", categoria = "non definito", sorgenti = [], esempi = [], tutorials = [], posts = [], priorità = "Bassa", isInCheatSheet = false) {
        super();
        this.nome = nome;
        this.categoria = categoria;
        this.sorgenti = sorgenti;
        this.esempi = esempi;
        this.tutorials = tutorials;
        this.posts = posts;
        this.priorità = priorità;
        this.isInCheatSheet = isInCheatSheet;
    }
    aggiungiSorgente(sorgente) {
        this.sorgenti.push(sorgente);
        return this;
    }
    aggiungiEsercizio(esempio) {
        this.esempi.push(esempio);
        return this;
    }
    aggiungiTutorial(tutorial) {
        this.tutorials.push(tutorial);
        return this;
    }
    aggiungiBlogPost(blog) {
        this.posts.push(blog);
        return this;
    }
    mostraSorgenti() {
        let aggiungiLink = this.#aggiungiLink;
        let array = [];
        this.sorgenti.forEach(aggiungiLink, array);
        console.log(array);
        return this;
    }
    mostraEsempi() {
        const aggiungiNome = function (esempio) {
            if (esempio.nome)
                array.push(esempio.nome);
        };
        let array = [];
        this.esempi.forEach(aggiungiNome);
        console.log(array.join(", "));
        return this;
    }
    #aggiungiLink = function (sorgente) {
        if (sorgente.link)
            this.push(sorgente.link.href);
        if (!sorgente.link)
            this.push(sorgente.titolo);
    };
};
DesignPattern = __decorate([
    staticImplements()
], DesignPattern);
export { DesignPattern };
const designPattersMds = getDesignPatterns();
function creaDesignPatternFromMd(path) {
    let yaml = new ZionYaml(path);
    let parsed = yaml.parsed;
    let nwDesignPattern = new DesignPattern();
    if (parsed.nome)
        nwDesignPattern.nome = parsed.nome;
    if (parsed.categoria)
        nwDesignPattern.categoria = parsed.categoria;
    if (parsed.isInCheatSheet)
        nwDesignPattern.isInCheatSheet = parsed.isInCheatSheet;
}
designPattersMds.forEach(creaDesignPatternFromMd);
