var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ZionYaml } from "@zionrepack/yaml/built/src/ZionYaml.js";
import { aggiungi } from "../lib/aggiungi.js";
import { getPackages } from "../lib/packages.js";
import { staticImplements } from "./Primitive.js";
var PackageEnums;
(function (PackageEnums) {
    PackageEnums["npm"] = "npm";
    PackageEnums["yarn"] = "yarn";
    PackageEnums["brew"] = "homebrew";
    PackageEnums["apt"] = "apt";
    PackageEnums["helm"] = "helm";
})(PackageEnums || (PackageEnums = {}));
var PackageCategoriaEnums;
(function (PackageCategoriaEnums) {
    PackageCategoriaEnums["default"] = "Nessuna categoria \u00E8 stata fornita";
    PackageCategoriaEnums["graphVisualization"] = "Graph Visualization";
    PackageCategoriaEnums["graphManipulation"] = "Graph Manipulation";
    PackageCategoriaEnums["mdManipulation"] = "MarkdownFiles Manipulation, .md";
    PackageCategoriaEnums["mdxManipulation"] = "MarkdownX Manipulatin, .mds";
    PackageCategoriaEnums["htmlManiputalion"] = "HTML files Manipulation, .html";
    PackageCategoriaEnums["yamlManipulation"] = "Yaml files Manipulation, .yaml";
    PackageCategoriaEnums["iCal"] = "iCal Interactions";
})(PackageCategoriaEnums || (PackageCategoriaEnums = {}));
class APackage {
    url;
    type;
    descrizione;
    nome;
    static #packages = [];
    static get packages() {
        return APackage.#packages;
    }
    static mostraPackages() {
        let obj = [];
        function add(pack) {
            let obj = {};
            aggiungi(obj, "nome", pack, "nome");
            aggiungi(obj, "type", pack, "type");
            // aggiungi<MostraPackages>(obj, "url", pack, "url");
            aggiungi(obj, "categoria", pack, "categoria");
            // aggiungi<MostraPackages>(obj, "descrizione", pack, "descrizione");
            this.push(obj);
        }
        APackage.packages.forEach(add, obj);
        console.table(obj);
    }
    constructor(url, type = "npm", descrizione = "Nessuna descrizione è stata fornita", nome = "Nessun nome fornito") {
        this.url = url;
        this.type = type;
        this.descrizione = descrizione;
        this.nome = nome;
        APackage.#packages.push(this);
    }
}
let Package = class Package extends APackage {
    url;
    descrizione;
    #links = [];
    get links() {
        let array = [];
        function aggiungilink(link) {
            array.push(link.href);
        }
        this.#links.forEach(aggiungilink);
        return array;
    }
    set links(links) {
        if (Array.isArray(links))
            links.forEach(this.#aggiungiURL);
        else
            this.#links.push(new URL(links));
    }
    #categoria = [];
    get categoria() {
        return this.#categoria;
    }
    set categoria(categoria) {
        this.#categoria = categoria;
    }
    constructor(url = "https://no.url.was/given", descrizione = "Nessuna descrizione è stata fornita", categoria = "default") {
        super(url, "npm", descrizione);
        this.url = url;
        this.descrizione = descrizione;
        if (Array.isArray(url))
            url.forEach(this.#aggiungiURL);
        else
            this.#links.push(new URL(url));
        this.#categoria = categoria;
    }
    #aggiungiURL = (url) => {
        this.links = url;
    };
};
Package = __decorate([
    staticImplements()
], Package);
export { Package };
let packagesMDs = getPackages();
function creaPackage(path) {
    let yaml = new ZionYaml(path);
    let parsed = yaml.parsed;
    let nwPackage = new Package();
    if (parsed.nome)
        nwPackage.nome = parsed.nome;
    if (parsed.categoria) {
        nwPackage.categoria = parsed.categoria;
    }
}
packagesMDs.forEach(creaPackage);
