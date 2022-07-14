declare class Click {
    handlers: Function[];
    constructor();
    subscribe(fn: Function): void;
    unsubscribe(fn: Function): void;
    fire(o: any, thisObj?: any): void;
}
declare let clickhandler: (item: any) => void;
declare let click: Click;
