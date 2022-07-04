class SubSystemClassA {
    method() {
        return "A";
    }
}
class SubSystemClassB {
    method(value) {
        return value;
    }
}
class SubSystemClassC {
    method(value) {
        return value;
    }
}
class Facade {
    subSystemClassA() {
        return new SubSystemClassA().method();
    }
    subSystemClassB(value) {
        return new SubSystemClassB().method(value);
    }
    subSystemClassC(value) {
        return new SubSystemClassC().method(value);
    }
}
console.log(new SubSystemClassA().method());
console.log(new SubSystemClassB().method("B"));
console.log(new SubSystemClassC().method({ C: [1, 2, 3] }));
const FACADE = new Facade();
console.log(FACADE.subSystemClassA());
console.log(FACADE.subSystemClassB("B"));
console.log(FACADE.subSystemClassC({ C: [1, 2, 3] }));
export {};
