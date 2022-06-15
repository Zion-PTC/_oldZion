function abstract1() {
  class A {
    constructor(public a: string) {
      this.a = a;
    }
  }
  class B {
    constructor(public b: string) {
      this.b = b;
    }
  }
  class C {
    constructor(public c: string) {
      this.c = c;
    }
  }
  let registeredFactories: { [key: string]: typeof A | typeof B | typeof C } =
    {};
  function registraFactory(
    factory: typeof A | typeof B | typeof C
  ): typeof A | typeof B | typeof C {
    return (registeredFactories[factory.constructor.name] = factory);
  }
  const recFac = [A, B, C];
  recFac.forEach(registraFactory);
  class Factory {
    constructor(type: string, props: { [key: string]: number }) {
      //@ts-expect-error
      return new registeredFactories[type](props);
    }
    registraFactory(factory: typeof A | typeof B | typeof C): void {
      registeredFactories[factory.constructor.name] = factory;
    }
    registraFactories(factories: [typeof A | typeof B | typeof C]): void {
      this.registraFactory(...factories);
    }
  }
  let newA = new Factory("A", { a: 100 });
  let newB = new Factory("B", { b: 100 });
  console.log(newA, newB);
}
function abstract2() {
  interface IA {
    a: number;
  }
  class A implements IA {
    a: number;
    constructor(a: number) {
      this.a = a;
    }
  }
  interface IB {
    b: number;
  }
  class B implements IB {
    b: number;
    constructor(b: number) {
      this.b = b;
    }
  }
  class C {
    c: number;
    constructor(c: number) {
      this.c = c;
    }
  }
  let factoriesT = { a: 1, b: 2 };
  type factory = { [key: string]: any };
  type typeA = typeof factoriesT;
  type typeB = keyof typeof factoriesT;
  class AbstractFactory {
    factories: factory = {};
    //@ts-expect-error
    istanzaCreata;
    //@ts-expect-error
    aggiungiFactory<T extends { prototype }>(constructor: T, type?: string) {
      type = constructor.prototype.constructor.name;
      //@ts-expect-error
      this.factories[type] = constructor;
      return this;
    }
    factory<T>(type: "A" | "B" | "C", props: T) {
      this.istanzaCreata = new this.factories[type](props);
      return this;
    }
  }
  let method1 = {
    name: "method1",
    method: console.log,
  };
  let pop = { b: undefined, [method1.name]: method1.method };
  let newAbstract = new AbstractFactory();
  newAbstract.aggiungiFactory(A);
  newAbstract.aggiungiFactory(B);
  newAbstract.aggiungiFactory(C);
  //@ts-expect-error
  let newA = newAbstract.factory<B>("A", pop).istanzaCreata;
  console.log(newAbstract);
}
abstract2();
