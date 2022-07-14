import { Base } from "@zionstate/base";

export interface IAccount {
  nome?: string;
  paths?: string[];
}

export class Account extends Base implements IAccount {
  constructor(public nome?: string, public paths?: string[]) {
    super();
    this.type = "account";
  }
}
