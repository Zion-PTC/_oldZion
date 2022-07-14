import * as base from "@zionstate/base";

const Mixin = base.ZionMixins.Mixin;
class Base {
  base: true = true;
}

class MyClass extends Mixin(Base) {
  myclass: true = true;
}

const myclass = new MyClass();
