export declare type Constructor = new (...args: any[]) => {};
export declare const Surname: <T extends Constructor>(Superclass: T) => {
    new (...arg: any[]): {
        surname: string;
    };
} & T;
