declare const constr: ObjectConstructor;
declare class Singleton {
    private static instance;
    getInstance: () => Object;
    constructor();
    private createInstance;
}
declare class AnotherSingleton extends Singleton {
}
declare function s1(): void;
