import { creaNamespaceUUID } from "../../lib/uuid/creaNamespaceUUID";
import { creaNamespacedUUID } from "../../lib/uuid/creaNameSpacedUUID";
import { UUID, validate } from "./UUID";
export interface INamespacedUUID {
    MY_SPACE_UUID: UUID;
    namespaceUUID: string;
    uuids: UUID[];
    get latestUUID(): string;
    validate: typeof validate;
    creaNamespaceUUID(string: string): INamespacedUUID;
    creaNamespacedUUID(string: string): INamespacedUUID;
}
export declare abstract class ANamespacedUUID implements INamespacedUUID {
    abstract MY_SPACE_UUID: UUID;
    abstract namespaceUUID: string;
    abstract uuids: UUID[];
    abstract get latestUUID(): string;
    abstract validate: typeof validate;
    abstract creaNamespaceUUID(string: string): INamespacedUUID;
    abstract creaNamespacedUUID(string: string): INamespacedUUID;
}
export declare class NamespacedUUID implements ANamespacedUUID {
    MY_SPACE_UUID: UUID;
    namespaceUUID: string;
    uuids: UUID[];
    get latestUUID(): string;
    constructor(namespace: string);
    validate: (uuid: string) => boolean;
    creaNamespaceUUID: typeof creaNamespaceUUID;
    creaNamespacedUUID: typeof creaNamespacedUUID;
}
