import { INamespacedUUID } from "../../UUID/NamespacedUUID";
import { UUID, v5 } from "../../UUID/UUID";

// TODO test
export function creaNamespacedUUID(this: INamespacedUUID, string: string) {
  this.uuids.push(new UUID(v5(string, this.namespaceUUID), string));
  return this;
}
