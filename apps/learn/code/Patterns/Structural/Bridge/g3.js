export {};

class Bridge1 {
  constructor(target) {
    this.target = target;
  }
  action1 = () => this.target.do1();
  action2 = () => this.target.do2();
}

class Bridge2 {
  constructor(target) {
    this.target = target;
  }
  action3 = () => this.target.do1();
  action4 = () => this.target.do2();
}

class Target {
  do1 = () => console.log("do1");
  do2 = () => console.log("do2");
}

function run() {
  let target1 = new Target();
  let bridge1 = new Bridge1(target1);
  let bridge2 = new Bridge2(target1);
  bridge1.action1();
  bridge1.action2();
  bridge2.action3();
  bridge2.action4();
}

run();
