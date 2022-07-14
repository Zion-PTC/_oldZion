import { Mix } from "@zionstate/base";
const Mixin = Mix.Mixin;
const EnhancedMixin = Mix.EnhancedMixin;
const Name2 = Mix.Name;
const Surname = Mix.Surname;

class Name {
  constructor(name) {
    this.name = name;
  }
}

class MyClass extends Mixin(Name) {
  param = "param";
}
const nw = new MyClass("new value");

class MyBaseClass {
  tipo = "base class";
}

class MyClass1 extends EnhancedMixin(MyBaseClass).with(Name2, Surname) {}

const nw2 = new MyClass1("ciao", "bau");
nw2;

console.log(nw);
console.log(nw2);
