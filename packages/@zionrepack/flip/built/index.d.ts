import fl from 'flip';
declare type flipType = typeof fl;
interface Iflip extends flipType {
    (string: string): string;
}
/**
 * Take a string, and return the flipped version of the
 * string.
 * @param string String dal flippare
 */
export declare let flip: Iflip;
export {};
