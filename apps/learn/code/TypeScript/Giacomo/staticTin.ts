interface IStaticProva {
  new (): IProva;
  get prove(): IProva;
  set prove(prova: IProva);
}
interface IProva {
  id: string;
}

function sITestA<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
@sITestA<IStaticProva>()
class ThatThing {
  static get prove() {
    return;
  }
  static set prove(prova: IProva) {}
  id: string;
}

let tin = new ThatThing();
tin.id = 'ciao';
console.log(tin.id);

//// ________

function sITestB<U>() {
  return <E extends IStatic<U>>(constructor: E) => {
    constructor;
  };
}

interface IStatic<U> {
  new (): U;
  id: string;
}
interface NewTin {
  id: string;
}

@sITestB<NewTin>()
class MyTin {
  static id: string;
  id: string;
}
let bob = new MyTin();
bob.id = 'bob';
console.log(bob.id);

function sITestC<X>() {
  return <E extends X>(constructor: E) => {
    constructor;
  };
}
interface NewStatic<T> extends IStatic<T> {
  foo;
}

@sITestC<NewStatic<NewTin>>()
class Ouch {
  static id;
  static foo;
  id;
}
