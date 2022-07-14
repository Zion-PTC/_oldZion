import { createHash } from "crypto";
import { Hasher } from "../../src/UUID/Hasher";

export function creaUuidFromString(this: Hasher): Hasher {
  if (!this.hash) {
    this.hash = createHash("sha1")
      .update("diamogli qualche cosa da hashare")
      .digest("hex");
  }
  const M = ["1", "2", "3", "4", "5"];
  const N = ["8", "9", "a", "b"];
  function randomIndex(array: Array<string>): number {
    return Math.floor(Math.random() * array.length);
  }
  let split = this.hash.split("");

  const { hex1, hex2, hex3, hex4, hex5 } = this.splittaHash(split);
  let unite = [
    hex1,
    hex2,
    [M[randomIndex(M)], hex3].join(""),
    [N[randomIndex(N)], hex4].join(""),
    hex5,
  ];
  this.hash = unite.join("-");
  return this;
}
