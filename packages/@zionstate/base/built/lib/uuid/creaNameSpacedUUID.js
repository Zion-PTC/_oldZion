import { UUID, v5 } from "../../src/UUID/UUID";
// TODO test
export function creaNamespacedUUID(string) {
    this.uuids.push(new UUID(v5(string, this.namespaceUUID), string));
    return this;
}
