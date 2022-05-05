//------------------------------------------------
class A {
  constructor() {
    this.id = 1;
  }
  log() {
    return this.id;
  }
}
let newA = new A();
//------------------------------------------------NON_FUNZIONA❌

class B {}
// non funziona
Object.assign(B, A);
let newB = new B();
console.log(newB.id); // undefined
//------------------------------------------------NON_FUNZIONA❌

class C {}
// C.prototype = A.prototype; // da errore
Object.assign(C, A.prototype);
let newC = new C();
console.log(newC.id); // undefinded
//------------------------------------------------NON_FUNZIONA❌

class D {
  constructor() {
    return Object.assign(
      this,
      A.prototype.id,
      A.prototype.log
    );
  }
}
function log() {
  return {
    log: function () {
      return this.name;
    },
  };
}
function id() {
  return { id: A.id };
}
console.log(A.prototype.id); // undefined
const newD = new D();
// console.log(newD.log()); // crashes
//------------------------------------------------FUNZIONA👌

class E {
  constructor(name) {
    this.name = name;
    return Object.assign(this, id(), log());
  }
}
const newE = new E('blob');
console.log(newE.log()); // blob
// il membro log() funziona ma non viene visualizzato
// //////////////////FUNZIONA///////
//------------------------------------------------FUNZIONA👌

class F {
  constructor(name) {
    this.name = name;
  }
}
function log1() {
  return this.name;
}
F.prototype.log = log1;
const newF = new F('jolie');
console.log(newF.log()); // jolie
// il membro log viene mostrato come una proprietà, non come
// un metodo
// //////////////////FUNZIONA///////
// ------------------------------------------------FUNZIONAOK✅

F.prototype.foo = function () {
  return 'foo';
};
console.log(newF.foo()); // foo
// così il membro foo è mostrato come una funzione.
// //////////////////FUNZIONA OK///////
//------------------------------------------------FUNZIONA👌

function boo() {
  return function () {
    return 'boo';
  };
}
F.prototype.goo = boo();
console.log(newF.goo); // [Function (anonymous)]
console.log(newF.goo()); // boo
// cosi viene visualizzato come una proprietà ma chiamato
// come un metodo!
//////////////////FUNZIONA//////
//------------------------------------------------FUNZIONA👌

// provo il pattern precedente con una enclosure.
function koo() {
  return (() => {
    return 'koo';
  })();
}
F.prototype.koo = koo();
console.log(`this is koo: ${newF.koo}`); // this is koo: koo
// funziona ma come prima viene visualizzato come una
// proprietà ma viene chiamata ANCHE con un proprietà.
//------------------------------------------------FUNZIONA👌

// riprovo con enclosure inserita prima
function poo() {
  (() => {
    return 'poo';
  })();
}
F.prototype.poo = poo;
console.log(`this is poo: ${newF.poo}`); // logga il testo della funzione.
console.log(`this is poo(): ${newF.poo()}`); // undefined
//------------------------------------------------NON_FUNZIONA❌

class G extends A {
  constructor() {
    super();
  }
}
console.log(newF.constructor === F); // true
const newG = new G();
console.log(newG.log()); // 1
//////////////////FUNZIONA OK//////
//------------------------------------------------NON_FUNZIONA❌

class H {
  constructor() {
    this.main = 'main';
  }
  moo() {
    return this.main;
  }
}
Object.assign(G, H);
// newG.moo(); // crasha
Object.assign(newG, H.prototype.main);
Object.assign(newG, H.prototype.moo());
console.log(newG.main); // undefined
console.log(newG.moo); // undefined

/**
 * in sostanza, quando il metodo assign funziona non
 * mostra le proprietà o i metodi ma funziona.
 */
