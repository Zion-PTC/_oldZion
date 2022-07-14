declare abstract class AbstractClass {
    stepOne(): void;
    abstract stepTwo(): void;
    stepThree(): void;
    templateMethod(): void;
}
declare class ConcreteClassA extends AbstractClass {
    stepTwo(): void;
}
declare class ConcreteClassB extends AbstractClass {
    stepOne(): void;
    stepTwo(): void;
    stepThree(): void;
}
declare const CLASS_A: ConcreteClassA;
declare const CLASS_B: ConcreteClassB;
