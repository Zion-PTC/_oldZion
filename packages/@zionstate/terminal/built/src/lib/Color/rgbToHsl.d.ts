/**
 * converts a set of rgb values passed as numbers into an
 * array of hsl values.
 *
 * usage:
 * ```js
 * rgbToHsl(0, 255, 0) // returns [ 0.3333333333333333, 1, 0.5 ]
 * ```
 */
export declare function rgbToHsl(r: number, g: number, b: number): number[];
