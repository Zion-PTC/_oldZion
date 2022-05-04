class Foo {
  constructor() {
    return this.classFoo;
  }
  classFoo = function () {
    let value = 'value';
    return value;
  };
}
let c = new Foo();
console.log(c()); // value

// provo a capire che differenza c'è fra una funzione
// normale e una funzione freccia
const normalFoo = function () {
  this.foo = function () {
    return 'foo';
  };
  return this.foo;
};
console.log(new normalFoo()()); // foo

function normalGoo() {
  this.goo = function () {
    return 'goo';
  };
  return this.goo;
}
console.log(new normalGoo()()); // goo

// queste due versioni sono perfettamente uguali
const arrowFoo = () => {
  // this.foo = function () {   // crasha
  //   return 'foo';
  // };
  // return this.foo;
  if (!this) {
    return `foo`;
  }
  return this.id;
};
console.log(arrowFoo()); // foo

const boo = function () {
  const arrowBoo = () => {
    if (!this) {
      return 'boo';
    }
    return this.id;
  };
  this.id = 'id';
  console.log(arrowFoo()); // foo
  console.log(arrowBoo()); // Id
};
new boo();
