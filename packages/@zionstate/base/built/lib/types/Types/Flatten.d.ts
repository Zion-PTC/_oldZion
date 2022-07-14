export declare type Flatten<T> = T extends any[] ? T[number] : T;
export declare type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;
