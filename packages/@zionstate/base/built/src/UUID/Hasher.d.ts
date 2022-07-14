import { hashString } from "../../lib/uuid/hashString.js";
import { splittaHash } from "../../lib/uuid/spliitaHash.js";
import { creaUuidFromString } from "../../lib/uuid/creaUUIDFromString.js";
import { NamespacedUUID } from "./NamespacedUUID.js";
export declare class Hasher {
    NamespaceUUID: typeof NamespacedUUID;
    hash?: string;
    hashString: typeof hashString;
    creaUuidFromString: typeof creaUuidFromString;
    splittaHash: typeof splittaHash;
    mostraValore: typeof mostraValore;
    validate: (uuid: string) => boolean;
}
declare function mostraValore(this: Hasher): Hasher;
export {};
