export declare type Constructor = new (...args: any[]) => {};
/**
 * Example
 *
 * ```
 * class Sprite {
 *   name = "";
 *   x = 0;
 *   y = 0;
 *
 *   constructor(name: string) {
 *     this.name = name;
 *   }
 * }
 * ```
 * Then you need a type and a factory function which returns
 * a class expression  * extending the base class.
 * ```
 * // To get started, we need a type which we'll use to extend
 * // other classes from. The main responsibility is to declare
 * // that the type being passed in is a class.
 *
 * type Constructor = new (...args: any[]) => {};
 *
 * // This mixin adds a scale property, with getters and setters
 * // for changing it with an encapsulated private property:
 *
 * function Scale<TBase extends Constructor>(Base: TBase) {
 *   return class Scaling extends Base {
 *     // Mixins may not declare private/protected properties
 *     // however, you can use ES2020 private fields
 *     _scale = 1;
 *
 *     setScale(scale: number) {
 *       this._scale = scale;
 *     }
 *
 *     get scale(): number {
 *       return this._scale;
 *     }
 *   };
 * }
 * ```
 * With these all set up, then you can create a class
 * which represents the base class  * with mixins applied:
 * ```
 * // Compose a new class from the Sprite class,
 * // with the Mixin Scale applier:
 * const EightBitSprite = Scale(Sprite);
 *
 * const flappySprite = new EightBitSprite("Bird");
 * flappySprite.setScale(0.8);
 * console.log(flappySprite.scale);
 * ```
 * @param Base
 * @returns
 */
export declare function Mixin<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {};
} & TBase;
/**
 * Allows creation of classe which only work with costrained
 * classe.
 *
 * Usage
 * ```
 * type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
 * type Spritable = GConstructor<Sprite>;
 * type Loggable = GConstructor<{ print: () => void }>;
 * function Jumpable<TBase extends Positionable>(Base: TBase) {
 *   return class Jumpable extends Base {
 *     jump() {
 *       // This mixin will only work if it is passed a base
 *       // class which has setPos defined because of the
 *       // Positionable constraint.
 *       this.setPos(0, 20);
 *     }
 *   };
 * }
 * ```
 */
export declare type GConstructor<T = {}> = new (...args: any[]) => T;
