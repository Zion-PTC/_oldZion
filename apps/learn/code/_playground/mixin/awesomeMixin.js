let Mixin1 = (superclass) =>
  class extends superclass {
    foo() {
      console.log("foo from Mixin1");
    }
  };

let Mixin2 = (superclass) =>
  class extends superclass {
    troo() {
      console.log("troo from Mixin2");
    }
  };

class MyBaseClass {
  koo() {
    console.log("koo from MyBaseClass");
  }
}

class MyClass extends Mixin1(MyBaseClass) {
  boo = () => console.log("boo from MyClass");
}

let myObject = new MyClass();
myObject.foo(); // foo from Mixin1
myObject.koo();
myObject.boo();

class MyClass2 extends Mixin1(Mixin2(MyBaseClass)) {
  goo = () => console.log("goo from MyClass2");
}

let myObj2 = new MyClass2();
myObj2.foo(); //    funziona
myObj2.goo(); //    funziona
myObj2.troo(); //   funziona ma senza intellisense
myObj2.koo(); //    funziona ma senza intellisense

let Mixin3 = (superclass) =>
  class extends Mixin1(superclass) {
    doo = () => console.log("doo from Mixin3");
  };

class MyClass3 extends Mixin3(MyBaseClass) {
  noo = () => console.log("noo from MyClass3");
}

const myObj3 = new MyClass3();
myObj3.doo(); //    funziona ma intellisense lo riconosce come proprietà
myObj3.foo(); //    funziona
myObj3.noo(); //    funziona ma intellisense lo riconosce come proprietà

let CompoundMixin = (superclass) => Mixin2(Mixin3(superclass));
class MyClass4 extends CompoundMixin(MyBaseClass) {
  soo = () => console.log("soo from MyClass4");
}
const myObj4 = new MyClass4();
myObj4.soo(); //    funziona
myObj4.troo(); //   funziona
myObj4.doo(); //    funziona ma non intellisense



class MyClass extends mix(MyBaseClass).with(Mixin1, Mixin2) {
  /* ... */
}
let mix = (superclass) => new MixinBuilder(superclass);

class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass;
  }

  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}