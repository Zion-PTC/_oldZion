interface Component {
    operation(): string;
}
export declare class Decorator implements Component {
    protected component: Component;
    constructor(component: Component);
    operation(): string;
}
export declare class ConcreteComponent implements Component {
    operation(): string;
}
export {};
