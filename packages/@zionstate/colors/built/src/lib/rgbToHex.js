/**
 * convert a set of rgb numbers to an hex strings
 *
 * usage:
 *
 * ```js
 * rgbToHex(0, 255, 0) // returns #00ff00
 * ```
 */
export function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
