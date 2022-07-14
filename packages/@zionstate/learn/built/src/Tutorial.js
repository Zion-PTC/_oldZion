var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DesignPattern } from "./DesignPattern.js";
import { Sorgente } from "./Sorgente.js";
import { getTutorials } from "../lib/tutorials.js";
import { ZionYaml } from "@zionrepack/yaml";
import { staticImplements } from "./Primitive.js";
import { findItem } from "../lib/find.js";
var TutorialEnums;
(function (TutorialEnums) {
    TutorialEnums["youTube"] = "You Tube";
    TutorialEnums["blogPost"] = "Blog Post";
    TutorialEnums["book"] = "Book";
    TutorialEnums["videoCourse"] = "Video Course";
})(TutorialEnums || (TutorialEnums = {}));
export class ATutorial {
    // STATIC
    static #tutorials = [];
    static get tutorials() {
        return ATutorial.#tutorials;
    }
    static mostraTutorials() {
        let obj = {};
        function creaOggetto(tutorial) {
            obj[tutorial.titolo] = {
                type: TutorialEnums[tutorial.type],
                links: tutorial.links.length,
                github: tutorial.github === "no github" ? undefined : "✅",
                designPatter: tutorial.designPattern
                    .map((oggetto) => oggetto.nome)
                    .join(" "),
                sorgente: tutorial.sorgente.map((sor) => sor.slug).join(" "),
                annotazioni: tutorial.annotazioni.length > 0 ? "✅" : undefined,
                file: tutorial.file ? (tutorial.file.path ? "✅" : 0) : undefined,
            };
        }
        this.tutorials.forEach(creaOggetto);
        obj.totale = {
            links: this.tutorials
                .map((tut) => {
                return tut.links;
            })
                .flat().length,
        };
        return console.table(obj);
    }
    // INSTANCE
    #github;
    get github() {
        if (this.#github)
            return this.#github.href;
        return "no github";
    }
    set github(gituhubPath) {
        this.#github = new URL(gituhubPath);
    }
    #designPattern = [];
    get designPattern() {
        return this.#designPattern;
    }
    set designPattern(designPattern) {
        this.#designPattern.push(...designPattern);
    }
    #sorgente = [];
    get sorgente() {
        return this.#sorgente;
    }
    set sorgente(sorgente) {
        this.#sorgente.push(...sorgente);
    }
    #links = [];
    get links() {
        let arr = [];
        function getpath(link) {
            arr.push(link.href);
        }
        this.#links.forEach(getpath);
        return arr;
    }
    set links(linksPaths) {
        if (!Array.isArray(linksPaths))
            linksPaths = [linksPaths];
        let links = [];
        let type = this.type;
        function addtolinks(linkPath) {
            const newURL = new URL(linkPath);
            links.push(newURL);
            if (newURL.host === "www.youtube.com")
                type = "youTube";
        }
        linksPaths.forEach(addtolinks);
        this.type = type;
        this.#links.push(...links);
    }
    id;
    type = "blogPost";
    titolo = "titolo qui";
    annotazioni = [];
    file;
    constructor() {
        ATutorial.#tutorials.push(this);
        this.id = ATutorial.#tutorials.length;
    }
}
// function staticImplements<T>() {
//   return <U extends T>(constructor: U) => {
//     constructor;
//   };
// }
let Tutorial = class Tutorial extends ATutorial {
    aggiungiSorgente(sorgente) {
        this.sorgente = [sorgente];
        sorgente.aggiungiTutorial(this);
        return this;
    }
    aggiungiOggetto(oggetto) {
        this.designPattern.push(oggetto);
        oggetto.aggiungiTutorial(this);
        return this;
    }
    aggiungiAnnotazione(annotazione) {
        this.annotazioni.push(annotazione);
        return this;
    }
};
Tutorial = __decorate([
    staticImplements()
], Tutorial);
export { Tutorial };
const tutorialsPath = getTutorials();
function creaTutorial(path) {
    let yaml = new ZionYaml(path);
    let parsed = yaml.parsed;
    let nwTutorial = new Tutorial();
    if (parsed.titolo)
        nwTutorial.titolo = parsed.titolo;
    if (parsed.links)
        nwTutorial.links = parsed.links;
    if (parsed.type)
        nwTutorial.type = parsed.type;
    if (parsed.designPattern) {
        findItem("nome", DesignPattern, "designPatterns", parsed, nwTutorial, "aggiungiOggetto", "designPattern");
    }
    if (parsed.slug) {
        let res = Sorgente.sorgenti.find((sorgente) => sorgente.slug === parsed.slug);
        if (res)
            nwTutorial.aggiungiSorgente(res);
    }
    if (parsed.annotazioni)
        nwTutorial.annotazioni.push(...parsed.annotazioni);
    if (parsed.github)
        nwTutorial.github = parsed.github;
    if (parsed.file)
        nwTutorial.file = parsed.file;
    // nwTutorial.links = parsed.additionalPaths;
    return nwTutorial;
}
export let tutoPath = tutorialsPath.map(creaTutorial);
