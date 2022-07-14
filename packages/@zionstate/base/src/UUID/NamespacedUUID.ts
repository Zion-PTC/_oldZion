import { creaNamespaceUUID } from "../../lib/uuid/creaNamespaceUUID";
import { creaNamespacedUUID } from "../../lib/uuid/creaNameSpacedUUID";
import { UUID, validate, v5 as uuid } from "./UUID";

export interface INamespacedUUID {
  MY_SPACE_UUID: UUID;
  namespaceUUID: string;
  uuids: UUID[];
  get latestUUID(): string;
  validate: typeof validate;
  creaNamespaceUUID(string: string): INamespacedUUID;
  creaNamespacedUUID(string: string): INamespacedUUID;
}

export abstract class ANamespacedUUID implements INamespacedUUID {
  abstract MY_SPACE_UUID: UUID;
  abstract namespaceUUID: string;
  abstract uuids: UUID[];
  abstract get latestUUID(): string;
  abstract validate: typeof validate;
  abstract creaNamespaceUUID(string: string): INamespacedUUID;
  abstract creaNamespacedUUID(string: string): INamespacedUUID;
}

export class NamespacedUUID implements ANamespacedUUID {
  MY_SPACE_UUID: UUID;
  namespaceUUID = "";
  uuids: UUID[] = [];
  get latestUUID(): string {
    return this.uuids[this.uuids.length - 1].value;
  }
  constructor(namespace: string) {
    this.MY_SPACE_UUID = new UUID(
      this.creaNamespaceUUID(namespace).namespaceUUID,
      namespace
    );
  }
  validate = validate;
  creaNamespaceUUID = creaNamespaceUUID;
  creaNamespacedUUID = creaNamespacedUUID;
}
