export declare type Constructor = new (...args: any[]) => {};
export declare const Name: <T extends Constructor>(Superclass: T) => {
    new (...arg: any[]): {
        name: string;
    };
} & T;
