declare class Mediator {
    colleague1: Colleague1;
    colleague2: Colleague2;
    constructor();
    colleague1Method(): string;
    colleague2Method(): string;
}
declare class Colleague1 {
    method1(): string;
}
declare class Colleague2 {
    method2(): string;
}
declare const MEDIATOR: Mediator;
declare let DATA: string;
