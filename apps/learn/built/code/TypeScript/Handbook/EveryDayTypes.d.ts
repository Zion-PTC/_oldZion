declare function greet(name: string): void;
declare function getFavoriteNumber(): number;
declare function printCoord(pt: {
    x: number;
    y: number;
}): void;
declare function printName1(obj: {
    first: string;
    last?: string;
}): void;
declare function printName2(obj: {
    first: string;
    last?: string;
}): void;
declare function printName3(obj: {
    first: string;
    last?: string;
}): void;
declare function printId(id: number | string): void;
/**
 * The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

For example, TypeScript knows that only a string value will have a typeof value "string":
 */
declare function printID2(id: number | string): void;
/**
 * Another example is to use a function like Array.isArray:
 * ```js
 *function welcomePeople(x: string[] | string) {
 *  if (Array.isArray(x)) {
 *    // Here: 'x' is 'string[]'
 *    console.log('Hello, ' + x.join(' and '));
 *  } else {
 *    // Here: 'x' is 'string'
 *    console.log('Welcome lone traveler ' + x);
 *  }
 *}
```
 * @param x
 */
declare function welcomePeople(x: string[] | string): void;
/**
 * Return type is inferred as number[] | string
 * @param x
 * @returns
 */
declare function getFirstThree(x: number[] | string): string | number[];
/**
 * We’ve been using object types and union types by writing
 * them directly in type annotations. This is convenient,
 * but it’s common to want to use the same type more than
 * once and refer to it by a single name.
 * A type alias is exactly that - a name for any type.
 * The syntax for a type alias is:
 * ```ts
 * type Point = {
 *  x: number;
 *  y: number;
 * };
 * // Exactly the same as the earlier example
 * function printCoord(pt: Point) {
 *  console.log("The coordinate's x value is " + pt.x);
 *  console.log("The coordinate's y value is " + pt.y);
 * }
 * printCoord({ x: 100, y: 100 });
 * ```
 * You can actually use a type alias to give a name to any
 * type at all, not just an object type. For example, a type
 * alias can name a union type:
 * ```ts
 * type ID = number | string;
 * ```
 * Note that aliases are only aliases - you cannot use type
 * aliases to create different/distinct “versions” of the same
 * type. When you use the alias, it’s exactly as if you had
 * written the aliased type. In other words, this code might
 * look illegal, but is OK according to TypeScript because
 * both types are aliases for the same type:
 * ```ts
 * type UserInputSanitizedString = string;
 * function sanitizeInput(str: string): UserInputSanitizedString {
 * return sanitize(str);
 * }
 * // Create a sanitized input
 * let userInput = sanitizeInput(getInput());
 * // Can still be re-assigned with a string though
 * userInput = "new input";
 *
 */
declare function TypeAliases(): void;
