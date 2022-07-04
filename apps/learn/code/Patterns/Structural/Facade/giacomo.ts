// TS refactoring dell'esempio:
// /Users/WAW/Documents/Projects/ZION/apps/learn/code/Patterns/Structural/Facade.js
// di DoFactory

class Mortgage {
  constructor(public name: string) {}
  applyFor(amount: number) {
    // access multiple subsystems...
    let result = "approved";
    if (!new Bank().verify(this.name, amount)) {
      result = "denied";
    } else if (!new Credit().get(this.name)) {
      result = "denied";
    } else if (!new Background().check(this.name)) {
      result = "denied";
    }
    return this.name + "has been " + result + " for a " + amount + " mortgage";
  }
}

class Bank {
  verify(name: string, amount: number) {
    // complex logic ...
    return true;
  }
}

class Credit {
  get(name: string) {
    // complex logic ...
    return true;
  }
}

class Background {
  check(name: string) {
    // complex logic ...
    return true;
  }
}
