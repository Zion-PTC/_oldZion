/**
 * converts an hex string to a tuple of rgb numbers
 *
 * usage
 *
 * ```js
 * hexToRgb("#00ff00") // returns [ 0, 255, 0 ]
 * hexToRgb("#0000FF") // returns [ 0, 0, 255 ]
 * ```
 */
export declare function hexToRgb(hex: string): [number, number, number];
