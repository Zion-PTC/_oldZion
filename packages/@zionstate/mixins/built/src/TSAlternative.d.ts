/**
 * Each mixin is a traditional ES class
 * ```
 * class Jumpable {
 *   jump() {}
 * }
 *
 * class Duckable {
 *   duck() {}
 * }
 * ```
 * Including the base
 * ```
 * class Sprite {
 *   x = 0;
 *   y = 0;
 * }
 * ```
 * Then you create an interface which merges
 * the expected mixins with the same name as your base
 * interface Sprite extends Jumpable, Duckable {}
 * Apply the mixins into the base class via
 * the JS at runtime
 * ```
 * applyMixins(Sprite, [Jumpable, Duckable]);
 *
 * let player = new Sprite();
 * player.jump();
 * console.log(player.x, player.y);
 * ```
 */
export declare function applyMixins(derivedCtor: any, constructors: any[]): void;
