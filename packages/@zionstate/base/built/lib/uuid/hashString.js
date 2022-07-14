import { createHash } from "crypto";
export function hashString(string) {
    this.hash = createHash("sha1").update(string).digest("hex");
    return this;
}
