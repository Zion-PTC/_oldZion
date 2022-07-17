import { ZionError } from "@zionstate_js/error";
/**
 * calcola saturation quando Luminance è maggiore di 0.5
 */
const calSwLgt05 = (d, min, max) => d / (2 - max - min);
/**
 * calcola saturation quando Luminance è minore di 0.5
 */
const calSwLst05 = (d, min, max) => d / (max + min);
/**
 * calcola H quando il valore massimo è R
 */
const calculateHmaxR = (b, g, d) => (g - b) / d + (g < b ? 6 : 0);
/**
 * calcola H quando il valore massimo è G
 */
const calculateHmaxG = (b, r, d) => (b - r) / d + 2;
/**
 * calcolal H quando il valore massimo è B
 */
const calculateHmaxB = (g, r, d) => (r - g) / d + 4;
const isLgt05 = (l) => l > 0.5;
const getMax = (...arg) => Math.max(...arg);
/**
 * converts a set of rgb values passed as numbers into an
 * array of hsl values.
 *
 * usage:
 * ```js
 * rgbToHsl(0, 255, 0) // returns [ 0.3333333333333333, 1, 0.5 ]
 * ```
 */
export function rgbToHsl(r, g, b) {
    if (typeof r !== "number" || typeof g !== "number" || typeof b !== "number")
        throw new ZionError("One of the arguments passed was not a number");
    (r /= 255), (g /= 255), (b /= 255);
    var max = getMax(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0, l = (max + min) / 2;
    if (max != min) {
        var d = max - min;
        s = isLgt05(l) ? calSwLgt05(d, min, max) : calSwLst05(d, min, max);
        switch (max) {
            case r:
                h = calculateHmaxR(b, d, g);
                break;
            case g:
                h = calculateHmaxG(b, r, d);
                break;
            case b:
                h = calculateHmaxB(r, g, d);
                break;
        }
        h /= 6;
    }
    return [h, s, l];
}
