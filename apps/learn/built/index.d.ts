export {};
declare global {
    interface Array<T> {
        forEach<This>(callbackfn: (this: This, value: T, value2: T, set: this) => void, thisArg?: This): void;
    }
}
