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
export class DesignPattern {
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
    static mostraPatternSenzaEsempi() {
        let array = [];
        let aggiungiNome = DesignPattern.#aggiungiNome;
        DesignPattern.#designPatterns.forEach(aggiungiNome, array);
        if (array.length !== 0)
            DesignPattern.#logArray(array);
        if (array.length === 0)
            DesignPattern.#logComplete();
        return this;
    }
    static #aggiungiNome = function (pattern) {
        // TODO capire come far riferire al thisArg passato dal forEach
        //@ts-expect-error
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
        DesignPattern.#designPatterns.push(this);
        this.id = DesignPattern.#designPatterns.length;
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
        // TODO sistemare errore
        //@ts-expect-error
        if (sorgente.link)
            this.push(sorgente.link.href);
        // TODO sistemare errore
        //@ts-expect-error
        if (!sorgente.link)
            this.push(sorgente.titolo);
    };
}
export const chainOfResp = new DesignPattern();
chainOfResp.nome = "Chain of responsability";
chainOfResp.categoria = "Behavioral";
export const command = new DesignPattern();
command.nome = "Command";
command.categoria = "Behavioral";
export const interpreter = new DesignPattern();
interpreter.nome = "Interpreter";
interpreter.categoria = "Behavioral";
export const iterator = new DesignPattern();
iterator.nome = "Iterator";
iterator.categoria = "Behavioral";
export const mediator = new DesignPattern();
mediator.nome = "Mediator";
mediator.categoria = "Behavioral";
export const memento = new DesignPattern();
memento.nome = "Memento";
memento.categoria = "Behavioral";
export const observer = new DesignPattern();
observer.nome = "Observer";
observer.categoria = "Behavioral";
export const state = new DesignPattern();
state.nome = "State";
state.categoria = "Behavioral";
export const strategy = new DesignPattern();
strategy.nome = "Strategy";
strategy.categoria = "Behavioral";
strategy.isInCheatSheet = true;
export const templateMethod = new DesignPattern();
templateMethod.nome = "Template Method";
templateMethod.categoria = "Behavioral";
export const visitor = new DesignPattern();
visitor.nome = "Visitor";
visitor.categoria = "Behavioral";
export const abstractFactory = new DesignPattern();
abstractFactory.nome = "Abstract factory";
abstractFactory.categoria = "Creational";
abstractFactory.isInCheatSheet = true;
export const builder = new DesignPattern();
builder.nome = "Builder";
builder.categoria = "Creational";
export const factory = new DesignPattern();
factory.nome = "Factory";
factory.categoria = "Creational";
factory.isInCheatSheet = true;
export const prototype = new DesignPattern();
prototype.nome = "Prototype";
prototype.categoria = "Creational";
export const singleton = new DesignPattern();
singleton.nome = "Singleton";
singleton.categoria = "Creational";
singleton.isInCheatSheet = true;
export const adapter = new DesignPattern();
adapter.nome = "Adapter";
adapter.categoria = "Structural";
export const bridge = new DesignPattern();
bridge.nome = "Bridge";
bridge.categoria = "Structural";
export const composite = new DesignPattern();
composite.nome = "Composite";
composite.categoria = "Structural";
export const decorator = new DesignPattern();
decorator.nome = "Decorator";
decorator.categoria = "Structural";
decorator.isInCheatSheet = true;
export const facade = new DesignPattern();
facade.nome = "Facade";
facade.categoria = "Structural";
export const flyweight = new DesignPattern();
flyweight.nome = "Flywight";
flyweight.categoria = "Structural";
export const proxy = new DesignPattern();
proxy.nome = "Proxy";
proxy.categoria = "Structural";
export const nullObj = new DesignPattern();
nullObj.nome = "Null Object";
nullObj.categoria = "non definito";
export const lazyLoad = new DesignPattern();
lazyLoad.nome = "Lazy Load";
lazyLoad.categoria = "non definito";
export const interfacePattern = new DesignPattern();
interfacePattern.nome = "Interface pattern";
interfacePattern.categoria = "non definito";
export const mixin = new DesignPattern();
mixin.nome = "Mixins";
mixin.categoria = "non definito";
mixin.isInCheatSheet = true;
export const decoratorFunction = new DesignPattern();
mixin.nome = "Decorator Functions";
mixin.categoria = "non definito";
export const classExpressionPattern = new DesignPattern();
mixin.nome = "Class Expression Pattern";
mixin.categoria = "non definito";
