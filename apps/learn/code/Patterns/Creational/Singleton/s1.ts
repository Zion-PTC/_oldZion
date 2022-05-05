const constr = Object;

class Singleton {
  private static instance: Object;
  public getInstance: () => Object;
  constructor() {
    this.getInstance = function (): Object {
      if (!Singleton.instance) Singleton.instance = this.createInstance();
      return Singleton.instance;
    };
  }
  private createInstance(): Object {
    Singleton.instance = new Object('Solo uno');
    return Singleton.instance;
  }
}

class AnotherSingleton extends Singleton {}

function s1() {
  let instanceA = new Singleton().getInstance();
  let instanceB = new Singleton().getInstance();
  let A = new AnotherSingleton().getInstance();

  console.log(instanceA);
  console.log(instanceB);
  console.log(A);
}
s1();
