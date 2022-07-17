import * as Mixins from "@zionstate/mixins";

const Mixin = Mixins.default.Mixin;

class Base {
  base: true = true;
}

class MyClass extends Mixin(Base) {
  myclass: true = true;
}

const myclass = new MyClass();
