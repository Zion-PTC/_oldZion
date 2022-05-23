import { abstractFactory, adapter, bridge, builder, chainOfResp, command, composite, decorator, facade, factory, flyweight, interfacePattern, interpreter, iterator, mediator, memento, nullObj, observer, prototype, proxy, singleton, state, strategy, templateMethod, visitor, } from './DesignPattern.js';
export class ASorgente {
    designPatterns;
    static #sorgenti = [];
    id;
    //@ts-expect-error
    titolo;
    //@ts-expect-error
    autori;
    //@ts-expect-error
    tutorial;
    //@ts-expect-error
    tipo;
    //@ts-expect-error
    link;
    //@ts-expect-error
    github;
    constructor(designPatterns = []) {
        this.designPatterns = designPatterns;
        ASorgente.#sorgenti.push(this);
        this.id = ASorgente.#sorgenti.length;
    }
}
export class Sorgente extends ASorgente {
    get designPatternSenzaEsempi() {
        let aggiungiSenzaEsempio = this.#aggiungiSenzaEsempio;
        let array = [];
        this.designPatterns.forEach(aggiungiSenzaEsempio, array);
        return array;
    }
    show = function () {
        console.log(
        //@ts-expect-error
        `Titolo del ${this.tipo}: ${this.titolo}, autori del ${this.tipo}: ${this.autori}`);
        //@ts-expect-error
        return this;
    };
    showPatterns = function () {
        let array = [];
        let aggiungiNome = function (e) {
            array.push(e.nome);
        };
        //@ts-expect-error
        this.designPatterns.forEach(aggiungiNome);
        console.log(array.join(', '));
        //@ts-expect-error
        return this;
    };
    addDesignPattern = function (pattern) {
        //@ts-expect-error
        this.designPatterns.push(pattern);
        //@ts-expect-error
        pattern.aggiungiSorgente(this);
        //@ts-expect-error
        return this;
    };
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
        let aggiungiNome = this.#aggiungiNome;
        let appartieneACategoria = this.#appartieneACategoria;
        let array = [];
        this.designPatternSenzaEsempi;
        if (!categoria) {
            console.log(this.designPatternSenzaEsempi.join(', '));
        }
        else {
            let patternPerCategoria = this.designPatternSenzaEsempi.filter(appartieneACategoria, categoria);
            patternPerCategoria.forEach(aggiungiNome, array);
            console.log(array.join(', '));
        }
        return this;
    }
    contaDesignPatternSenzaEsempi = function (categoria) {
        if (!categoria) {
            //@ts-expect-error
            let res = this.designPatternSenzaEsempi;
            console.log('Manacano', res.length, 'Pattern in totale');
        }
        else {
            //@ts-expect-error
            let appartieneACategoria = this.#appartieneACategoria;
            //@ts-expect-error
            let patternPerCategoria = this.designPatternSenzaEsempi.filter(appartieneACategoria, categoria);
            console.log('Mancano', patternPerCategoria.length, categoria, 'pattern');
        }
        //@ts-expect-error
        return this;
    };
    #aggiungiSenzaEsempio = function (pattern) {
        //@ts-expect-error
        if (pattern.esempi.length === 0)
            this.push(pattern);
    };
    #aggiungiNome = function (pattern) {
        //@ts-expect-error
        this.push(pattern.nome);
    };
    #aggiungiNomeSenzaEsempio = function (pattern) {
        //@ts-expect-error
        if (pattern.esempi.length === 0)
            this.push(pattern.nome);
    };
    #appartieneACategoria = function (pattern) {
        //@ts-expect-error
        if (pattern.categoria === this)
            return pattern;
    };
    #trovaViaId(pattern) {
        if (pattern.id === this.id)
            return pattern;
    }
}
export const PJDP = new Sorgente();
PJDP.titolo = 'Pro Javascript Design Patterns';
PJDP.autori = ['Ross Armes', 'Dustin Diaz'];
PJDP.tipo = 'libro';
PJDP.addDesignPattern(interfacePattern);
PJDP.addDesignPattern(singleton);
PJDP.addDesignPattern(factory);
PJDP.addDesignPattern(bridge);
PJDP.addDesignPattern(composite);
PJDP.addDesignPattern(facade);
PJDP.addDesignPattern(adapter);
PJDP.addDesignPattern(decorator);
PJDP.addDesignPattern(flyweight);
PJDP.addDesignPattern(proxy);
PJDP.addDesignPattern(observer);
PJDP.addDesignPattern(command);
PJDP.addDesignPattern(chainOfResp);
export const DOFACTORY = new Sorgente();
DOFACTORY.titolo = 'JavaScript Patterns';
DOFACTORY.autori = ['dofactory'];
DOFACTORY.tipo = 'blog';
DOFACTORY.link = new URL('https://www.dofactory.com/javascript/design-patterns/strategy#example');
DOFACTORY.addDesignPattern(abstractFactory);
DOFACTORY.addDesignPattern(builder);
DOFACTORY.addDesignPattern(factory);
DOFACTORY.addDesignPattern(prototype);
DOFACTORY.addDesignPattern(singleton);
DOFACTORY.addDesignPattern(adapter);
DOFACTORY.addDesignPattern(bridge);
DOFACTORY.addDesignPattern(composite);
DOFACTORY.addDesignPattern(decorator);
DOFACTORY.addDesignPattern(facade);
DOFACTORY.addDesignPattern(flyweight);
DOFACTORY.addDesignPattern(proxy);
DOFACTORY.addDesignPattern(chainOfResp);
DOFACTORY.addDesignPattern(command);
DOFACTORY.addDesignPattern(interpreter);
DOFACTORY.addDesignPattern(iterator);
DOFACTORY.addDesignPattern(mediator);
DOFACTORY.addDesignPattern(memento);
DOFACTORY.addDesignPattern(observer);
DOFACTORY.addDesignPattern(state);
DOFACTORY.addDesignPattern(strategy);
DOFACTORY.addDesignPattern(templateMethod);
DOFACTORY.addDesignPattern(visitor);
export const CARLOS = new Sorgente();
CARLOS.titolo = `pattern-design Series' Articles`;
CARLOS.autori = ['Carlos Caballero'];
CARLOS.tipo = 'blog';
CARLOS.link = new URL('https://dev.to/carlillo/series/540');
CARLOS.github = new URL('https://github.com/Caballerog');
CARLOS.addDesignPattern(strategy);
CARLOS.addDesignPattern(templateMethod);
CARLOS.addDesignPattern(adapter);
CARLOS.addDesignPattern(facade);
CARLOS.addDesignPattern(singleton);
CARLOS.addDesignPattern(command);
CARLOS.addDesignPattern(iterator);
CARLOS.addDesignPattern(decorator);
CARLOS.addDesignPattern(nullObj);
CARLOS.addDesignPattern(builder);
CARLOS.addDesignPattern(factory);
CARLOS.addDesignPattern(abstractFactory);
CARLOS.addDesignPattern(observer);
export const INTEGRALIST = new Sorgente();
INTEGRALIST.titolo = 'Strategy.js';
INTEGRALIST.autori = ['Integralist'];
INTEGRALIST.link = new URL('https://gist.github.com/Integralist/5736427');
INTEGRALIST.addDesignPattern(strategy);
export const NJSDP = new Sorgente();
NJSDP.titolo = 'Node.js Design Patterns';
NJSDP.autori = ['Mark McDonnell'];
NJSDP.tipo = 'libro';
export const DEVMODZ = new Sorgente();
DEVMODZ.titolo = 'Developer Modzilla';
DEVMODZ.autori = ['Javascript Dev Team'];
DEVMODZ.tipo = 'blog';
export const NODEJS = new Sorgente();
NODEJS.titolo = 'Node Reference';
NODEJS.autori = ['Node Js Dev Team'];
NODEJS.tipo = 'blog';
export const TSLANG = new Sorgente();
TSLANG.titolo = 'Typescript Reference';
TSLANG.autori = ['TypeScriptLang Dev Team'];
TSLANG.tipo = 'blog';
TSLANG.link = new URL('https://www.typescriptlang.org/');
export const DOCOMMUNITY = new Sorgente();
TSLANG.titolo = 'Digital Ocean';
TSLANG.autori = ['Vijay Prasanna'];
TSLANG.tipo = 'blog';
TSLANG.link = new URL('https://www.digitalocean.com/community/tutorials');
