import { Account } from "../src/class/Account.js";

export function creaAccount(account: { name: string; paths: string[] }) {
  return new Account(account.name, account.paths);
}
