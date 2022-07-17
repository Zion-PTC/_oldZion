import { Hasher } from "../../UUID/Hasher";
import { createHash } from "crypto";

export function hashString(this: Hasher, string: string): Hasher {
  this.hash = createHash("sha1").update(string).digest("hex");
  return this;
}
