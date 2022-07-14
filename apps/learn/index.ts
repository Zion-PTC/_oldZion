// import { Tutorial } from "./src/Tutorial.js";

// export default { Tutorial };
export {};

declare global {
  // uncomment if in a module scope
  interface Array<T> {
    forEach<This>(
      callbackfn: (this: This, value: T, value2: T, set: this) => void,
      thisArg?: This
    ): void;
  }
} // // uncomment if in a module scope
