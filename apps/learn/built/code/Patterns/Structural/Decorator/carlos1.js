export class Decorator {
    component;
    constructor(component) {
        this.component = component;
    }
    operation() {
        return this.component.operation();
    }
}
export class ConcreteComponent {
    operation() {
        return 'Concrete Component';
    }
}
class ConcreteDecoratorA extends Decorator {
    operation() {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}
class ConcreteDecoratorB extends Decorator {
    operation() {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}
class ConcreteDecoratorC extends Decorator {
    operation() {
        return `ConcreteDecoratorC(${super.operation()})`;
    }
}
function clientCode(component) {
    console.log(`Result: ${component.operation()}`);
}
const simple = new ConcreteComponent();
console.log(`Client: I've got a simple component:`);
clientCode(simple);
console.log('');
const decoratorA = new ConcreteDecoratorA(simple);
const decoratorB = new ConcreteDecoratorB(simple);
const decoratorC = new ConcreteDecoratorC(simple);
const decoratorBA = new ConcreteDecoratorB(decoratorA);
const decoratorCA = new ConcreteDecoratorC(decoratorA);
const decoratorCBA = new ConcreteDecoratorC(decoratorBA);
console.log(`Client: Now I've got a decorated component:`);
clientCode(decoratorA);
clientCode(decoratorB);
clientCode(decoratorC);
clientCode(decoratorBA);
clientCode(decoratorCA);
clientCode(decoratorCBA);
