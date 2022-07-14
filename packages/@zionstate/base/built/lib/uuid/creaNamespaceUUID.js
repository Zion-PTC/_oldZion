import { v5 } from "../../src/UUID/UUID.js";
export function creaNamespaceUUID(string) {
    this.namespaceUUID = v5(string, v5.DNS);
    return this;
}
