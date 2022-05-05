interface Component {
  operation(): string;
}

export class Decorator implements Component {
  protected component: Component;
  constructor(component: Component) {
    this.component = component;
  }
  public operation(): string {
    return this.component.operation();
  }
}

export class ConcreteComponent implements Component {
  public operation(): string {
    return 'Concrete Component';
  }
}

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}
class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}
class ConcreteDecoratorC extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorC(${super.operation()})`;
  }
}

function clientCode(component: Component) {
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
