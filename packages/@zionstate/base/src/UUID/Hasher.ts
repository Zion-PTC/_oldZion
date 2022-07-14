import { hashString } from "../../lib/uuid/hashString.js";
import { splittaHash } from "../../lib/uuid/spliitaHash.js";
import { creaUuidFromString } from "../../lib/uuid/creaUUIDFromString.js";
import { NamespacedUUID } from "./NamespacedUUID.js";
import { validate } from "./UUID.js";

export class Hasher {
  NamespaceUUID = NamespacedUUID;
  hash?: string;
  hashString = hashString;
  creaUuidFromString = creaUuidFromString;
  splittaHash = splittaHash;
  mostraValore = mostraValore;
  validate = validate;
}

function mostraValore(this: Hasher) {
  console.log(this.hash);
  return this;
}
