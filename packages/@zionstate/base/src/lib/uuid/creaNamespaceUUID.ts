import { INamespacedUUID } from "../../UUID/NamespacedUUID";
import { v5 } from "../../UUID/UUID.js";

export function creaNamespaceUUID(this: INamespacedUUID, string: string) {
  this.namespaceUUID = v5(string, v5.DNS);
  return this;
}
