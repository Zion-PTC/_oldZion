function abstract1() {
    class A {
        a;
        constructor(a) {
            this.a = a;
        }
    }
    class B {
        b;
        constructor(b) {
            this.b = b;
        }
    }
    class C {
        c;
        constructor(c) {
            this.c = c;
        }
    }
    let registeredFactories = {};
    function registraFactory(factory) {
        registeredFactories[factory.constructor.name] = factory;
    }
    const recFac = [A, B, C];
    recFac.forEach(registraFactory);
    class Factory {
        constructor(type, props) {
            return new registeredFactories[type](props);
        }
        registraFactory(factory) {
            registeredFactories[factory.constructor.name] = factory;
        }
        registraFactories(factories) {
            this.registraFactory(...factories);
        }
    }
    let newA = new Factory('A', { a: 100 });
    let newB = new Factory('B', { b: 100 });
    console.log(newA, newB);
}
function abstract2() {
    class A {
        a;
        constructor(a) {
            this.a = a;
        }
    }
    class B {
        b;
        constructor(b) {
            this.b = b;
        }
    }
    class C {
        c;
        constructor(c) {
            this.c = c;
        }
    }
    let factoriesT = { a: 1, b: 2 };
    class AbstractFactory {
        factories = {};
        istanzaCreata;
        aggiungiFactory(constructor, type) {
            type = constructor.prototype.constructor.name;
            this.factories[type] = constructor;
            return this;
        }
        factory(type, props) {
            this.istanzaCreata = new this.factories[type](props);
            return this;
        }
    }
    let method1 = {
        name: 'method1',
        method: console.log,
    };
    let pop = { b: undefined, [method1.name]: method1.method };
    let newAbstract = new AbstractFactory();
    newAbstract.aggiungiFactory(A);
    newAbstract.aggiungiFactory(B);
    newAbstract.aggiungiFactory(C);
    let newA = newAbstract.factory('A', pop).istanzaCreata;
    console.log(newAbstract);
}
abstract2();
