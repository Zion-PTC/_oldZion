import { SplittedHash } from "../../src/UUID/UUID";

export function splittaHash(split: string[]): SplittedHash {
  let hex1 = split.splice(0, 8).join("");
  let hex2 = split.splice(0, 4).join("");
  let hex3 = split.splice(0, 3).join("");
  let hex4 = split.splice(0, 3).join("");
  let hex5 = split.splice(0, 12).join("");
  return { hex1, hex2, hex3, hex4, hex5 };
}
