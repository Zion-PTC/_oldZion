// /// <reference path='../Namespaces/Knowledge.ts'/>
// // type ADesignPattern = Knowledge.ADesignPattern;
// type ISorgente = Knowledge.ISorgente;
// // type IEsempio = Knowledge.IEsempio
// type ITutorial = Knowledge.ITutorial;
// type IDesignPattern = Knowledge.IDesignPattern;
export class ADesignPattern {
    id;
    nome;
    categoria;
    sorgenti;
    esempi;
    tutorials;
    priorità;
    static #designPatterns = [];
    static mostraPatternSenzaEsempi() {
        //@ts-expect-error
        let array = [];
        let aggiungiNome = ADesignPattern.#aggiungiNome;
        //@ts-expect-error
        ADesignPattern.#designPatterns.forEach(aggiungiNome, array);
        //@ts-expect-error
        if (array.length !== 0)
            ADesignPattern.#logArray(array);
        if (array.length === 0)
            ADesignPattern.#logComplete();
        return this;
    }
    static #aggiungiNome = function (pattern) {
        //@ts-expect-error
        if (pattern.esempi.length === 0)
            this.push(pattern.nome);
    };
    static #logArray(array) {
        console.log('Pattern ancora da fare', array.join(', '));
    }
    static #logComplete() {
        console.log('Missione Completa!');
    }
    constructor(id = 0, nome = 'Aggiungere un nome per il design pattern', categoria = 'non definito', sorgenti = [], esempi = [], tutorials = [], priorità = 'Bassa') {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.sorgenti = sorgenti;
        this.esempi = esempi;
        this.tutorials = tutorials;
        this.priorità = priorità;
        ADesignPattern.#designPatterns.push(this);
        this.id = ADesignPattern.#designPatterns.length;
    }
}
export class DesignPattern extends ADesignPattern {
    aggiungiSorgente(sorgente) {
        this.sorgenti.push(sorgente);
        return this;
    }
    aggiungiEsempio(esempio) {
        this.esempi.push(esempio);
        return this;
    }
    aggiungiTutorial(tutorial) {
        this.tutorials.push(tutorial);
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
        console.log(array.join(', '));
        return this;
    }
    #aggiungiLink = function (sorgente) {
        //@ts-expect-error
        if (sorgente.link)
            this.push(sorgente.link.href);
        //@ts-expect-error
        if (!sorgente.link)
            this.push(sorgente.titolo);
    };
}
export const chainOfResp = new DesignPattern();
chainOfResp.nome = 'Chain of responsability';
chainOfResp.categoria = 'Behavioral';
export const command = new DesignPattern();
command.nome = 'Command';
command.categoria = 'Behavioral';
export const interpreter = new DesignPattern();
interpreter.nome = 'Interpreter';
interpreter.categoria = 'Behavioral';
export const iterator = new DesignPattern();
iterator.nome = 'Iterator';
iterator.categoria = 'Behavioral';
export const mediator = new DesignPattern();
mediator.nome = 'Mediator';
mediator.categoria = 'Behavioral';
export const memento = new DesignPattern();
memento.nome = 'Memento';
memento.categoria = 'Behavioral';
export const observer = new DesignPattern();
observer.nome = 'Observer';
observer.categoria = 'Behavioral';
export const state = new DesignPattern();
state.nome = 'State';
state.categoria = 'Behavioral';
export const strategy = new DesignPattern();
strategy.nome = 'Strategy';
strategy.categoria = 'Behavioral';
export const templateMethod = new DesignPattern();
templateMethod.nome = 'Template Method';
templateMethod.categoria = 'Behavioral';
export const visitor = new DesignPattern();
visitor.nome = 'Visitor';
visitor.categoria = 'Behavioral';
export const abstractFactory = new DesignPattern();
abstractFactory.nome = 'Abstract factory';
abstractFactory.categoria = 'Creational';
export const builder = new DesignPattern();
builder.nome = 'Builder';
builder.categoria = 'Creational';
export const factory = new DesignPattern();
factory.nome = 'Factory';
factory.categoria = 'Creational';
export const prototype = new DesignPattern();
prototype.nome = 'Prototype';
prototype.categoria = 'Creational';
export const singleton = new DesignPattern();
singleton.nome = 'Singleton';
singleton.categoria = 'Creational';
export const adapter = new DesignPattern();
adapter.nome = 'Adapter';
adapter.categoria = 'Structural';
export const bridge = new DesignPattern();
bridge.nome = 'Bridge';
bridge.categoria = 'Structural';
export const composite = new DesignPattern();
composite.nome = 'Composite';
composite.categoria = 'Structural';
export const decorator = new DesignPattern();
decorator.nome = 'Decorator';
decorator.categoria = 'Structural';
export const facade = new DesignPattern();
facade.nome = 'Facade';
facade.categoria = 'Structural';
export const flyweight = new DesignPattern();
flyweight.nome = 'Flywight';
flyweight.categoria = 'Structural';
export const proxy = new DesignPattern();
proxy.nome = 'Proxy';
proxy.categoria = 'Structural';
export const nullObj = new DesignPattern();
nullObj.nome = 'Null Object';
nullObj.categoria = 'non definito';
export const lazyLoad = new DesignPattern();
lazyLoad.nome = 'Lazy Load';
lazyLoad.categoria = 'non definito';
export const interfacePattern = new DesignPattern();
interfacePattern.nome = 'Interface pattern';
interfacePattern.categoria = 'non definito';
