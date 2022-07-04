export {};
class SysObjectA {
  method() {
    return 0;
  }
}
class SysObjectB {
  method(num) {
    return num + 1;
  }
}
class SysObjectC {
  method(obj) {
    return { num: obj.num, mult: obj.mult, res: obj.num * obj.mult };
  }
}

class Facade {
  subSysA() {
    return new SysObjectA().method();
  }
  subSysB(num) {
    return new SysObjectB().method(num);
  }
  subSysC(num, mult) {
    return new SysObjectC().method(num, mult);
  }
}

let facade = new Facade();
let res1 = facade.subSysA();
let res2 = facade.subSysB(10);
let res3 = facade.subSysC({ num: 10, mult: 10 });

console.log(res1, res2, res3);
