export interface IStaticPrimitive<T> {
  new (): T;
  id;
}

export interface IPrimitive {
  id;
}

function test() {
  interface IStaticTest<T> {
    new (): T;
  }
  interface ITest {
    id;
  }

  class ABoo {
    static #aboos: ABoo[] = [];
    id;
    constructor() {
      ABoo.#aboos.push(this);
      this.id = ABoo.#aboos.length;
    }
  }

  class Ciao {
    culo;
    constructor() {
      this.culo = 'culo';
    }
    id = 'p';
  }

  class Vlod {
    constructor() {
      return Ciao;
    }
  }

  function constr<T>() {
    return <U extends T>(constructor: U) => {};
  }

  function too(clObj) {
    class V extends Ciao {}
    Object.defineProperty(V, 'name', { value: clObj });
    return V;
  }
  let Cao = too('Cao');
  console.log(Cao);

  function moo<T>() {
    return <U extends T>(c: U) => {
      c;
    };
  }
  let Bao = moo<Ciao>();
  console.log(Bao(new Ciao()));

  let B = <U extends Ciao>() => {
    let g: U;
    return g;
  };
  interface Booo {
    culo;
    id;
  }
  let bobo = B<Booo>();
  console.log(bobo);
}

function test2() {
  interface Boo {
    [a: string]: string;
    [b: number]: string;
  }
  const b: Boo = {
    ['ciao']: '',
    [0]: 'ciap',
    ['doooo']: '',
  };
  console.log(b);
}
export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}

function interfaceMaker() {
  interface Blooo {}
  return;
}

interface ISTATIC<T, X> {
  new (): T;
  new (): X;
  ids;
}

interface IF {
  id;
}
interface BOT {
  bot;
}

function multipleInterfaceImplmentation() {
  function createClass(name: string) {
    @staticImplements<ISTATIC<IF, BOT>>()
    class NEW {
      static ids;
      id = 'id';
      bot = 'bot';
    }
    Object.defineProperty(NEW, 'name', { value: name });
    return NEW;
  }
  const NewClass = createClass('NewClass');
  const instance = new NewClass();
  console.log(instance);
}

export abstract class APrimitive {
  static id;
  id;
  constructor() {}
}

@staticImplements<IStaticPrimitive<IPrimitive>>()
export class Primitive extends APrimitive {}
