import { IApp } from "../src/App";
import { BelieveRecord, BelieveRecordsKeyTypes } from "./creaZionCsv";

export function filterRecords(
  this: IApp,
  key: BelieveRecordsKeyTypes,
  value: string
) {
  const res = this.recordsCache.filter((record) => {
    return record[key] === value;
  });
  this.recordsCache = res;
  return this;
}
