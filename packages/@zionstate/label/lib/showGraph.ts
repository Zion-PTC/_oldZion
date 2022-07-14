import { Base } from "@zionstate/base";
import { IApp } from "../src/App";

export function showGraph(this: IApp) {
  console.table(Base.basi);
  return this;
}
