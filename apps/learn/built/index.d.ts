import { Tutorial } from "./src/Tutorial";
declare const _default: {
    Tutorial: typeof Tutorial;
};
export default _default;
declare global {
    interface Array<T> {
        forEach<This>(callbackfn: (this: This, value: T, value2: T, set: this) => void, thisArg?: This): void;
    }
}
