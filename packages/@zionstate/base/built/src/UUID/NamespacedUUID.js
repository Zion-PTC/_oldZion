import { creaNamespaceUUID } from "../../lib/uuid/creaNamespaceUUID";
import { creaNamespacedUUID } from "../../lib/uuid/creaNameSpacedUUID";
import { UUID, validate } from "./UUID";
export class ANamespacedUUID {
}
export class NamespacedUUID {
    MY_SPACE_UUID;
    namespaceUUID = "";
    uuids = [];
    get latestUUID() {
        return this.uuids[this.uuids.length - 1].value;
    }
    constructor(namespace) {
        this.MY_SPACE_UUID = new UUID(this.creaNamespaceUUID(namespace).namespaceUUID, namespace);
    }
    validate = validate;
    creaNamespaceUUID = creaNamespaceUUID;
    creaNamespacedUUID = creaNamespacedUUID;
}
