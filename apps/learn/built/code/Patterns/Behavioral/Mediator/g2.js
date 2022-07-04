class SysObject {
    name;
    mediator;
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    method1(data, to) {
        if (this.mediator)
            this.mediator.method1(data, this, to);
    }
    method2(data, from) {
        console.log("Messaggio ridevuto da " +
            this.name +
            ": " +
            data +
            ", inviato da: " +
            from.name);
    }
}
class Mediator {
    participants = {};
    register(praticipant) {
        this.participants[praticipant.name] = praticipant;
        praticipant.mediator = this;
    }
    method1(data, from, to) {
        this.participants[to.name].method2(data, from);
    }
}
let mediator = new Mediator();
let object1 = new SysObject("obj1");
let object2 = new SysObject("obj2");
mediator.register(object1);
mediator.register(object2);
object1.method1("ciao object2!!!", object2);
export {};
