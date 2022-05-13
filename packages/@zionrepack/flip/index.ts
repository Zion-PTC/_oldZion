import fl from 'flip';

type flipType = typeof fl;
interface Iflip extends flipType {
  (string: string): string;
}

/**
 * Take a string, and return the flipped version of the
 * string.
 * @param string String dal flippare
 */
export let flip: Iflip = fl;
